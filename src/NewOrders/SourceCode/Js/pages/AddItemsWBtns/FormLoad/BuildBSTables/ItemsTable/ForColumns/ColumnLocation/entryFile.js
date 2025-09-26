let StartFunc = ({ inFindColumn }) => {
    // inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

const jFLocalFooterFormatterFunc = (data) => {
    return ` <select class="form-select" aria-label="Default select example"
                                        id="TableFooterFactoryInputId" tabindex="-1">
                                        <option value="Vizag" selected>Vizag</option>
                                        <option value="GD">GD</option>
                                        <option value="Vzm">Vzm</option>
                                    </select>`;
};

export { StartFunc };