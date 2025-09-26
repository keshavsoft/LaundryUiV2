let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = priceFormatter;
};

let jFLocalFooterFormatterFunc = (data) => {
    return ` <div class="input-group">
                                        <input type="text" class="form-control" id="TableFooterRateInputId"
                                            autocomplete="off" tabindex="-1" readonly>
                                        <div class="invalid-feedback">
                                            Please provide correct item.
                                        </div>
                                    </div>`;
};

function priceFormatter(data) {
    var field = this.field
    return '₹ ' + data.map(function (row) {
        return +row.Rate
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}

export { StartFunc };