import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
    const [mutate, result] = useMutation(CREATE_USER);

    const signUp = async ({ username, password }) => {
        try {
            await mutate({
                variables:
                { user: { username, password }}
            });
        } catch(e) {
            console.log(e.message);
        }
    };

    return [signUp, result];
};

export default useSignUp;