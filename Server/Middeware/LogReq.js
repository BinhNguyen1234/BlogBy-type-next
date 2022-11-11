function logReq(req, res, next) {
   const log = {
      method: req.method,
      hostname: req.hostname,
      path: req.path,
      ip: req.ip,
      time: new Date().toLocaleString('en-US'),
   };
   console.log(log);
   next();
}
module.exports = logReq;
