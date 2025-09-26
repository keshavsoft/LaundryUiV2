let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
    let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);

    let jVarLocalItemSerial = parseInt(row.pk);

    let jVarLocalFilterData = Object.values(JvarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    if (jVarLocalFilterData.length > 0) {
        let jVarLocalAddOnPrice = jVarLocalFilterData.map(e => e.AddOnRate).reduce((a, b) => a + b, 0);

        return [
            `<a href="#" class="btn btn-primary ">`,
            `${jVarLocalFilterData.length} -${jVarLocalAddOnPrice}`,
            `</a>`
        ].join('');
    } else {
        let jVarLocalAddOnPrice = jVarLocalFilterData.map(e => e.AddOnRate).reduce((a, b) => a + b, 0);

        return [
            `<a href="#" class="btn btn-outline-primary ">`,
            `Click`,
            `</a>`
        ].join('')
    };
};

export { StartFunc };