let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
    // inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

function jFLocalOptsFormater(value, row, index) {
    return [
        `<a href="#" class="link-danger">`,
        `<i class="bi bi-trash3"></i>`,
        `</a>`
    ].join('');
};

const jFLocalFooterFormatterFunc = (data) => {
    return `<button class="btn btn-outline-success" type="button"
                                        id="TableFooterSaveButtonId">Save</button>`;
};

export { StartFunc };