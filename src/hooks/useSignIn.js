import { useMutation } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/mutations';

const useSignIn = () => {
    // https://www.apollographql.com/docs/react/data/mutations/
    const [mutate, result] = useMutation(AUTHORIZE_USER);
  
    const signIn = ({ username, password }) => {
        return mutate({
            variables:
            { credentials: { username, password }}
        });
    };
  
    return [signIn, result];
};

export default useSignIn;