const setInputValue = (id, value, isInnerHTML = false) => {
    let element = document.getElementById(id);
    if (element) {
        if (isInnerHTML) {
            element.innerHTML = value;
        } else {
            element.value = value;
        }
    }
};

const StartFunc = ({ inData }) => {
    const inputMapping = [
        { id: 'OrderAmountId', value: inData.Rate, isInnerHTML: true },
        { id: 'OrderNumberId', value: inData.OrderNumber, isInnerHTML: true },
        { id: 'OrderInfoCustomerNameId', value: inData.CustomerName },
        { id: 'BranchNameId', value: inData.BranchName },
        { id: 'BranchDisplay', value: inData.BranchName },
        { id: 'OrderDate', value: inData.Date },
        { id: 'OrderInfoCustomerMobileId', value: inData.Mobile }
    ];

    inputMapping.forEach(({ id, value, isInnerHTML }) => setInputValue(id, value, isInnerHTML));
};

export { StartFunc };
