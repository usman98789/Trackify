import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const HoldWorkout = props => {
	const [exName, setExName] = useState("");
	const [setsArray, setSetsArray] = useState([]);
	const [weight, setWeight] = useState("");
	const [reps, setReps] = useState("");
	const [date, setDate] = useState();

	const addSets = () => {
		setSetsArray(setsArray => [
			...setsArray,
			{ Weight: weight, Reps: reps, Date: date }
		]);
	};

	const setName = n => {
		setExName(n);
	};

	const setWeights = w => {
		setWeight(w);
	};

	const setRep = r => {
		setReps(r);
	};

	const setDates = d => {
		setDate(d);
	};

	let sets = setsArray.map((val, key) => {
		return (
			<ExSets
				weight={setWeights}
				rep={setRep}
				date={setDates}
				key={key}
				keyval={key}
				val={val}
			/>
		);
	});
	return (
		<View key={props.keyval} style={styles.boxWorkouts}>
			<TextInput
				selectionColor="blue"
				style={styles.input2}
				placeholder="Excercise Name"
				placeholderTextColor="#a9a9a9"
				maxLength={30}
				multiline={false}
				onChangeText={setName}
			/>
			<ExSets weight={setWeights} rep={setRep} date={setDates} />
			{sets}
			<View style={styles.addSet}>
				<Button title="Add Set" color="purple" onPress={addSets}></Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	boxWorkouts: {
		borderColor: "#BFBFBF",
		borderWidth: 1,
		backgroundColor: "white",
		height: 90
	},
	input2: {
		backgroundColor: "white",
		borderBottomColor: "#BFBFBF",
		borderBottomWidth: 1,
		height: 50,
		fontSize: 19,
		right: -30
	},
	addSet: {
		borderColor: "#BFBFBF",
		borderBottomWidth: 1,
		marginTop: 0,
		backgroundColor: "white",
		height: 40
	}
});

export default HoldWorkout;
