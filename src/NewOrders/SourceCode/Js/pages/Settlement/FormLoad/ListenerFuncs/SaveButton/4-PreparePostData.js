const getValueById = id => parseFloat(document.getElementById(id)?.value.trim()) || 0;

const StartFunc = () => {
    const jVarLocalGstData = {
        Discount: getValueById("DiscountAmountId"),
        CGST: getValueById("CgstAmountId"),
        SGST: getValueById("SgstAmountId")
    };
    
    return {
        CashAmount: getValueById("CashAmountId"),
        CardAmount: getValueById("CardAmountId"),
        UPIAmount: getValueById("UPIAmountId"),
        Discount: getValueById("DiscountPerId"),
        GstData: jVarLocalGstData
    };
};

export { StartFunc };
