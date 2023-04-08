import { Item, FetchDataAction } from "../types";
import { Actions } from "../constants/Actions";

export const setData = (lists: Item[]): FetchDataAction => ({
	type: Actions.SET_DATA,
	payload: lists
});

export const fetchData = (): FetchDataAction => ({
	type: Actions.FETCH_DATA
});
