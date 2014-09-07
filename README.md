# GeoCheck

## Features

- click a button to gather information about current location and time
- store it in an object
- stick it in localStorage or browser db and sync if connection available

## Information to gather

- time
- lat/long
- elevation
- optional photo (phase 2)
- notes

## How to sync

- AJAX call to db script on server
- tell user how it went

## Program flow

- create empty object
- listen for click on button
- run function that checks for geolocation
- success runs a function that puts data into the object and stores it
- sync function runs

## Next steps from current commit

- allow more than one stamp in localStorage
- build fallback form at least
