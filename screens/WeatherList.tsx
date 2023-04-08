import { ScrollView, Text, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../store/actions";
import { IState, Item } from "../types";
import { paginateArray } from "../helpers";
import { Slider } from "../components/Slider";
import { Fonts } from "../constants/Fonts";
import GlobalStyle from "../styles";

export const WeatherList = () => {
	const dispatch = useDispatch();
	const list = useSelector((state: IState) => state.list);
	const paginatedArray = paginateArray<Item>(list, 5);

	useEffect(() => {
		dispatch(fetchData());
	}, []);

	return (
		<View style={GlobalStyle.body}>
			{paginatedArray.length ? (
				<ScrollView>
					{paginatedArray.map((array: Item[], index: number) => (
						<Slider key={array.toString()} items={array} index={index + 1} />
					))}
				</ScrollView>
			) : (
				<View style={styles.textWrapper}>
					<Text style={styles.text}>
						No weather information. Please check .env file
					</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	textWrapper: {
		flex: 1,
		justifyContent: "center"
	},
	text: {
		color: "white",
		fontFamily: Fonts.REGULAR,
		fontSize: 20,
		textAlign: "center"
	}
});
