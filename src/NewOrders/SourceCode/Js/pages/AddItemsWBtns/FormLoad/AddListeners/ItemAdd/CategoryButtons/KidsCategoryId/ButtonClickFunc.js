import { StartFunc as StartFuncFromToDataList } from "./ToDataList.js";
const jVarCommonCategory = "Kids";

let StartFunc = (event) => {
    StartFuncFromToDataList({ inCategorySelected: jVarCommonCategory });

    let jVarLocalItemTypeLabelId = document.getElementById('ItemTypeLabelId');

    jVarLocalItemTypeLabelId.dataset.itemCategory = jVarCommonCategory;
    jFLocalButtonClassChange(event);
    jFLocalLabelChange(event)
};

const jFLocalButtonClassChange = (event) => {
    const buttons = document.querySelectorAll('.CategoryItems');

    buttons.forEach((button) => {
        if (button !== event.target) {
            button.classList.remove('btn', 'btn-primary');
            button.classList.add('btn', 'btn-outline-primary');
        }
    });
    event.target.classList.remove('btn-outline-primary');
    event.target.classList.add('btn-primary');
};

const jFLocalLabelChange = () => {
    const Label = document.getElementById('ItemTypeLabelId');
    Label.innerHTML = "";
    Label.innerHTML = `<strong>${Label.dataset.itemCategory}</strong>-Item Type`;
};

export { StartFunc };