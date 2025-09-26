
const setInputValue = (id, value) => {
    let element = document.getElementById(id);
    if (element) element.value = value;
};

const StartFunc = ({ inData }) => {
    if (!inData.CheckOutData) return "";

    let { CashAmount, UPIAmount, CardAmount, DiscountPer } = inData.CheckOutData;

    setInputValue('CashAmountId', CashAmount);
    setInputValue('UPIAmountId', UPIAmount);
    setInputValue('CardAmountId', CardAmount);
    setInputValue('DiscountPerId', DiscountPer);
};

export { StartFunc };
