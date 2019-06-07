# Demo Chat For RV online

Demo Chat For RV online

## Instalation

Install all dependencies

```
npm install
```

Run app

```
npm start
```

## Built With

* Node.Js
* Express.Js
* MongoDB
* Socket.IO

For Database Design, I am taking name and message field.
Name of database is chat and in it I created a collection called chats


To connect a socket I am using connection event.
To discount socket I am using disconnnect event.

Broadcasting means sending a message to everyone else except for the socket that starts it.(in demo software i am using it in app.js file of line number 36)

## Author

**jitesh**


