const StartFunc = () => {
    LocalDeleteCookie();
    LocalDeleteLocalStorage()
};

let LocalDeleteCookie = () => {
    let lcoalKTokenId = "KSFactoryToken";
    document.cookie = `${lcoalKTokenId}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

let LocalDeleteLocalStorage = () => {
    // To remove a specific item from local storage by key
// localStorage.removeItem('BranchName');
// localStorage.removeItem('DeliveryDateTime');
// localStorage.removeItem('FactoryName');
// localStorage.removeItem('PresentOrder');
// localStorage.removeItem('PresentOrderAddOns');

// To clear all data from local storage
localStorage.clear();
};



export { StartFunc };
