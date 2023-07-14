# ts-mongo-express-api

a simple example of creating api using MongoDb

Wirtten in TypeScript

Powered with NodeJS & ExpressJS

using Mongo Atlas to create Database & connect to it

## Walk Throught

- install packages with `npm install`

- create .env file & add the env setup

add the following information to the `.env`
fill the empty variables with uour desired strings

```
MONGO_URL=''
PORT='8080'
COOKIE=''
DOMAIN='localhost'
SECRET=''
HAMC='sha256'
```

- start your server with `npm start` (nodemon will make the server watch all the updates)

- start testing the available routes

## Available Routes

- Login `/api/auth/login`
- Register `/api/auth/register`
- All users `/users` (is Authaanticted - applies here)
- Update user `/users/update/:id` (isOwner,isAuthaanticted - applies here)
- Delete user `/users/delete/:id` (isOwner,isAuthaanticted - applies here)
