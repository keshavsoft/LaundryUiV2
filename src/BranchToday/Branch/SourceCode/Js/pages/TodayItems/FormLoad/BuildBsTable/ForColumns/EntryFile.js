import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnPcs } from "./ColumnPcs/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate")
    let LocalColumnPcs = LocalColumns.find(element => element.field === "Pcs")

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };

    if (LocalColumnPcs === undefined === false) {
        ColumnPcs({ inFindColumn: LocalColumnPcs });
    };

};

export { StartFunc };