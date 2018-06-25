const key = getParam("key");
const steamid = getParam("steamid");
const refresh = getParam("refresh");
const scriptURL = "https://script.google.com/macros/s/AKfycbwTz8vBIAkYec3rgfxE9KYBnkHMpwo5S0zbPwQzmqfwYxdBPRA/exec";
const URL = `${scriptURL}?key=${key}&steamid=${steamid}`;

function getParam(key) {
    let regExpString = key + "=(.*?)(&|$)";
    let regExp = new RegExp(regExpString);
    if (window.location.search.match(regExp)) {
        return window.location.search.match(regExp)[1];
    } else {
        return null;
    }
}

function msg(message) {
    document.getElementById("msg").innerHTML = message;
}

if (key === null || steamid === null) {
    msg("<kbd>key</kbd> or <kbd>steamid</kbd> is not set. :(");
} else {
    fetch(URL).then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw new Error("Network response was not ok.");
    }).then(function (json) {
        let url = JSON.parse(json)["url"];
        if (url != "#") {
            document.getElementById("img").innerHTML = `<img src="${url}" width="460" height="215">`;
        }
    }).catch(function (error) {
        console.log(`error: ${error}`);
        msg("Data could not be retrieved. Probably the parameter is wrong.");
    });
};

if (refresh) {
    let time = refresh * 60;
    let tag = `<meta http-equiv="refresh" content="${time};URL=${location.href}" />`;
    document.head.innerHTML = document.head.innerHTML + tag;
}