import { API_TOKEN, CITY_ID } from "@env";
import { IResponse } from "../types";

const getData = async (): Promise<IResponse> => {
	const params = new URLSearchParams();
	const cityId = CITY_ID || "5368361"; //Los Angeles
	params.append("id", cityId);
	params.append("appid", API_TOKEN);
	params.append("units", "metric");
	const url = `http://api.openweathermap.org/data/2.5/forecast?${params.toString()}`;
	const response = await fetch(url);
	const data: IResponse = await response.json();
	return data;
};

export { getData };
