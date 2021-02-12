import React, {useState} from 'react'
import {Button, TextInput, View, StyleSheet, Modal} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("")

    const goalInputHandler = (goal) => {
        setEnteredGoal(goal)
    }

    const addGoalHandler = () => {
        props.goalHandler(enteredGoal)
        goalInputHandler("")
    }

    return (
        <Modal
            isVisible={props.isModalVisible}
            animationType="slide">
            <View style={style.inputContainer}>
                <TextInput
                    placeholder="Course goal"
                    style={style.input}
                    onChangedText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={style.buttonsContainer}>
                    <View style={style.button}>
                        <Button
                            title="Add"
                            onPress={addGoalHandler}/>
                    </View>
                    <View style={style.button}>
                        <Button
                            title="Cancel"
                            color="red"
                            onPress={props.onCancelPressed}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const style = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    buttonsContainer: {
        flexDirection: "row",
        alignContent: "space-between",
        width: "60%"
    },
    button: {
        width: "40%"
    }
})