const StartFunc = (event) => {
    const jVarLocalCurrentTarget = event.currentTarget;

    if (event.key === "Enter") {
        // Cancel the default action, if needed
        // event.preventDefault();
        // Trigger the button element with a click
        jFLocalEndFunc();
    };
};

let jFLocalEndFunc = () => {
    var event = new Event('click');
    let jVarLocalTableFooterCategoryId = document.getElementById('AddOnModalSaveButtonId');

    if (jVarLocalTableFooterCategoryId === null === false) {
        jVarLocalTableFooterCategoryId.dispatchEvent(event)
    };
};

export { StartFunc };