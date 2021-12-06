import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import OrderBy from './OrderBy';
import FilterInput from './FilterInput';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const renderItem = ({ item }) => {
    return <RepositoryItem item={item} />;
};

const ItemSeparator = () => <View style={styles.separator} />;

// https://github.com/facebook/react-native/issues/13602
export class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    const { refetch } = this.props;

    return (
      <>
        <OrderBy refetch={refetch} />
        <FilterInput refetch={refetch} />
      </>
    );
  };

  render() {
    const { repositories, onEndReach } = this.props;

    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        // low threshold to demonstrate infinite scrolling
        onEndReachedThreshold={0.01}
        onEndReached={onEndReach}
      />
    );
  }
}

// Removed all side effects from the container for testing
const RepositoryList = () => {
  // first is low to demonstrate infinite scrolling
  const { repositories, refetch, fetchMore } = useRepositories({ first: 2 });

  const onEndReach = () => fetchMore();

  return (
    <RepositoryListContainer
      refetch={refetch}
      repositories={repositories}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;