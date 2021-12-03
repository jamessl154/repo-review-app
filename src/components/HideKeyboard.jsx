import React from "react";
import { ScrollView } from "react-native";

const HideKeyboard = ({ children }) => (
    // https://stackoverflow.com/a/34779467
    // ScrollView for hiding keyboard that wraps children
    // so user can press on background and hide the keyboard
    // e.g. prevents buttons from not being able to be clicked on expanding content
    <ScrollView keyboardShouldPersistTaps='handled'>
        {children}
    </ScrollView>
);

export default HideKeyboard;