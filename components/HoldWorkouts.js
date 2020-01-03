import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const HoldWorkout = props => {
	<View key={props.keyval} style={styles.boxWorkouts}>
		<TextInput
			selectionColor="blue"
			style={styles.input}
			placeholder="Excercise Name"
			placeholderTextColor="#a9a9a9"
		/>
	</View>;
};

const styles = StyleSheet.create({
	boxWorkouts: {
		borderColor: "#BFBFBF",
		borderWidth: 1,
		marginTop: 40,
		backgroundColor: "white",
		height: 100
	}
});

export default HoldWorkout;
