import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const HoldNote = props => {
	return (
		<View key={props.keyval} style={styles.boxWorkouts}>
			<TextInput
				selectionColor="blue"
				style={styles.input2}
				placeholder="Enter a Note"
				placeholderTextColor="#a9a9a9"
				multiline={false}
				maxLength={35}
				onChangeText={props.note}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	boxWorkouts: {
		borderColor: "#BFBFBF",
		borderBottomWidth: 1,
		borderTopWidth: 1,
		backgroundColor: "white",
		marginBottom: 30
	},
	input2: {
		backgroundColor: "white",
		height: 40,
		fontSize: 18,
		right: -30
	}
});

export default HoldNote;
