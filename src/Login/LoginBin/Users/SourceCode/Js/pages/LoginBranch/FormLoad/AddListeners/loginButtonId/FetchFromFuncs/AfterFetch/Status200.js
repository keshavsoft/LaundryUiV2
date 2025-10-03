import ConfigJson from '../../../../../Config.json' with { type: 'json' };
const CommonKeyName = "BranchName";

const StartFunc = async (inRes) => {
    // debugger
    let LocalRes = await inRes.json();
    const token = getCookie('KSToken');

    if (token) {
        localStorage.setItem(CommonKeyName, `${LocalRes.BranchName}`);
        // localStorage.setItem("UserName", payload.UserName);
        // localStorage.setItem("UserUuId", payload.UserUuId);
        window.location.href = ConfigJson.RedirectToUrl;
    };
};

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop().split(';').shift() : null;
};

const getPayload = (token) => {
    try {
        const [header, payload, signature] = token.split('.');
        return JSON.parse(atob(payload));
    } catch (error) {
        console.error('Error decoding JWT payload:', error);
        return null;
    }
};

export { StartFunc };