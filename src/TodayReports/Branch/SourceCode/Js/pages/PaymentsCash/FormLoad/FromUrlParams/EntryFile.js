let StartFunc = () => {
    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    const modifiedBranch = jVarLocalBranchName.replace("BranOrders", "");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = modifiedBranch;
    };
};

export { StartFunc }