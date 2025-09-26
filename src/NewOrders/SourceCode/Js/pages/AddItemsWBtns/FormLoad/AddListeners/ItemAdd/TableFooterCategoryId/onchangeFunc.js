import { StartFunc as StartFuncToDataList } from "./ToDataList.js";

const StartFunc = (value) => {
    StartFuncToDataList({ inCategorySelected: value });
};

export { StartFunc }