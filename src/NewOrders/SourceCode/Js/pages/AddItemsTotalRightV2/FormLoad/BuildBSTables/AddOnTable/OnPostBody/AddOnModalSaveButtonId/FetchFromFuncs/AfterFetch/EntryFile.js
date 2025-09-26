// import { StartFunc as StartFuncFormLoad } from "../../../../../../../FormLoad/ToLocalStorage/EntryFile.js";
import { StartFunc as StartFuncFormLoad } from "../../../../../../ToLocalStorage/EntryFile.js";

import { StartFunc as StartFuncGetAddOnData } from "../../../../../../../FromLocalStorage/getAddOnData.js";
import { StartFunc as StartFuncPresentOrder } from "../../../../../../../FromLocalStorage/presentOrder.js";

let StartFunc = async () => {
    await StartFuncFormLoad();

    let JvarLocalData = StartFuncPresentOrder();

    let jVarLocalItemSerial = parseInt(jFLocalAddOnModalItemSerialId());
    // let jVarLocalFilterData = Object.values(JvarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    let jVarLocalFilterData = StartFuncGetAddOnData({ inItemSerial: jVarLocalItemSerial });

    jFLocalShowAddOn({ inAddOnData: jVarLocalFilterData });
    jFLocalShowItemsTable({ inItemsData: JvarLocalData });
    jFLocalSetFocus();
};

let jFLocalSetFocus = () => {
    let jVarLocalHtmlId = 'TableFooterAddOnSelectId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.classList.remove("is-invalid");
    jVarLocalRefreshBSTableId.focus();
};

let jFLocalShowAddOn = ({ inAddOnData }) => {
    let LocalAddOnData = inAddOnData;

    var $AddOnTable = $('#AddOnTable');

    $AddOnTable.bootstrapTable('load', LocalAddOnData);
};

let jFLocalShowItemsTable = ({ inItemsData }) => {
    let LocalItemsData = inItemsData;
    var $AddOnTable = $('#table');

    $AddOnTable.bootstrapTable('load', LocalItemsData);

};

let jFLocalAddOnModalItemSerialId = () => {
    let jVarLocalAddOnModalItemSerialId = 'AddOnModalItemSerialId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalAddOnModalItemSerialId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFromLocalStorage = () => {
    let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
    let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);

    return JvarLocalData;
};

export { StartFunc };