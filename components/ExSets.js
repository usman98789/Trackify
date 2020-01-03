import React from "react";
import {
	View,
	StyleSheet,
	TextInput,
	Text,
	TouchableWithoutFeedback,
	Keyboard
} from "react-native";

const ExSets = props => {
	return (
		<View key={props.keyval} style={styles.box}>
			<View style={styles.above}>
				<Text style={{ color: "purple" }}>
					Weight &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				</Text>
				<Text style={{ color: "purple" }}>Reps</Text>
			</View>

			<TextInput
				selectionColor="blue"
				style={[styles.input2, styles.weight]}
				placeholder="0"
				placeholderTextColor="#a9a9a9"
				onChangeText={props.weight}
				keyboardType="number-pad"
				maxLength={4}
			/>
			<TextInput
				selectionColor="blue"
				style={[styles.input2, styles.reps, styles.weight]}
				placeholder="0"
				placeholderTextColor="#a9a9a9"
				onChangeText={props.rep}
				keyboardType="number-pad"
				maxLength={4}
			/>
			<TextInput
				selectionColor="blue"
				style={[styles.input2, styles.reps, styles.weight, styles.date]}
				placeholder="Date"
				placeholderTextColor="#a9a9a9"
				onChangeText={props.date}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input2: {
		backgroundColor: "white",
		height: 35,
		width: 300,
		marginTop: 1,
		fontSize: 19,
		right: -30
	},
	weight: {
		fontSize: 17,
		alignContent: "center",
		justifyContent: "center"
	},
	reps: {
		marginTop: -35,
		right: -140
	},
	date: {
		width: 82,
		right: -250
	},
	box: {
		borderColor: "#BFBFBF",
		borderBottomWidth: 1,
		backgroundColor: "white"
	},
	above: {
		flexDirection: "row",
		marginTop: 6,
		left: 30
	}
});

export default ExSets;
