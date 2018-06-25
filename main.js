const key = getParm("key");
const steamid = getParm("steamid");
const URL = `https://script.google.com/macros/s/AKfycbwTz8vBIAkYec3rgfxE9KYBnkHMpwo5S0zbPwQzmqfwYxdBPRA/exec?key=${key}&steamid=${steamid}`;

function getParm(key) {
    let regExpString = key + "=(.*?)(&|$)";
    let regExp = new RegExp(regExpString);
    return decodeURIComponent(window.location.search.match(regExp)[1]);
}

fetch(URL).then(function (response) {
    response.text().then(function (json) {
        let url = JSON.parse(json)["url"];
        document.getElementById("img").innerHTML = `<img src="${url}" width="460" height="215">`;
    });
});