import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity
} from "react-native";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import WorkoutInput from "./components/WorkoutInput";

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<AppTabNavigator />
		</SafeAreaView>
	);
}

function LogScreen() {
	const [isAddMode, setIsAddMode] = useState(false);

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
	return (
		<View style={styles.container}>
			<Text>Your Personal Records</Text>
		</View>
	);
}
const AppTabNavigator = createMaterialBottomTabNavigator(
	{
		Log: {
			screen: LogScreen,
			navigationOptions: {
				tabBarLabel: "Workout Logs",
				tabBarIcon: ({ tintColor }) => (
					<Icon name="ios-book" color={tintColor} size={24} />
				)
			}
		},
		PR: {
			screen: PRScreen,
			navigationOptions: {
				tabBarLabel: "Personal Records",
				tabBarIcon: ({ tintColor }) => (
					<Icon name="ios-star" color={tintColor} size={24} />
				)
			}
		}
	},
	{
		initialRouteName: "Log",
		order: ["Log", "PR"],
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
		top: 20
	},
	header: {
		width: "100%",
		height: 450,
		paddingLeft: 20,
		alignItems: "baseline",
		justifyContent: "flex-start"
	},
	headerTitle: {
		color: "black",
		fontSize: 25
	}
});
