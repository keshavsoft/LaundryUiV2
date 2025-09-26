let StartFunc = () => {
    // debugger
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarLocalBranchName === null) {
        localStorage.setItem("BranchName", "BranOrdersKKD");

        return;
    };

    const modifiedString = jVarLocalBranchName.replace("BranOrders", "");

    let jVarLocalBranchButtonId = document.getElementById("BranchButtonId");
    jVarLocalBranchButtonId.innerText = modifiedString;

    jVarLocalBranchButtonId.addEventListener('click', function () {
        window.location.href = "/LoginUsers/HtmlFiles/loginBranch.html";
    });
};

export { StartFunc }