import { StartFunc as StartFuncButtonClickFunc } from "./QRGenerate/2-ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    if (field === "QRRaise" && row.IsQrCodesRaised === false) {
        StartFuncButtonClickFunc({ inRowData: row });
    };
};
export { StartFunc };