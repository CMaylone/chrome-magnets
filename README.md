#Chrome Magnets

Chrome magnets is a simple Chrome extension that will forward .torrent or magnet links to your personal torrent server of choice. All of this is done unobtrusively by right-clicking appropriate links/magnets.

## Installation
1. Depending on the torrent server, their web API  needs to exposed on target computer. See their respective documentation on how to do this.
2. Since this is currently in development, clone the repo.
3. In Chrome, go to `Menu --> Tools --> Extensions`.
4. Check [x] Developer Mode in the upper right.
5. Click `Load unpacked extension...`
6. Select the folder where you just cloned the code.
7. The extension should now be visible in your extensions list. Make sure it is enabled.

## Set-up
1. In Chrome extension menu, click `Options`.
2. Define `Sever Url` and `Bittorrent Server Type`.
3. Click `Save`.

## How to use
1. Right-click a .torrent or magnet link.
2. Click `Send to (torrent/magnet) to server`.

## Current BitTorrent Server Support
- qBittorrent

## Future Server support
- Define custom end-point and data to send.
- uTorrent
- Transmission
