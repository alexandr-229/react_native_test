import { FontAwesome } from "@expo/vector-icons";

export interface ITabBarIconProps {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}

export interface IResponse {
	cod: string;
	message: number;
	cnt: number;
	list: Item[];
	city: City;
}

export interface IState {
	list: Item[];
}

export interface Action<T> {
	type: string;
	payload?: T;
}

export interface FetchDataAction extends Action<Item[]> {}

export interface IDateCalendar {
	dateString: string;
	day: number;
	month: number;
	timestamp: number;
	year: number;
}

export interface IModalData {
	temp: number;
	icon: string;
}

export interface Item {
	dt: number;
	main: Main;
	weather: Weather[];
	clouds: {
		all: number;
	};
	wind: Wind;
	visibility: number;
	pop: number;
	sys: {
		pod: string;
	};
	dt_txt: string;
}

interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
}

interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface Wind {
	speed: number;
	deg: number;
	gust: number;
}

interface City {
	id: number;
	name: string;
	coord: Coord;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}

interface Coord {
	lat: number;
	lon: number;
}
