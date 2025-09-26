import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnopts = LocalColumns.find(element => element.field === "KS-Opts");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });
    };
};

export { StartFunc };