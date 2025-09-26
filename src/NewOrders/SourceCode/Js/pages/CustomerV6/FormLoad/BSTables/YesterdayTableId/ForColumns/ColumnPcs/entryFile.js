let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = totalFormatter;
};

const jFLocalFooterFormatterFunc = (data) => {
    return `   <div class="input-group">
                                        <input class="form-control" id="TableFooterPcsInputId" type="number" min="1"
                                            max="100" step="1" value="1">

                                        <div class="invalid-feedback">
                                            Please provide correct pcs.
                                        </div>
                                    </div>`;
};

function totalFormatter(data) {
    var field = this.field;
    let LocalTotal = data.map(function (row) {
        if (row[field] === undefined) {
            return 0;
        };
        return +row[field];
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);

    return LocalTotal.toFixed(0);
};

export { StartFunc };