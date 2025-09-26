let StartFunc = () => {
    jFBranchNameId();
    jFShowToday();
};

let jFBranchNameId = () => {
    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarLocalBranchName;
    };
};

const jFShowToday = () => {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];

    today.setDate(today.getDate() + 7);
    const formattedNextWeek = today.toISOString().split('T')[0];

    const dateInput = document.getElementById('TableFooterdateInputId');
    if (dateInput) {
        dateInput.value = formattedNextWeek;
        dateInput.setAttribute("min", formattedToday);
    }
};

export { StartFunc, jFShowToday }