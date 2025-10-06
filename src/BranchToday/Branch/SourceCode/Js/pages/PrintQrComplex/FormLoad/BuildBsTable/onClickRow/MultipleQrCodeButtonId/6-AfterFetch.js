import { StartFunc as StartFuncQrCodeToModal } from "./QrCodeToModal/EntryFile.js";

let StartFunc = ({ inQrCodeData, inRow }) => {
    let localQrodeData = inQrCodeData;
    var jVarLocalRowPk = inRow.pk;

    let jVarLocalBranchName = localStorage.getItem("BranchName");
    const modifiedBranch = jVarLocalBranchName.replace("BranOrders", "");

    let localFilterQrcodeData = localQrodeData.filter(element => element.OrderNumber == jVarLocalRowPk && element.BookingData.OrderData.BranchName == modifiedBranch);

    let jFLocalData = jFLocalAddOnData({ inQrCodeData: localFilterQrcodeData });

    StartFuncQrCodeToModal({ inData: jFLocalData, inRow });
};

let jFLocalAddOnData = ({ inQrCodeData }) => {
    let jFLocalTotalQrCodes = inQrCodeData.length;

    let jFLocalData = inQrCodeData.map(element => {
        let JVarLoopInsideAddOnArray = element.AddOnArray.map(LoopAddOn => LoopAddOn.AddOnService);
        element.AddOnDataAsString = JVarLoopInsideAddOnArray.join(", ");

        element.TotalQrCodes = jFLocalTotalQrCodes;

        return element;
    });

    return jFLocalData;
};

export { StartFunc };