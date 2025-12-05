import ConfigJson from '../../../../../../Config.json' with { type: 'json' };
import CommonConfigJson from '../../../../../../../Config.json' with { type: 'json' };
const CommonKeyName = "BranchName";

const StartFunc = async ({ inResponseAsJson }) => {
    // debugger
    let LocalRes = inResponseAsJson;
    const token = getCookie('KSToken');

    if (token) {
        console.log("LocalRes-------", LocalRes, token);

        localStorage.setItem(CommonKeyName, `${LocalRes.BranchName}`);
        // localStorage.setItem("UserName", payload.UserName);
        // localStorage.setItem("UserUuId", payload.UserUuId);
        window.location.href = `../../../../../${CommonConfigJson.routePath}/${ConfigJson.RedirectToUrl}`;
    };
};

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop().split(';').shift() : null;
};

export { StartFunc };