const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const Database = require('./Database');
const session = require('express-session');
const passport = require('passport');
const api = require('../Api');
const logReq = require('../Middeware/LogReq');
const MongoStore = require('connect-mongo');
const { networkInterfaces } = require('os');
class App {
   async run(port) {
      let appNext = next({ dev });
      let handle = appNext.getRequestHandler();
      appNext
         .prepare()
         .then(async () => {
            const app = express();
            app.listen(port, () => {
               console.log('server running sucess at port ' + port);

               console.log(
                  `Address for access from external device ${
                     networkInterfaces().en0[1].cidr
                  }`
               );
            });

            Database.connect('Blog');
            app.use('/external', express.static('./Server/image'));
            app.use(logReq);
            app.use(bodyParser.json({ limit: '50mb' }));
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(
               session({
                  secret: 'secret',
                  saveUninitialized: true,
                  resave: true,
                  store: MongoStore.create({
                     client: Database.connection.getClient(),
                     dbName: 'Blog',
                  }),
               }),
               passport.session()
            );
            app.use(passport.initialize());
            app.use('/api', api);

            app.get('*', (req, res) => {
               return handle(req, res);
            });
         })
         .catch((err) => {
            console.error(err.stack);
            process.exit(1);
         });
   }
}
module.exports = new App();
