import { StartFunc as StartFuncYesterdayTableId } from "./YesterdayTableId/EntryFile.js";
import { StartFunc as StartFuncThisWeekTableId } from "./ThisWeekTableId/EntryFile.js";
import { StartFunc as StartFuncAllTableId } from "./AllTableId/EntryFile.js";

const StartFunc = () => {
    StartFuncYesterdayTableId();
    StartFuncThisWeekTableId();
    StartFuncAllTableId();
};

export { StartFunc };
