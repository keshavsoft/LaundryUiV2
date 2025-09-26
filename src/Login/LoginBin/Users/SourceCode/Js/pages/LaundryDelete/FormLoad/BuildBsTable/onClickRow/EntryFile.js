import { StartFunc as StartFuncDeleteButton } from "./DeleteRow/EntryFile.js";

const StartFunc = (row, $element, field) => {
    console.log("row : ", row);

    if (field === "KS-Opts") {
        if (window.confirm("Do you really want to Delete Item?")) {
            StartFuncDeleteButton({ inRowpk: row.UuId });
        };
    };
};

export { StartFunc };