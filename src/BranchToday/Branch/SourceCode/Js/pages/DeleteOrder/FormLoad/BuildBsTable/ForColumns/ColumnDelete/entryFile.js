let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsForAddOnOnModalFormater;
};

function jFLocalOptsForAddOnOnModalFormater(value, row, index) {
    // console.log("row",row);
    if (row.IsSettled === true) {
        return `<span style="color: green; font-weight:bold">Settled</span>`;
    } else {
        return [
            `<a  href="#" class="btn"  style="color: red; font-size:20px" title=" Delete ">`,
            `<i class="bi bi-trash3"></i>`,
            `</a>`
        ].join('');
    }

};

export { StartFunc };