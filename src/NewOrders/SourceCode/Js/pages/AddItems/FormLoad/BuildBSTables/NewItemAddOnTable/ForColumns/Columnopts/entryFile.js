let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
    inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

function jFLocalOptsFormater(value, row, index) {
    return [
        `<a href="#" class="btn btn-danger ">`,
        `<i class="bi bi-trash3"></i>`,
        `</a>`
    ].join('');
};

const jFLocalFooterFormatterFunc = (data) => {
    return `   <button type="button" class="btn btn-primary" id="AddOnModalSaveButtonId">
                                Save
                            </button>`;
};

export { StartFunc };