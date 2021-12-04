import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';

import Text from '../Text';
import theme from '../../theme';
import useAuthStorage from '../../hooks/useAuthStorage';

const AppBarTab = ({ tabText, to }) => {
    const [pressed, setPressed] = React.useState(false);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const history = useHistory();

    // https://stackoverflow.com/a/34637687
    const styles = StyleSheet.create({
        link: {
            color: pressed ? theme.twitterColors.blue : "white",
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center"
        }
    });

    const handleSignout = async () => {
        try {
            await authStorage.removeAccessToken();
            apolloClient.resetStore();
            history.push("/");
        } catch (e) {
            console.log(e.message);
        }
    };

    if (to === "/signout") {
        return (
            <Pressable
                style={{ paddingRight: 20 }}
                onPress={handleSignout}
            >
                {({ pressed }) => (
                    <Text style={[
                            styles.link,
                            { color: pressed ? theme.twitterColors.blue : "white" }
                        ]}
                    >
                        {tabText}
                    </Text>
                )}
            </Pressable>
        );
    } else {
        return (
            <Link
                onHideUnderlay={() => setPressed(false)}
                onShowUnderlay={() => setPressed(true)}
                underlayColor={null}
                style={{ paddingRight: 20 }}
                to={to}
            >
                <Text style={styles.link} >{tabText}</Text>
            </Link>
        );
    }
};

export default AppBarTab;