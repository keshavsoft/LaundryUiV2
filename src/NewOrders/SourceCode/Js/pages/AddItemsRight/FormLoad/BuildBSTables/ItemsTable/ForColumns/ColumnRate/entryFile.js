let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
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

export { StartFunc };