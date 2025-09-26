let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
};

function jFLocalOptsFormater(value, row, index) {

    if (row.IsSettled) {
        return [
            `<a href="./ExitOrderItems.html?OrderNumber=${row.pk}" class="link-danger">`,
            `<i class="bi bi-dropbox"></i>`,
            `</a>`
        ].join('');

    } else {
        return [
            `<a href="#" class="link-danger DeleteClass">`,
            `<i class="bi bi-trash"></i>`,
            `</a>`
        ].join('');

    }


};

export { StartFunc };