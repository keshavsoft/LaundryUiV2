import { StartFunc as ColumnPcs } from "./ColumnPcs/entryFile.js";
import { StartFunc as ColumnSettlement } from "./ColumnSettlement/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnRate = LocalColumns.find(element => element.field === "AggValues.ItemDetails");
    let LocalColumnSettlementAmount = LocalColumns.find(element => element.field === "AggValues.SettlementAmount");

    if (LocalColumnRate === undefined === false) {
        ColumnPcs({ inFindColumn: LocalColumnRate });
    };
    if (LocalColumnSettlementAmount === undefined === false) {
        ColumnSettlement({ inFindColumn: LocalColumnSettlementAmount });
    };
};

export { StartFunc };