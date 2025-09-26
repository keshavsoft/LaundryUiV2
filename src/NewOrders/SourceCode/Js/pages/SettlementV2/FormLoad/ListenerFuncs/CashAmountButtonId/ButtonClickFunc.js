const getInputValueById = id => document.getElementById(id)?.value || 0;

const setInputValueById = (id, value) => {
    let element = document.getElementById(id);
    if (element) element.value = value;
};

const StartFunc = () => {
    let nettAmount = parseFloat(getInputValueById("NettAmountId"));
    let roundOff = parseFloat(getInputValueById("RoundOffId"));

    let cardAmount = parseInt(getInputValueById("CardAmountId")) || 0;
    let upiAmount = parseInt(getInputValueById("UPIAmountId")) || 0;
    let settlementAmount = cardAmount + upiAmount;
    let cashAmount = nettAmount + roundOff - settlementAmount;

    setInputValueById("CashAmountId", cashAmount.toFixed(0));
};

export { StartFunc };
