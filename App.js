import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	Button,
	TouchableWithoutFeedback,
	Keyboard
} from "react-native";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import WorkoutInput from "./components/WorkoutInput";
import PRInput from "./components/PRInput";
import ExSets from "./components/ExSets";

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<AppTabNavigator />
		</SafeAreaView>
	);
}

function LogScreen() {
	const [isAddMode, setIsAddMode] = useState(false);

	const [infoArray, setInfoArray] = useState([]);

	const DoneLogHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				activeOpacity={0.5}
				onPress={() => {
					setIsAddMode(true);
				}}
				style={styles.TouchableOpacity}
			>
				<Icon name="ios-add" color="purple" size={45} />
			</TouchableOpacity>
			<WorkoutInput visible={isAddMode} onDone={DoneLogHandler} />
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Workout Log</Text>
			</View>
		</View>
	);
}

function PRScreen() {
	const [PRArray, setPRArray] = useState([]);
	const [setsArray, setSetsArray] = useState([]);
	const [weight, setWeight] = useState("");
	const [reps, setReps] = useState("");
	const [date, setDate] = useState("");

	const addPR = () => {
		alert("test");
	};

	const addSets = () => {
		setSetsArray(setsArray => [
			...setsArray,
			{ Weight: weight, Reps: reps, Date: date }
		]);
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
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<View style={styles.color}>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={addPR.bind(this)}
						style={styles.TouchableOpacity}
					>
						<Icon name="ios-add" color="purple" size={45} />
					</TouchableOpacity>
					<View style={styles.header}>
						<Text style={styles.headerTitle}>Personal Records</Text>
					</View>

					<View style={styles.boxWorkouts}>
						<TextInput
							selectionColor="blue"
							style={styles.input2}
							placeholder="Excercise Name"
							placeholderTextColor="#a9a9a9"
							maxLength={30}
							multiline={false}
						/>
						<ExSets weight={setWeights} rep={setRep} date={setDates} />
						{sets}
						<View style={styles.addSet}>
							<Button title="Add Set" color="purple" onPress={addSets}></Button>
						</View>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
const AppTabNavigator = createMaterialBottomTabNavigator(
	{
		PR: {
			screen: PRScreen,
			navigationOptions: {
				tabBarLabel: "Personal Records",
				tabBarIcon: ({ tintColor }) => (
					<Icon name="ios-star" color={tintColor} size={24} />
				)
			}
		},
		Log: {
			screen: LogScreen,
			navigationOptions: {
				tabBarLabel: "Workout Logs",
				tabBarIcon: ({ tintColor }) => (
					<Icon name="ios-book" color={tintColor} size={24} />
				)
			}
		}
	},
	{
		initialRouteName: "PR",
		order: ["PR", "Log"],
		activeTintColor: "purple"
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center"
	},
	TouchableOpacity: {
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		right: 30,
		top: -50
	},
	header: {
		top: -40,
		paddingLeft: 20,
		position: "relative"
	},
	headerTitle: {
		color: "black",
		fontSize: 25,
		fontWeight: "bold"
	},
	color: {
		flex: 1,
		marginTop: 70,
		backgroundColor: "#F0EFF5"
	},
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
