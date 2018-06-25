function doGet(e) {
    if (!e.parameter.key || !e.parameter.steamid) {
        return ContentService.createTextOutput("パラメータが足りないよ（keyとsteamidが必要）");
    } else {
        var key = e.parameter.key;
        var steamid = e.parameter.steamid;
        var response = UrlFetchApp.fetch("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + key + "&steamids=" + steamid);
        var json = JSON.parse(response.getContentText());
        var gameid = json["response"]["players"]["0"]["gameid"];
        if (gameid) {
            var url = "https://steamcdn-a.akamaihd.net/steam/apps/" + gameid + "/header.jpg";
        } else {
            var url = "#";
        }
        var html = "<img src='" + url + "' width='460' height='215'>";
        var json = JSON.stringify({
            url: url
        });
        return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
    }
}