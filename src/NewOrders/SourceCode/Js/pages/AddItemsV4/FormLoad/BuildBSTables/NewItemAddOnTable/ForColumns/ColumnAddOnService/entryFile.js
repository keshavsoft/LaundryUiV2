let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

const jFLocalFooterFormatterFunc = (value, row, index) => {
    return `  <select class="form-select" aria-label="Select AddOn" id="TableFooterAddOnSelectId">
                            </select>`;
};

export { StartFunc };