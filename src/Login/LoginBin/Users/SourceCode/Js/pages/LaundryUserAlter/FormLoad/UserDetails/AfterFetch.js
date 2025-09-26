let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;

    jFLocalToInnerHtmlyourUsernameTextId({ inyourUsernameTextId: jVarLocalData.UserName })
    jFLocalToInnerHtmlyourPasswordTextId({ inyourPasswordTextId: jVarLocalData.Password });
    jFLocalToInnerHtmlUserMobileTextId({ inUserMobileTextId: jVarLocalData.UserMobile });
    jFLocalToInnerHtmlyourBranchTextId({ inyourBranchTextId: jVarLocalData.Branch });
    jFLocalToInputyourMobileTextId({ inpkDCDetailsTextId: jVarLocalData.BranchMobile });
    // jFLocalToInputVoucherNumberDCDetailsTextId({ inVoucherNumberDCDetailsTextId: jVarLocalData.pk });
    // jFLocalToInputDateTextDCDetailsId({ inDateTextDCDetailsId: jVarLocalData.Date });
    // jFLocalToInputDescriptionTextDCDetailsId({ inDescriptionTextDCDetailsId: jVarLocalData.Description });
    // jFLocalToInputDCFactoryDCDetailsTextId({ inDCFactoryDCDetailsTextId: jVarLocalData.Factory });
    // jFLocalToInputDCBranchNameDCDetailsTextId({ inDCBranchNameDCDetailsTextId: jVarLocalData.BranchName });
    // jFLocalDCBranchNameId({ inValue: jVarLocalData.BranchName })
    // jFLocalToInputRowCountId(inDataToShow.QrCount)
};

let jFLocalToInnerHtmlyourUsernameTextId = ({ inyourUsernameTextId }) => {
    let jVarLocalHtmlId = 'yourUsername';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = inyourUsernameTextId;
};

let jFLocalToInnerHtmlyourPasswordTextId = ({ inyourPasswordTextId }) => {
    let jVarLocalHtmlId = 'yourPassword';
    let jVarLocalDescriptionTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDescriptionTextId.value = inyourPasswordTextId;
};

let jFLocalToInnerHtmlUserMobileTextId = ({ inUserMobileTextId }) => {
    let jVarLocalHtmlId = 'UserMobile';
    let jVarLocalDateTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDateTextId.value = inUserMobileTextId;
};

let jFLocalToInnerHtmlyourBranchTextId = ({ inyourBranchTextId }) => {
    let jVarLocalHtmlId = 'yourBranch';
    let jVarLocalFactoryTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalFactoryTextId.value = inyourBranchTextId;
};

let jFLocalToInputyourMobileTextId = ({ inpkDCDetailsTextId }) => {
    let jVarLocalHtmlId = 'yourMobile';
    let jVarLocalpkDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalpkDCDetailsTextId === null === false) {
        jVarLocalpkDCDetailsTextId.value = inpkDCDetailsTextId;
    };
};

// let jFLocalToInputVoucherNumberDCDetailsTextId = ({ inVoucherNumberDCDetailsTextId }) => {
//     let jVarLocalHtmlId = 'VoucherNumberDCDetailsTextId';
//     let jVarLocalVoucherNumberDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalVoucherNumberDCDetailsTextId === null === false) {
//         jVarLocalVoucherNumberDCDetailsTextId.innerHTML = inVoucherNumberDCDetailsTextId;
//     };
// };

// let jFLocalToInputDateTextDCDetailsId = ({ inDateTextDCDetailsId }) => {
//     let jVarLocalHtmlId = 'DateTextDCDetailsId';
//     let jVarLocalDateTextDCDetailsId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDateTextDCDetailsId === null === false) {
//         jVarLocalDateTextDCDetailsId.innerHTML = inDateTextDCDetailsId;
//     };
// };

// let jFLocalToInputDescriptionTextDCDetailsId = ({ inDescriptionTextDCDetailsId }) => {
//     let jVarLocalHtmlId = 'DescriptionTextDCDetailsId';
//     let jVarLocalDescriptionTextDCDetailsId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDescriptionTextDCDetailsId === null === false) {
//         jVarLocalDescriptionTextDCDetailsId.innerHTML = inDescriptionTextDCDetailsId;
//     };
// };

// let jFLocalToInputDCFactoryDCDetailsTextId = ({ inDCFactoryDCDetailsTextId }) => {
//     let jVarLocalHtmlId = 'DCFactoryDCDetailsTextId';
//     let jVarLocalDCFactoryDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDCFactoryDCDetailsTextId === null === false) {
//         jVarLocalDCFactoryDCDetailsTextId.innerHTML = inDCFactoryDCDetailsTextId;
//     };
// };

// let jFLocalToInputDCBranchNameDCDetailsTextId = ({ inDCBranchNameDCDetailsTextId }) => {
//     let jVarLocalHtmlId = 'DCBranchNameDCDetailsTextId';
//     let jVarLocalDCBranchNameDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDCBranchNameDCDetailsTextId === null === false) {
//         jVarLocalDCBranchNameDCDetailsTextId.innerHTML = inDCBranchNameDCDetailsTextId;
//     };
// };

// let jFLocalDCBranchNameId = ({ inValue }) => {
//     let jVarLocalHtmlId = 'DCBranchNameId';
//     let jVarLocalDCBranchNameDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDCBranchNameDCDetailsTextId === null === false) {
//         jVarLocalDCBranchNameDCDetailsTextId.innerHTML = inValue;
//     };
// };

// let jFLocalToInputRowCountId = (inValue) => {
//     let jVarLocalHtmlId = 'RowCountId';
//     let jVarLocalRowCountId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalRowCountId === null === false) {
//         jVarLocalRowCountId.innerHTML = inValue;
//     };
// };

export { StartFunc };