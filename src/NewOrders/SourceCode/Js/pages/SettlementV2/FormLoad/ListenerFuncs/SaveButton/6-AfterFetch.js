import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = ({ inFromFetch }) => {
  if (inFromFetch) {
    Swal.fire({
      title: "Settlement Success",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        jFLocalToURL();
      }
    });
  }
};

let jFLocalToURL = () => {
    const jVarLocalRedirectUrl=ConfigJson.urls.SaveButtonId.redirectToUrl;
  const url = new URL(window.location.href);
  let NewURl = new URL(jVarLocalRedirectUrl, url);

  window.location.href = NewURl.href;
};
export { StartFunc };
