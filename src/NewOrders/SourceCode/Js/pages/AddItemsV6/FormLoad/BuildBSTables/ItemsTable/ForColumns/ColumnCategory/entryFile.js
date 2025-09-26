let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

const jFLocalFooterFormatterFunc = (value, row, index) => {
    return `  <select class="form-select" aria-label="Default select example"
                                        id="TableFooterCategoryId">
                                        <option selected value="Men">Men</option>
                                        <option value="Women">Women</option>
                                        <option value="Kids">Kids</option>
                                        <option value="Others">Others</option>
                                    </select>`;
};

export { StartFunc };