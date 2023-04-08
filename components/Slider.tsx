import {
	View,
	ScrollView,
	StyleSheet,
	Dimensions,
	Text,
	Image
} from "react-native";
import { Fonts } from "../constants/Fonts";
import { Item } from "../types";

interface IProps {
	items: Item[];
	index: number;
}

const { width } = Dimensions.get("window");

export const Slider = ({ items, index }: IProps) => {
	return (
		<View style={styles.block}>
			<Text style={[styles.title, styles.text]}>{index}-th week</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{items.map((item: Item, index: number) => (
					<View
						key={item.dt_txt}
						style={{
							...styles.item,
							marginRight: index === items.length - 1 ? 0 : 15
						}}>
						<Image
							source={{
								uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
							}}
							style={styles.img}
						/>
						<View>
							<Text style={[styles.text, styles.temp]}>
								{item.main.temp.toFixed()}°
							</Text>
							<Text style={[styles.text, styles.description]}>
								{items[0].weather[0].description}
							</Text>
							<Text style={[styles.text, styles.date]}>
								{item.dt_txt.split(" ")[0]}
							</Text>
						</View>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	block: {
		paddingHorizontal: 15
	},
	text: {
		fontFamily: Fonts.REGULAR,
		color: "white"
	},
	title: {
		fontSize: 20
	},
	item: {
		width: width - 50,
		height: width > 375 ? 200 : 150,
		backgroundColor: "rgb(187, 187, 236)",
		borderRadius: 10,
		marginRight: 15,
		flexDirection: "row",
		alignItems: "center"
	},
	img: {
		width: "50%",
		height: "50%"
	},
	temp: {
		fontSize: 35
	},
	description: {
		fontSize: 18
	},
	date: {
		fontSize: 15
	}
});
