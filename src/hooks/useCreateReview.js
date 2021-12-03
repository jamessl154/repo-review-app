import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-native";

import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);
    const history = useHistory();

    const createReview = async ({ repositoryName, ownerName, rating, text }) => {
        try {
            const { data } = await mutate({
                variables: {
                    review: { repositoryName, ownerName, rating, text }
                }
            });
    
            if (data && data.createReview) {
                history.push(`repos/${data.createReview.repositoryId}`);
            }

            // if the operation is successful, the return value of createReview is falsy
        } catch(e) {
            return e.message;
        }
    };

    return [createReview, result];
};

export default useCreateReview;