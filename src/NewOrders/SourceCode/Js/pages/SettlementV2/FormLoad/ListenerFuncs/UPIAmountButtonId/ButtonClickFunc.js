const getValueById = id => parseFloat(document.getElementById(id)?.value) || 0;
const setValueById = (id, value) => {
    let element = document.getElementById(id);
    if (element) element.value = value.toFixed(0);
};

const StartFunc = () => {
    let nettAmount = getValueById("NettAmountId");
    let roundOff = getValueById("RoundOffId");

    let cashAmount = getValueById("CashAmountId");
    let cardAmount = getValueById("CardAmountId");
    let settlementAmount = cashAmount + cardAmount;
    let upiAmount = nettAmount + roundOff - settlementAmount;

    setValueById("UPIAmountId", upiAmount);
};

export { StartFunc };
