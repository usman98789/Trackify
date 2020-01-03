import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/Ionicons";

const PRInput = props => {
	return (
		<SafeAreaView>
			<View key={props.keyVal}>
				<Text>Excercise</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	buttonContain: {
		flexDirection: "row",
		width: "60%",
		marginLeft: "30%"
	},
	done: {
		top: 30,
		right: 135
	},
	firstContainer: {
		top: "5%",
		marginLeft: "8%"
	},
	color: {
		flex: 1,
		marginTop: 25,
		backgroundColor: "#F0EFF5"
	},
	input: {
		backgroundColor: "white",
		borderBottomColor: "#BFBFBF",
		borderBottomWidth: 1,
		height: 30,
		width: 300,
		marginTop: 10,
		fontSize: 16
	},
	input2: {
		backgroundColor: "white",
		borderBottomColor: "#BFBFBF",
		borderBottomWidth: 1,
		height: 35,
		width: 300,
		marginTop: 10,
		fontSize: 19,
		right: -30
	},
	date: {
		width: 300,
		alignItems: "flex-start"
	},
	box: {
		borderColor: "#BFBFBF",
		borderWidth: 1,
		marginTop: 40,
		backgroundColor: "white",
		height: 110
	},
	box2: {
		borderColor: "#BFBFBF",
		borderWidth: 1,
		marginTop: 40,
		backgroundColor: "white",
		height: 40
	},
	boxWorkouts: {
		borderColor: "#BFBFBF",
		borderWidth: 1,
		marginTop: 40,
		backgroundColor: "white",
		height: 95
	}
});

export default PRInput;
