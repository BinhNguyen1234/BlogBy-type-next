const fs = require('fs')

function logReq(req, res, next) {
   const log = {
      time: new Date().toLocaleString('en-US'),
      method: req.method,
      hostname: req.hostname,
      path: req.path,
      ip: req.ip,
   };
   if(process.env.NODE_ENV=="production"){
    const logger = fs.createWriteStream("./Server/log/log.txt",{
      flags: 'a' 
    })
   logger.write(`-----------$Start----------\n`)
   logger.write(`|time:     ${log.time}|\n`)
   logger.write(`|method:   ${log.method}|\n`)
   logger.write(`|hostname: ${log.hostname}\n`)
   logger.write(`|path:     ${log.path}\n`)
   logger.write(`|ip:       ${log.ip}\n`)
   logger.write(`-----------$End----------\n`)
   logger.write(`\n`)
   logger.write(`\n`)
   logger.end()
   next();
   }
}
module.exports = logReq;
