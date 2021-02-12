import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [userGoals, setCourseGoals] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    const addGoalHandler = (goalTitle) => {
        setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]) // We use here the spread operator

        // Remove the modal when a goal has been added
        setModalVisibility(false)
    }

    const removeGoalHandler = (goalID) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goalID !== goal.key)
        })
    }

    const setModalVisibility = (isVisible) => setIsModalVisible(isVisible)

    return (
        <View style={style.screen}>
            <Button
                title="Add new goal"
                onPress={() => setModalVisibility(true)}
            />
            <GoalInput
                goalHandler={addGoalHandler}
                isModalVisible={isModalVisible}
                onCancelPressed={() => setModalVisibility(false)}
            />
            <FlatList
                data={userGoals}
                keyExtractor={(item, _) => item.key}
                renderItem={itemData =>
                    <GoalItem
                        onPress={removeGoalHandler}
                        item={itemData}
                    />
                }
            />
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        padding: 50
    }
})
