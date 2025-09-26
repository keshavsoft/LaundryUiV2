let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
};

function jFLocalOptsFormater(value, row, index) {
    return [
        `<a href="../HtmlFiles/ExitOrderItems.html?OrderNumber=${row.pk}" class="btn btn-primary btn-circle">`,
        `<i class="bi bi-door-open"></i>`,
        `</a>`
    ].join('');
};

export { StartFunc };