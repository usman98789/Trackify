import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, DatePickerIOS } from "react-native";

import DatePicker from "react-native-datepicker";

const ExSets = props => {
	const [date, setDate] = useState(new Date());

	const dateHandle = d => {
		setDate(d);
		props.date(d);
	};

	return (
		<View key={props.keyval} style={styles.box}>
			<View style={styles.above}>
				<Text style={{ color: "purple" }}>Weight</Text>
				<Text style={{ color: "purple", left: 44 }}>Reps</Text>
				<Text style={{ color: "purple", left: 100 }}>Date</Text>
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

			<DatePicker
				style={[styles.input2, styles.reps, styles.weight, styles.date]}
				mode="date"
				date={date}
				placeholder="Date"
				format="YYYY-MM-DD"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				showIcon={false}
				onDateChange={dateHandle}
				customStyles={{
					dateInput: {
						borderWidth: 0,
						alignItems: "flex-start"
					},
					placeholderText: {
						color: "#a9a9a9",
						fontSize: 19
					},
					dateText: {
						color: "black",
						fontSize: 14
					},
					btnTextConfirm: {
						color: "purple"
					}
				}}
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
		right: -120
	},
	date: {
		width: 82,
		right: -208
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
