import { StartFunc as StartFuncAsArray } from "./asArray.js";

const StartFunc = ({ inAddOnService }) => {
    let jVarLocalData = StartFuncAsArray();

    const jVarLocalFind = jVarLocalData.find(element => {
        return element.AddOnService === inAddOnService;
    });

    if (jVarLocalFind === undefined) {
        return true;
    };

    return false;
};

export { StartFunc };