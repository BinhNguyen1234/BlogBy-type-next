const express = require('express');
const next = require('next');

const PORT = 2000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
.then(() => {
  const server = express()
  server.all('*',(req, res)=>{
    return handle(req,res)
})
    
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

// const express = require('express')
// const next = require('next')

// const port = parseInt(process.env.PORT, 10) || 2000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   const server = express()

//   server.all('*', (req, res) => {
//     return handle(req, res)
//   })

//   server.listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })