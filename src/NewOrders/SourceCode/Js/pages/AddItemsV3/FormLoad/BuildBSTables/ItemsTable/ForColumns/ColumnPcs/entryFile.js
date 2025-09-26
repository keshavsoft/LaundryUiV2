let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
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

export { StartFunc };