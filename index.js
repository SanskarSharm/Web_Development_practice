// // const express = require("express");
// // const app = express();
// // app.use(express.json());
// // const port = 3001;

// // app.get("/", (req, res) => {
// //   res.send({ hello: "world from get api endpoint" });
// // });
// // app.post("/", (req, res) => {
// //   let a = req.body.a;
// //   let b = req.body.b;
// //   let c = a + b;
// //   res.send({ result: c });
// // });

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`);
// // });

// // const express = require("express");
// // const app = express();
// // app.use(express.json());
// // const port = 3001;

// // app.get("/", (req, res) => {
// //   res.send({ hello: "world from get api endpoint" });
// // });
// // app.post("/", (req, res) => {
// //   let a = req.body.a;
// //   let b = req.body.b;
// //   let c = 0;
// //   let op = req.body.op;
// //   switch (op) {
// //     case "+":
// //       c = a + b;
// //       break;
// //     case "-":
// //       c = a - b;
// //       break;
// //     case "*":
// //       c = a * b;
// //       break;
// //     case "/":
// //       c = a / b;
// //       break;
// //   }
// //   res.send({ result: c });
// // });

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`);
// // });


// // const express = require("express");
// // const app = express();
// // app.use(express.json());
// // const port = 3306;

// // app.get("/", (req, res) => {
// //   res.send({ hello: "world from get api endpoint" });
// // });
// // app.post("/", (req, res) => {
// //   let a = req.query.a;
// //   let b = req.query.b;
// //   let c = a+b;
// //   res.send({ result: c });
// // });

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`);
// // });

// const express = require("express");
// const app = express();
// app.use(express.json());
// const port = 3007;
// app.use

// app.get("/", (req, res) => {
//   res.send({ hello: "world from get api endpoint" });
// });
// app.post("/", (req, res) => {
//   let a = parseInt(req.query.a);
//   let b = parseInt(req.query.b);
//   let name = req.query.name;
//   let c = a + b;
//   res.send({ result: c, user: name });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require('express')
const app = express()
const userRoutes=require("./route/user.route");

app.use("/users",userRoutes);
const port = 3009;

// app.get('/', (req, res) => {
//   res.send({Hello :"World! from get api"})
// })

app.post("/", (req, res) => {
    // let a=req.query.a;
    // let b=req.query.b;
    // let c=0;
    // let op = req.body.op;
    // switch(op){
    //     case '+':
    //         c = a + b;
    //         break;
    //     case '-':
    //         c = a - b;
    //         break;
    //     case '*':
    //         c = a*b;
    //         break;
    //     case '/':
    //         c = a/b;
    //         break;
    
    res.send({ result: c });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})