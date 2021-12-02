import React from "react";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";

import { GET_SINGLE_REPO } from '../../graphql/queries';
import RepositoryHeader from "./RepositoryHeader";

const SingleRepository = () => {
    const { id } = useParams();
    const { data } = useQuery(GET_SINGLE_REPO, { variables: { id } });

    if (data && data.repository) {
        const { repository } = data;

        return (
            <RepositoryHeader repository={repository} />
        );
    } else return null;
};

export default SingleRepository;