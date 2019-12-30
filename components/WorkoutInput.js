import React, { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Modal,
	SafeAreaView,
	TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const WorkoutInput = props => {
	return (
		<SafeAreaView>
			<Modal visible={props.visible} animationType="slide">
				<View style={styles.screen}>
					<View style={styles.buttonContain}>
						<TouchableOpacity
							activeOpacity={0.5}
							onPress={props.onDone}
							style={styles.done}
						>
							<Icon name="ios-close" color="purple" size={45} />
						</TouchableOpacity>
						<View style={styles.firstContainer}>
							<TextInput
								style={styles.input}
								fontSize={18}
								placeholder="Date"
							/>
							<TextInput placeholder="Notes" />
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
		right: 80
	},
	firstContainer: {
		top: "40%",
		marginLeft: "-43%"
	},
	input: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		padding: 1
	}
});

export default WorkoutInput;
