import { StartFunc as StartFuncAddOnButton } from "./AddOnButton.js";
import { StartFunc as StartFuncDeleteButton } from "./DeleteRow/EntryFile.js";

const StartFunc = (row, $element, field) => {
    console.log("row------------ : ", row, $element[0].dataset["index"], field);

    if (field === "KS-AddOns") {
        StartFuncAddOnButton({ inRow: row });
    };

    if (field === "KS-Opts") {
        if (window.confirm("Do you really want to Delete Item?")) {
            const jVarLocalRowIndex = $element[0].dataset["index"];

            StartFuncDeleteButton({ inRowIndex: parseInt(jVarLocalRowIndex) });
        };
    };
};

export { StartFunc };