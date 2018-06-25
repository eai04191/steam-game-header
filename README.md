Steam Game Header
===

Create a URL to display the header image of the game you are playing on Steam.

## Preparation

1. Get your Steam Web API key here:

    https://steamcommunity.com/dev/apikey

2. Next, Find your Steam 64 ID here: 

    https://steamid.xyz/

    It's looks like: `76561198040100825`.

## Usage

Replace the API Key and Steam 64 ID in the URL below and open it in the browser.

```
https://eai04191.github.io/steam-game-header/?key=YOUR_API_KEY&steamid=YOUR_STEAM_64_ID
```

If you are running the game, the header image of the game should be displayed.

Nothing will be displayed unless you have started the game.

### Use with OBS

![screenshot](https://i.imgur.com/4GkBlGK.png)

Now, you can use this with OBS.

Add the browser source to the OBS source and enter the URL.

With this, you can automatically display the header image of the game you are playing.

### Auto Update

Since this script displays the game at the time of loading, it can not detect starting another game or finishing the game after being loaded.

So, there is an option to automatically update.

When reflash parameter (unit: minute) is added to URL, it is automatically updated after the specified time.

```
https://eai04191.github.io/steam-game-header/?key=YOUR_API_KEY&steamid=YOUR_STEAM_64_ID&reflash=5
```

This URL is updated automatically every 5 minutes.


## License

This project is licensed under the MIT License.