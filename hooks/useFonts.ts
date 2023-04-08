import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import { Fonts } from "../constants/Fonts";

const useFonts = () => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		loadResourcesAndDataAsync();
	}, []);

	const loadResourcesAndDataAsync = async () => {
		try {
			await Font.loadAsync({
				...FontAwesome.font,
				[Fonts.REGULAR]: require("../assets/fonts/Poppins-Regular.ttf")
			});
		} finally {
			setFontsLoaded(true);
		}
	};

	return fontsLoaded;
};

export { useFonts };
