function logReq(req, res, next) {
   const log = {
      method: req.method,
      hostname: req.hostname,
      path: req.path,
      ip: req.ip,
   };
   console.log(log);
   next();
}
module.exports = logReq;
