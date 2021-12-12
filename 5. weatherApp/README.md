create package.json 
```sh
npm init -y
```

I added to my package.json this line to run my app
```json

  "scripts": {
    "start":"node index.js"
  },
```
And after that change I can run my app in this way
```javascript
npm start
```

I install these packages: colors, inquirer, dotenv, axios
```javascript
npm i colors inquirer  dotenv axios
```
## Packages and Tools used and recomended
- [Colors](https://www.npmjs.com/package/colors)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Request](https://www.npmjs.com/package/request) -> This is deprecated, but it's usefull
- [Fetch](https://www.npmjs.com/package/fetch) -> we can use this on backend, because the fetch in javascript doesn't work we need to install this to use Fetch on Backend
- [Axios](https://www.npmjs.com/package/axios) -> This the most recommended.
- [Test real API Quicly](https://reqres.in/)
- [MapBox](https://www.mapbox.com/)
- [geocoding](https://docs.mapbox.com/api/search/geocoding/)
- [Dotenv](https://www.npmjs.com/package/dotenv); -> load enviroment variables



## Extension Chrome to view a JSON formatter
[JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related?hl=es)


We can see the enviroment variables of our app
```javascript
console.log(process.env);
```
The result
```json
  'MAPBOX-KEY': 'pk.eyJ1IjoiYXJvcml2ZWd0IiwiYSI6ImNreDJvZGE3eTFxbm4zMW14bG5zM3cza2UifQ.bZi3fWQU9VcYZ8EsmMGreQ'
```