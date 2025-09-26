let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
    // inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

function jFLocalOptsFormater(value, row, index) {
    console.log("row");
    
    return [
        `<a href="./ExitOrderItems.html?OrderNumber=${row.pk}" class="link-danger">`,
        `<i class="bi bi-dropbox"></i>`,
        `</a>`
    ].join('');
};

const jFLocalFooterFormatterFunc = (data) => {
    return `<button class="btn btn-outline-success" type="button"
                                        id="TableFooterSaveButtonId">Save</button>`;
};

export { StartFunc };