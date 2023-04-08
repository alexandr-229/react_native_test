import { useEffect, useState } from "react";
import { View, Modal, Text, Pressable, StyleSheet, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { useSelector, useDispatch } from "react-redux";
import { format, addDays } from "date-fns";
import { IDateCalendar, IState, IModalData, Item } from "../types";
import { fetchData } from "../store/actions";
import { Fonts } from "../constants/Fonts";
import GlobalStyle from "../styles";

export const WeatherCalendar = () => {
	const [modalData, setModalData] = useState<null | IModalData>(null);
	const list: Item[] = useSelector((state: IState) => state.list);
	const dispatch = useDispatch();
	const formatDate = "yyyy-MM-dd";

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	const onPressHandle = (data: IDateCalendar) => {
		const item = list.find((i) => data.dateString === i.dt_txt.split(" ")[0]);
		if (item) {
			const modalData: IModalData = {
				icon: item.weather[0].icon,
				temp: item.main.temp
			};
			setModalData(() => modalData);
		}
	};

	return (
		<View style={GlobalStyle.body}>
			{list.length ? (
				<>
					<Calendar
						minDate={format(new Date(), formatDate)}
						maxDate={format(addDays(new Date(), list.length - 1), formatDate)}
						onDayPress={onPressHandle}
					/>
					<View style={styles.centeredView}>
						<Modal
							animationType="slide"
							transparent={true}
							visible={!!modalData}
							onRequestClose={() => {}}>
							<View style={styles.centeredView}>
								<View style={styles.modalView}>
									<Image
										style={styles.image}
										resizeMode="contain"
										source={{
											uri: `http://openweathermap.org/img/wn/${modalData?.icon}@2x.png`
										}}
									/>
									<Text style={styles.modalText}>
										{modalData?.temp.toFixed()}°
									</Text>
									<Pressable
										style={styles.button}
										onPress={() => setModalData(() => null)}>
										<Text style={styles.textStyle}>Hide</Text>
									</Pressable>
								</View>
							</View>
						</Modal>
					</View>
				</>
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
	centeredView: {
		flex: 1,
		justifyContent: "center",
		marginTop: 22
	},
	modalView: {
		overflow: "hidden",
		margin: 10,
		backgroundColor: "rgb(187, 187, 236)",
		borderRadius: 20,
		padding: 15,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: "#2196F3",
		width: "90%"
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
		fontSize: 40
	},
	image: {
		minHeight: 200,
		minWidth: 200
	},
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
