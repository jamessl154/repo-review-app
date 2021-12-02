import React from "react";

import Text from "../Text";

const ReviewItem = ({ review }) => {
    return (
        <Text>
            {JSON.stringify(review, null, 2)}
        </Text>
    );
};

export default ReviewItem;