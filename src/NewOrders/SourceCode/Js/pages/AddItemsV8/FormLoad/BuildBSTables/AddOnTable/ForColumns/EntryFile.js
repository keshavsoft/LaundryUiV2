import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnopts = LocalColumns.find(element => element.field === "KS-Opts");
    let LocalColumnRate = LocalColumns.find(element => element.field === "AddOnRate");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });
    };

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
};

export { StartFunc };