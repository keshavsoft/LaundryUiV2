let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

const jFLocalFooterFormatterFunc = (data) => {
    return `<input class="form-control" tabindex="-1" type="date" id="TableFooterdateInputId">`;
};

export { StartFunc };