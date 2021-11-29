import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';
import { useHistory } from 'react-router-native';

const useSignIn = () => {
    // https://www.apollographql.com/docs/react/data/mutations/
    const [mutate, result] = useMutation(AUTHORIZE_USER);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const history = useHistory();
  
    const signIn = async ({ username, password }) => {
        
        try {
            const { data } = await mutate({
                variables:
                { credentials: { username, password }}
            });
            await authStorage.setAccessToken(data.authorize.accessToken);
            apolloClient.resetStore();
            history.push("/");
        } catch(e) {
            console.log(e.message);
        }
    };
  
    return [signIn, result];
};

export default useSignIn;