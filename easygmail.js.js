/***************************************************************\
 *                                              _ _    _       *
 *    ___  __ _ ___ _   _  __ _ _ __ ___   __ _(_) |  (_)___   *
 *   / _ \/ _` / __| | | |/ _` | '_ ` _ \ / _` | | |  | / __|  *
 *  |  __/ (_| \__ \ |_| | (_| | | | | | | (_| | | |_ | \__ \  *
 *   \___|\__,_|___/\__, |\__, |_| |_| |_|\__,_|_|_(_)/ |___/  *
 *                  |___/ |___/                     |__/       *
 *                                                             *
 *                    author: {                                *
 *                      name: "RomanGames",                    *
 *                      twitter: [                             *
 *                        "@_romangames_",                     *
 *                        "@programmer___",                    *
 *                      ]                                      *
 *                    },                                       *
 *                    version: "0.1.0",                        *
 *                    license: "MIT"                           *
 *                                                             *
\***************************************************************/

/* require */
const nodemailer = require("nodemailer");

/* class */
module.exports = class {
  // login(constructor)
  constructor(account, password) {
    this.login(account, password);
  }
  // login
  login(account, password) {
    this.account = account;
    return (this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: account,
        pass: password
      }
    }));
  }
  // send
  send(
    to,
    subject,
    text
  ) {
    return new Promise((resolve, reject) => this.transporter.sendMail(
      {
        from: this.account,
        to: to,
        subject: subject,
        text: text
      },
      (error, success) => {
        if (error) {
          if (!reject) reject = console.error();
          reject(error);
        } else {
          if (!resolve) resolve = console.log();
          resolve("Gmail sent: " + success.response);
        }
      }
    ));
  }
};
