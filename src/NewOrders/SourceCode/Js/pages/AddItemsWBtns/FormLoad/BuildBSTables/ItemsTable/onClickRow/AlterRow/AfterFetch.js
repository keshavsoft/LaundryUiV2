import { StartFunc as StartFuncShowToDom } from "./showOnDom.js";

const StartFunc = async ({ inResponse }) => {
    if (inResponse.status === 200) {
        StartFuncShowToDom(await inResponse.json());
    };
};

export { StartFunc };