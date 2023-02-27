import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import colors from "../constants/colors";

const Bubble = props => {

    const { text, type } = props;

    const bubbleStyle = {...styles.container};
    const textStyle = {...styles.text};

    switch (type) {
        case 'system':
            textStyle.color = '#65644A';
            bubbleStyle.backgroundColor = colors.beige;
            bubbleStyle.alignItens = 'center';
            bubbleStyle.marginTop = 10;
            break;

        default:
            break;
    }

    return (
        <View style={styles.wrapperStyles}>
            <View style={bubbleStyle}>
                <Text style={textStyle}>
                    {text}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapperStyles: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    container: {
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 5,
        marginBottom: 10,
        borderColor: '#E2DACC',
        borderWidth: 1
    },
    text: {
        fontFamily: 'regular',
        letterSpacing: 0.3,

    },
    
});

export default Bubble;