// const express = require("express");
// const app = express();
// const mysql = require("mysql"); // https://github.com/mysqljs/mysql npm install mysqljs/mysql
// const cors = require("cors"); //https://www.npmjs.com/package/cors npm i cors
   
// //const port = 3000
   
// app.use(cors());
// app.use(express.json());
 
// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "nodejs",
// });
 
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
 
// app.get("/users", (req, res) => {
//   const q = "SELECT * FROM  study";
//   db.query(q, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// });
 
// app.post("/create", (req, res) => {
//     const employee_name = req.body.employee_name;
//     const employee_id = req.body.employee_id;
//     const work_email = req.body.work_email;
//     const mobile = req.body.mobile;
//     const department = req.body.department;
//     const designation = req.body.designation;
     
//     db.query(
//       "INSERT INTO  study (employee_name, employee_id, work_email, mobile, department,designation) VALUES (?,?,?,?,?,?)",
//       [employee_name, employee_id, work_email, mobile, department, designation],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send("You have registered successfully!");
//         }
//       }
//     );
// }); 
 
// app.get("/userdetails/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("SELECT * FROM  study WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
 
// app.delete("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   const q = " DELETE FROM  study WHERE id = ? ";
//   db.query(q, [userId], (err, data) => {
//     if (err) return res.send(err);
//     return res.json(data);
//   });
// });
 
// app.put("/users/:id", (req, res) => {
//   const userId = req.params.id;
//   const q = "UPDATE  study SET `employee_name`= ?, `employee_id`= ?, `work_email`= ?, `mobile` = ?, department = ?, designation = ? WHERE id = ?";
//   const values = [
//     req.body.employee_name,
//     req.body.employee_id,
//     req.body.work_email,
//     req.body.mobile,
//     req.body.department,
//     req.body.designation,
//   ];
//   db.query(q, [...values,userId], (err, data) => {
//     if (err) return res.send(err);
//     return res.json(data); 
//   });
// });
 
 
 
// app.listen(3001, () => {
//     console.log("Yey, your server is running on port 3001");
// });










const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "nodejs",
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const q = "SELECT * FROM study";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const { employee_name, employee_id, work_email, mobile, department, designation } = req.body;

  const sql = "INSERT INTO study (employee_name, employee_id, work_email, mobile, department, designation) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [employee_name, employee_id, work_email, mobile, department, designation];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred while processing your request.");
    }
    res.send("You have registered successfully!");
  });
});

app.get("/userdetails/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM study  WHERE id= ?" ;
  db.query(sql, id, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred while processing your request.");
    }
    res.send(result);
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const sql = "DELETE FROM study WHERE id = ?";
  db.query(sql, userId, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred while processing your request.");
    }
    res.json(data);
  });
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { employee_name, employee_id, work_email, mobile, department, designation } = req.body;

  const sql = "UPDATE study SET employee_name = ?, employee_id = ?, work_email = ?, mobile = ?, department = ?, designation = ? WHERE id = ?";
  const values = [employee_name, employee_id, work_email, mobile, department, designation, userId];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred while processing your request.");
    }
    res.json(data);
  });
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
