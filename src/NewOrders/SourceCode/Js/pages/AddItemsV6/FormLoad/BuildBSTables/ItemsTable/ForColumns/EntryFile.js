import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as StartFuncColumnAddOns } from "./ColumnAddOns/entryFile.js";
import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";
import { StartFunc as StartFuncColumnAmount } from "./ColumnAmount/entryFile.js";
import { StartFunc as StartFuncColumnCategory } from "./ColumnCategory/entryFile.js";
import { StartFunc as StartFuncColumnItemName } from "./ColumnItemName/entryFile.js";
import { StartFunc as StartFuncColumnPcs } from "./ColumnPcs/entryFile.js";
import { StartFunc as StartFuncColumnLocation } from "./ColumnLocation/entryFile.js";
import { StartFunc as StartFuncColumnDeliveryDateTime } from "./ColumnDeliveryDateTime/entryFile.js";
import { StartFunc as StartFuncColumnItemService } from "./ColumnItemService/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnAddOns = LocalColumns.find(element => element.field === "KS-AddOns");
    let LocalColumnopts = LocalColumns.find(element => element.field === "KS-Opts");
    let LocalColumnAmount = LocalColumns.find(element => element.field === "KS-Amount");

    let LocalColumnCategory = LocalColumns.find(element => element.field === "Category");
    let LocalColumnItemName = LocalColumns.find(element => element.field === "ItemName");
    let LocalColumnPcs = LocalColumns.find(element => element.field === "Pcs");
    let LocalColumnLocation = LocalColumns.find(element => element.field === "location");
    let LocalColumnDeliveryDateTime = LocalColumns.find(element => element.field === "DeliveryDateTime");
    let LocalColumnItemService = LocalColumns.find(element => element.field === "ItemService");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
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

    if (LocalColumnCategory === undefined === false) {
        StartFuncColumnCategory({ inFindColumn: LocalColumnCategory });
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
};

export { StartFunc };