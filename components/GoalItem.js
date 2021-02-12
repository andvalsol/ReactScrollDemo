import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress.bind(this, props.item.value)}>
            <View
                style={style.listItem}>
                <Text>
                    {props.item.value}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem

const style = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#FAFAFA",
        borderColor: "black",
        borderWidth: 1
    }
})