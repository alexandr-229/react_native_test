import { Reducer } from "redux";
import { Action, IState, Item } from "../types";
import { Actions } from "../constants/Actions";

const initialState: IState = {
	list: []
};

const rootReducer: Reducer<IState, Action<Item[]>> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case Actions.SET_DATA:
			const list: Item[] = [];
			if (!action.payload) {
				action.payload = [];
			}
			for (const item of action.payload) {
				const dateStr = item.dt_txt.split(" ")[0].split("-");
				const date = new Date(+dateStr[0], +dateStr[1], +dateStr[2]);
				const existItem = list.some((item) => item.dt === date.getTime());
				if (!existItem) {
					item.dt = date.getTime();
					list.push(item);
				}
			}
			return {
				...state,
				list
			};
		default:
			return state;
	}
};

export default rootReducer;
