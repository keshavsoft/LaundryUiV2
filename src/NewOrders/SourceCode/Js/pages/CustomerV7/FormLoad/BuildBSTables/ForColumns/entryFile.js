import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as StartFuncSettlementAmount } from "./ColumnSettlementAmount/entryFile.js";
import { StartFunc as ColumnItemDetails } from "./ColumnItemDetails/entryFile.js";
import { StartFunc as StartFuncColumnAddOns } from "./ColumnAddOns/entryFile.js";
import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";
import { StartFunc as StartFuncColumnAmount } from "./ColumnAmount/entryFile.js";
import { StartFunc as StartFuncColumnDateTime } from "./ColumnDateTime/entryFile.js";
import { StartFunc as StartFuncColumnItemName } from "./ColumnItemName/entryFile.js";
import { StartFunc as StartFuncColumnPcs } from "./ColumnPcs/entryFile.js";
import { StartFunc as StartFuncColumnLocation } from "./ColumnLocation/entryFile.js";
import { StartFunc as StartFuncColumnDeliveryDateTime } from "./ColumnDeliveryDateTime/entryFile.js";
import { StartFunc as StartFuncColumnItemService } from "./ColumnItemService/entryFile.js";
import { StartFunc as ColumnIsSettled } from "./ColumnIsSettled/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnSettlementAmount = LocalColumns.find(element => element.field === "AggValues.SettlementAmount");
    let LocalColumnItemDetails = LocalColumns.find(element => element.field === "AggValues.ItemDetails");
    let LocalColumnAddOns = LocalColumns.find(element => element.field === "KS-AddOns");
    let LocalColumnopts = LocalColumns.find(element => element.field === "Opts");
    let LocalColumnAmount = LocalColumns.find(element => element.field === "KS-Amount");

    let LocalColumnDateTime = LocalColumns.find(element => element.field === "DateTime");

    let LocalColumnItemName = LocalColumns.find(element => element.field === "ItemName");
    let LocalColumnPcs = LocalColumns.find(element => element.field === "Pcs");
    let LocalColumnLocation = LocalColumns.find(element => element.field === "location");
    let LocalColumnDeliveryDateTime = LocalColumns.find(element => element.field === "DeliveryDateTime");
    let LocalColumnItemService = LocalColumns.find(element => element.field === "ItemService");
    let LocalColumnIsSettled = LocalColumns.find(element => element.field === "IsSettled");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnSettlementAmount === undefined === false) {
        StartFuncSettlementAmount({ inFindColumn: LocalColumnSettlementAmount });
    };
    if (LocalColumnItemDetails === undefined === false) {
        ColumnItemDetails({ inFindColumn: LocalColumnItemDetails });
    };

    if (LocalColumnAddOns === undefined === false) {
        StartFuncColumnAddOns({ inFindColumn: LocalColumnAddOns });
    };

    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });
    };

    if (LocalColumnAmount === undefined === false) {
        StartFuncColumnAmount({ inFindColumn: LocalColumnAmount });
    };

    if (LocalColumnDateTime === undefined === false) {
        StartFuncColumnDateTime({ inFindColumn: LocalColumnDateTime });
    };

    if (LocalColumnItemName === undefined === false) {
        StartFuncColumnItemName({ inFindColumn: LocalColumnItemName });
    };

    if (LocalColumnPcs === undefined === false) {
        StartFuncColumnPcs({ inFindColumn: LocalColumnPcs });
    };

    if (LocalColumnLocation === undefined === false) {
        StartFuncColumnLocation({ inFindColumn: LocalColumnLocation });
    };

    if (LocalColumnDeliveryDateTime === undefined === false) {
        StartFuncColumnDeliveryDateTime({ inFindColumn: LocalColumnDeliveryDateTime });
    };

    if (LocalColumnItemService === undefined === false) {
        StartFuncColumnItemService({ inFindColumn: LocalColumnItemService });
    };

    if (LocalColumnIsSettled === undefined === false) {
        ColumnIsSettled({ inFindColumn: LocalColumnIsSettled });
    };
};

export { StartFunc };