import { StartFunc as ColumnSerial } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnSymbol } from "./ColumnSymbol/entryFile.js";
import { StartFunc as ColumnQRPrint } from "./ColumnQRPrint/entryFile.js";
import { StartFunc as CollumnOrderPrint } from "./CollumnOrderPrint/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnSymbol = LocalColumns.find(element => element.field === "AggValues.SettlementAmount");
    let LocalColumnQRPrint = LocalColumns.find(element => element.field === "TotalItems");
    let LocalColumnOrderPrint = LocalColumns.find(element => element.field === "OrderPrint");

    if (LocalColumnSymbol === undefined === false) {
        ColumnSymbol({ inFindColumn: LocalColumnSymbol });
    };

    if (LocalColumnOperateFine === undefined === false) {
        ColumnSerial({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnQRPrint === undefined === false) {
        ColumnQRPrint({ inFindColumn: LocalColumnQRPrint });
    };
    if (LocalColumnOrderPrint === undefined === false) {
        CollumnOrderPrint({ inFindColumn: LocalColumnOrderPrint });
    };
};

export { StartFunc };