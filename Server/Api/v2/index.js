const v2 = require('express').Router();
const accountSid = 'ACb186042b9f83e2311269811f1130432d';
const authToken = '30e1c0c7b6c7c3bbb10bb175e613fb1f';
const client = require('twilio')(accountSid, authToken);

v2.post('/twilio', async (req, res) => {
    
    client.messages
      .create({ from: '+18082190748', body: 'Hi there', to: `${req.body.from}` })
      .then((message) => console.log(message))
      .catch((e)=>{console.log(e)})
    res.send("Ok")
});
// v2.use('/auth', Auth.authenticate('blogtee;accessToken'), (req, res) => {
//    res.send('OKKK');
// });
module.exports = v2;
