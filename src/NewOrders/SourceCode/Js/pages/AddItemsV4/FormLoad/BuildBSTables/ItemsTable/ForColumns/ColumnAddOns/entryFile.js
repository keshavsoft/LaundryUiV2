let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
    inFindColumn.footerFormatter = jVarLocalFooterFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    let jVarLocalFilterData = row.AddOnArray;

    if (jVarLocalFilterData.length > 0) {
        let jVarLocalAddOnPrice = jVarLocalFilterData.map(e => e.AddOnRate).reduce((a, b) => a + b, 0);

        return [
            `<a href="#" class="btn btn-primary ">`,
            `${jVarLocalFilterData.length} -${jVarLocalAddOnPrice}`,
            `</a>`
        ].join('');
    } else {
        return [
            `<a href="#" class="btn btn-outline-primary ">`,
            `Click`,
            `</a>`
        ].join('')
    };
};

let jVarLocalFooterFormatterFunc = (value, row, index) => {
    return [
        `<a href="#" id="TableFooterAddOnId" class="btn btn-outline-primary ">`,
        `Click`,
        `</a>`
    ].join('');
};

export { StartFunc };