import { StartFunc as StartFuncButtonClickFunc } from "./OrderDelete/2-ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    if (field === "Opts") {
        if (!row.IsSettled) {
            StartFuncButtonClickFunc({ inRowData: row });

        }
    };
};
export { StartFunc };