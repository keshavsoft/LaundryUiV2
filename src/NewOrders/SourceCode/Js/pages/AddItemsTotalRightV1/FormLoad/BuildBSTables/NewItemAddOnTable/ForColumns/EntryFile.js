import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as StartFuncColumnColumnAddOnRate } from "./ColumnAddOnRate/entryFile.js";
import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";
import { StartFunc as StartFuncColumnAmount } from "./ColumnAmount/entryFile.js";
import { StartFunc as StartFuncColumnAddOnService } from "./ColumnAddOnService/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnopts = LocalColumns.find(element => element.field === "KS-Opts");
    let LocalColumnAddOnService = LocalColumns.find(element => element.field === "AddOnService");
    let LocalColumnAddOnRate = LocalColumns.find(element => element.field === "AddOnRate");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });
    };

    if (LocalColumnAddOnService === undefined === false) {
        StartFuncColumnAddOnService({ inFindColumn: LocalColumnAddOnService });
    };

    if (LocalColumnAddOnRate === undefined === false) {
        StartFuncColumnColumnAddOnRate({ inFindColumn: LocalColumnAddOnRate });
    };

    StartFuncColumnAmount
};

export { StartFunc };