let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

let jFLocalFooterFormatterFunc = (data) => {
    return `<input type="number" name="AddOnRate" id="AddOnRateId" class="form-control"
                                placeholder="AddOn Rate">`;
};

export { StartFunc };