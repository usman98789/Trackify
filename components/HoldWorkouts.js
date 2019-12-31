import React from "react";
import { View, StyleSheet } from "react-native";

const HoldWorkout = props => {
	<View key={props.keyval} style={style.boxWorkouts}></View>;
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
