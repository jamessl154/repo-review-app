import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import OrderBy from './OrderBy';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const renderItem = ({ item }) => {
    return <RepositoryItem item={item} />;
};

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, refetch }) => {
  // lifting up state so that it is maintained when the refetch unmounts ListHeaderComponent
  const [orderBy, setOrderBy] = useState("Latest");

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() =>
        <OrderBy
          refetch={refetch}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />}
    />
  );
};

// Removed all side effects from the container for testing
const RepositoryList = () => {
  const { repositories, refetch } = useRepositories();

  return <RepositoryListContainer refetch={refetch} repositories={repositories} />;
};

export default RepositoryList;