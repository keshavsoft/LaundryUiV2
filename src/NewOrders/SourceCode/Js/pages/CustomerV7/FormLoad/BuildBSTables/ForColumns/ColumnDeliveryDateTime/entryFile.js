let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;

    // inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

const jFLocalFooterFormatterFunc = (data) => {
    return `<input class="form-control" tabindex="-1" type="date" id="TableFooterdateInputId">`;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    return new Date(value).toLocaleDateString('en-GB'); // dd/mm/yyyy format
};

export { StartFunc };