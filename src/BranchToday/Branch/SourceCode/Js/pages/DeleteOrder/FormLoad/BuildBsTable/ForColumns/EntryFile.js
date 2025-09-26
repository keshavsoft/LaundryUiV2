import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as Columnpcs } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnSettlement } from "./ColumnPcs/entryFile.js";
import { StartFunc as ColumnColumnQr } from "./ColumnQr/entryFile.js";
import { StartFunc as ColumnDelete } from "./ColumnDelete/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalColumnRate = LocalColumns.find(element => element.field === "pcs")
    let LocalColumnPcs = LocalColumns.find(element => element.field === "Settlement")
    let LocalColumnQr = LocalColumns.find(element => element.field === "QRRaise")
    let LocalColumnDeleteOrders = LocalColumns.find(element => element.field === "DeleteOrders")

    if (LocalColumnOperateFine === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnRate === undefined === false) {
        Columnpcs({ inFindColumn: LocalColumnRate });
    };

    if (LocalColumnPcs === undefined === false) {
        ColumnSettlement({ inFindColumn: LocalColumnPcs });
    };

    if (LocalColumnQr === undefined === false) {
        ColumnColumnQr({ inFindColumn: LocalColumnQr });
    };

    if (LocalColumnDeleteOrders === undefined === false) {
        ColumnDelete({ inFindColumn: LocalColumnDeleteOrders });
    };

};

export { StartFunc };