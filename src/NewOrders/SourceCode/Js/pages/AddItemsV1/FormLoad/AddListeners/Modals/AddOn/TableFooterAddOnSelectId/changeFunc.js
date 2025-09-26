const jVarCommonKeyName = "AddOns";

const StartFunc = () => {
    const jVarLocalCurrentTarget = event.currentTarget;

    const jVarLocalAddOnRate = jFLocalGetRate({ inAddOnData: jVarLocalCurrentTarget.value });

    jFLocalToInputAddOnRateId(jVarLocalAddOnRate);
};

const jFLocalFromLocalStorage = () => {
    const jVarLocalAddOnData = localStorage.getItem(jVarCommonKeyName);
    const jVarLocalAddOnDataAsJson = JSON.parse(jVarLocalAddOnData);

    return jVarLocalAddOnDataAsJson;
};

const jFLocalGetRate = ({ inAddOnData }) => {
    const jVarLocalAddOnArray = jFLocalFromLocalStorage();
    const found = jVarLocalAddOnArray.find((element) => element.AddOnService === inAddOnData);

    return found.AddOnRate;
};

let jFLocalToInputAddOnRateId = (inValue) => {
    let jVarLocalHtmlId = 'AddOnRateId';
    let jVarLocalAddOnRateId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddOnRateId === null === false) {
        jVarLocalAddOnRateId.value = inValue;
    };
};

export { StartFunc };