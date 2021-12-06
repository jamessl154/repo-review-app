import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    // if pageInfo.hasNextPage is true there are more nodes on the next page
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    // if loading is false and more nodes exist we proceed
    if (!canFetchMore) return;

    /*
    useRepositories receives the "first" variable as a parameter
    which is how many nodes the query returns ahead of "after"
    or the start of the list if not specified.
    fetchMore here passes "after" the value of the previous endCursor.
    So effectively, fetchMore() queries the next 2 nodes ahead of the
    "after" cursor and adding them to the same query in cache until the list
    is exhausted.
    */

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });

  };

  return {
    repositories : data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result
  };
};

export default useRepositories;

/* REST implementation

import { useState, useEffect } from 'react';
import Constants from 'expo-constants';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch(Constants.manifest.extra.REST_URI);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

*/