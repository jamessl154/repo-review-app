import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';
import theme from '../theme';

const AppBarTab = ({ tabText, to }) => {
    const [pressed, setPressed] = React.useState(false);

    // https://stackoverflow.com/a/34637687
    const styles = StyleSheet.create({
        link: {
            color: pressed ? theme.twitterColors.blue : "white",
            fontSize: 18,
            fontWeight: "500",
            textAlign: "center"
        }
    });

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
};

export default AppBarTab;