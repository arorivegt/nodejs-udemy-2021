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

but if you don't want to run your app every time that you do a change, you can use nodemon, and this command listen to when there are a lot of changes in our files, after we starte  we need to install in our app
```javascript
npm install nodemon --save-dev
nodemon app
```

I install these packages: colors, inquirer, dotenv, axios
```javascript
npm i express dotenv cors bcryptjs express-validator
```
## Packages and Tools used and recomended
- [Express - NPM](https://www.npmjs.com/package/express) --> Framework for Node
- [Express Official Page](http://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv) --> establish my enviroment variable
- [Cors](https://www.npmjs.com/package/cors) --> CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [Mongoose](https://www.npmjs.com/package/mongoose) -> is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. 
- [Bcryptjs](https://www.npmjs.com/package/bcrypt) -> Optimized bcrypt in JavaScript with zero dependencies. Compatible to the C++ bcrypt binding on node.js and also working in the browser.
- [Express-validator](https://www.npmjs.com/package/express-validator)
 
![console](./readme-img/cors.png)

I can get the data in that way when we send something like this

![console](./readme-img/getParam.png)

```javascript

//routes/user.js
router.put('/:id', putUsers)

//controllers/user.controller.js
const putUsers = (req, res = response) => {
    const id = req.params.id;
    //res.status(200).json({ add status to return
    res.json({
        message: "API put => controller",
        id
    })
}
```


I can get the data in that way when we send something like this

![console](./readme-img/getBody.png)

```javascript

//routes/user.js
router.post('/', postUsers)

//controllers/user.controller.js
const postUsers = (req, res = response) => {

    const { name, City } = req.body;
    

    //res.status(200).json({ add status to return
    res.json({
        message: "API post => controller",
        name,
        City
    })
}
```


I can get the data in that way when we send something like this

![console](./readme-img/getQuery.png)

```javascript

//routes/user.js
router.get('/', getUsers);

//controllers/user.controller.js
const getUsers = (req = request, res = response) => {

    const { q, name, apiKey = "Key Not Found" } = req.query;
    //res.status(200).json({ add status to return
    res.json({
        message: "API get => controller",
        q,
        name,
        apiKey
    })
}
```

If we use Git, we can use this command when we lost something
```bash
git checkout -- .
```
## Upload my Rest in heroku

Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
```bash
heroku login
```
Create a new Git repository
Initialize a git repository in a new or existing directory
```bash
cd my-project/
git init
heroku git:remote -a arorivegt-restserver
```

Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.
```bash
git add .
git commit -am "make it better"
git push heroku master
```

# MongoDB
Name's Database
- MyClusterExample
- mongodb+srv://user_node_example:9ecXtzC4sL6Tezm@myclusterexample.uzsil.mongodb.net/testdb
- We need to add our IP Address on cloud Mongo Page in Network Access

## Extension Chrome to view a JSON formatter
[JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related?hl=es)

I can use my API REST in heroku
https://arorivegt-restserver.herokuapp.com/api/users/?q=hola&name=Anibalsss

# POSTMAN
We can use this functionality when we need to change our URL between development enviroment and production enviroment

![console](./readme-img/postman1.png)

![console](./readme-img/postman2.png)

![console](./readme-img/postman3.png)

![console](./readme-img/postman4.png)

This is my REST-API deployed on Heroku

![console](./readme-img/final-restapi-heroku.png)