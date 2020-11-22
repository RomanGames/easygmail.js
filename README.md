# easygmail.js
Easily send and receive Gmail on node.js

## How to use
### ready
1. https://myaccount.google.com/lesssecureapps
1. `npm install nodemailer`
1. install this `easygmail.js.js` and put it your project
### example code
##### require
```js
const Gmail = require("./easygmail.js");
```
##### login
```js
const gmail = new Gmail("example@gmail.com", "examplePassword");
```
or
```js
gmail.login("example@gmail.com", "examplePassword");
```
##### send
```js
gmail
  .send("to.example@example.com", "SUBJECT", "content")
  .then(success => {
    console.log(success + "\nsuccess to send an email!");
  })
  .catch(error => {
    console.error(error);
    console.log("fail to send an email");
  });
```
