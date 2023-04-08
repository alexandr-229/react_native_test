import { StyleSheet } from "react-native";
import { Fonts } from "../constants/Fonts";

const GlobalStyle = StyleSheet.create({
	header: {
		backgroundColor: "rgb(77, 77, 212)"
	},
	headerTitle: {
		fontSize: 30,
		color: "#fff",
		fontFamily: Fonts.REGULAR
	},
	body: {
		paddingHorizontal: 10,
		paddingVertical: 15,
		backgroundColor: "rgb(169, 169, 246)",
		flex: 1
	}
});

export default GlobalStyle;
