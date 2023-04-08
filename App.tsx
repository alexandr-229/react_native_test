import { useFonts } from "./hooks/useFonts";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import store from "./store";

export default function App() {
	const fontLoaded = useFonts();

	if (!fontLoaded) return null;

	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}
