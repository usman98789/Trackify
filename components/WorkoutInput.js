import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Modal,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	Button
} from "react-native";

import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/Ionicons";

const WorkoutInput = props => {
	const [date, setDate] = useState();
	const [workouts, Setworkouts] = useState([]);
	const dateHandle = d => {
		setDate(d);
	};

	return (
		<SafeAreaView>
			<Modal visible={props.visible} animationType="slide">
				<View style={styles.screen}>
					<View style={styles.done}>
						<Button title="Done" color="purple" onPress={props.onDone} />
					</View>

					<View style={styles.color}>
						<View style={styles.box}>
							<View style={styles.firstContainer}>
								<DatePicker
									style={styles.date}
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
											borderBottomWidth: 1,
											backgroundColor: "white",
											borderBottomColor: "#BFBFBF",
											alignItems: "flex-start"
										},
										placeholderText: {
											color: "#a9a9a9",
											fontSize: 16
										},
										dateText: {
											color: "black"
										},
										btnTextConfirm: {
											color: "purple"
										}
									}}
								/>
								<TextInput
									selectionColor="blue"
									style={styles.input}
									placeholder="Notes"
									placeholderTextColor="#a9a9a9"
								/>
							</View>
						</View>
						<View style={styles.boxWorkouts}>
							<TextInput
								selectionColor="blue"
								style={styles.input2}
								placeholder="Excercise Name"
								placeholderTextColor="#a9a9a9"
							/>
						</View>

						<View style={styles.box2}>
							<Button title="Add Excercise" color="purple"></Button>
						</View>
					</View>
				</View>
			</Modal>
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

export default WorkoutInput;
