import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet } from "react-native";
import { useDebounce } from 'use-debounce';

import theme from "../../theme";

const styles = StyleSheet.create({
    input: {
        color: "white",
        backgroundColor: theme.twitterColors.blue,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        padding: 10
    }
});

const FilterInput = ({ refetch }) => {
    const [filter, setFilter] = useState();
    // https://www.npmjs.com/package/use-debounce
    const [debouncedFilter] = useDebounce(filter, 500);

    // waiting 2 seconds before refetching query with the TextInput value as searchKeyword
    useEffect(() => {
        refetch({ searchKeyword: debouncedFilter });
    }, [debouncedFilter]);

    return (
        <TextInput
            placeholder="Search Repositories"
            placeholderTextColor="white"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(text) => setFilter(text)}
        />
    );
};

export default FilterInput;