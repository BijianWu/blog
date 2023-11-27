// url has to start with http:// or https:// for this to work
export const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  export const openInMailApp = (url) => {
    window.open(`mailto:${url}?subject=Subject&body=Body%20goes%20here`)
  };

   