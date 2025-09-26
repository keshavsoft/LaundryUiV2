import { StartFunc as YesterdayRefreshButtonId } from "./YesterdayRefreshButtonId/EntryFile.js";
import { StartFunc as ThisWeekTableId } from "./ThisWeekTableId/EntryFile.js";


let StartFunc = () => {
    YesterdayRefreshButtonId();
    ThisWeekTableId()
};

export { StartFunc }