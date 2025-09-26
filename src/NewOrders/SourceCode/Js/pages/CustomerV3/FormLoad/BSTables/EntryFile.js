import { StartFunc as StartFuncYesterdayTableId } from "./YesterdayTableId/EntryFile.js";
import { StartFunc as StartFuncThisWeekTableId } from "./ThisWeekTableId/EntryFile.js";

const StartFunc = () => {
    StartFuncYesterdayTableId();
    StartFuncThisWeekTableId();
};

export { StartFunc };
