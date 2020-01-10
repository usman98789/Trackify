import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const HoldNote = props => {
	const [note, setNote] = useState("");

	const setnote = x => {
		setNote(x);
		props.note(note);
	};

	let d = new Date();
	let date_format =
		d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
	props.date(date_format);

	return (
		<View key={props.keyval} style={styles.note}>
			<Text style={styles.dateText}>{date_format}</Text>
			<TextInput
				selectionColor="blue"
				style={styles.noteText}
				placeholder="Enter a Note"
				placeholderTextColor="#a9a9a9"
				multiline={false}
				maxLength={35}
				onChangeText={setnote}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	note: {
		position: "relative",
		padding: 20,
		paddingRight: 100,
		borderBottomWidth: 2,
		borderBottomColor: "#ededed"
	},
	dateText: {
		paddingLeft: 20,
		borderLeftWidth: 10,
		borderLeftColor: "purple",
		color: "purple"
	},
	noteText: {
		paddingLeft: 20,
		borderLeftWidth: 10,
		height: 35,
		borderLeftColor: "purple",
		fontSize: 16
	}
});

export default HoldNote;
