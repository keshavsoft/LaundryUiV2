const getValueById = (id, isInnerHTML = false) => {
    let element = document.getElementById(id);
    return element ? (isInnerHTML ? element.innerHTML.trim() : element.value.trim()) : 0;
};

const getElementById = id => document.getElementById(id);

const StartFunc = () => {
    let cashAmount = parseInt(getValueById("CashAmountId")) || 0;
    let cardAmount = parseInt(getValueById("CardAmountId")) || 0;
    let upiAmount = parseInt(getValueById("UPIAmountId")) || 0;
    let roundOffAmount = parseFloat(getValueById("RoundOffId")) || 0;
    let discountAmount = parseFloat(getValueById("DiscountPerId")) || 0;
    let nettAmount = parseFloat(getValueById("NettAmountId")) || 0;
    let checkAmount = cashAmount + cardAmount + upiAmount;

    let discountControl = getElementById("DiscountPerId");
    discountControl.classList.remove("is-invalid");

    if (discountAmount > 10) {
        discountControl.focus();
        discountControl.classList.add("is-invalid");
        return false;
    }

    if (!isAmountSufficient()) return false;

    if (checkAmount !== nettAmount + roundOffAmount) {
        if (!handleZeroAmounts("CashAmountId", cashAmount)) return false;
        if (!handleZeroAmounts("CardAmountId", cardAmount)) return false;
        if (!handleZeroAmounts("UPIAmountId", upiAmount)) return false;

        if (cardAmount > 0 && upiAmount > 0) {
            handleInvalid("CashAmountId");
            return false;
        }
        return false;
    }
    return true;
};

const isAmountSufficient = () => {
    let nettAmount = parseFloat(getValueById("NettAmountId")) || 0;
    let roundOffAmount = parseFloat(getValueById("RoundOffId")) || 0;
    let cashAmount = parseInt(getValueById("CashAmountId")) || 0;
    let cardAmount = parseInt(getValueById("CardAmountId")) || 0;
    let upiAmount = parseInt(getValueById("UPIAmountId")) || 0;

    let checkAmount = cashAmount + cardAmount + upiAmount;

    if (checkAmount < nettAmount + roundOffAmount) {
        let alert = getElementById("AmountCheckAlert");
        alert.classList.remove("d-none");
        alert.classList.add("show");

        return false;
    }
    return true;
};

const handleZeroAmounts = (id, amount) => {
    if (amount === 0) {
        handleInvalid(id);
        return false;
    }
    handleValid(id);
    return true;
};

const handleInvalid = id => {
    let element = getElementById(id);
    element.focus();
    element.classList.add("is-invalid");
};

const handleValid = id => {
    let element = getElementById(id);
    if (element.classList.contains("is-invalid")) {
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
    }
};

export { StartFunc };
