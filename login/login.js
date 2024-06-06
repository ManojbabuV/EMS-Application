const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3008'],
  credentials: true,
};
app.use(cors(corsOptions));
async function connectDB() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "custom",
      password: "custom",
      connectString: "dbfin:1521/FINMULTI",
      port: 1521
    });
    console.log("Successfully connected to Oracle Database");
    return connection;
  } catch (err) {
    console.error("Error connecting to Oracle Database:", err);
    throw err;
  }
}

app.post('/signup', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { id, f_name, l_name, department, designation, email, password, mobile } = req.body;
    const insert = "INSERT INTO custom.register (id,f_name, l_name, department, designation, email, password, mobile) VALUES (:id,:f_name, :l_name, :department, :designation, :email, :password, :mobile)";
    const binds = {id, f_name, l_name, department, designation, email, password, mobile };
   const resul =  await connection.execute(insert, binds, { autoCommit: true });
    if (resul === resul) {
      res.send("User registered successfully");
    } else {
      res.send({ message: "Existing data inerting!" });
    }
    
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while registering the user." });
  }  
});

app.post("/login", async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { email, password } = req.body;
    const select = "SELECT * FROM custom.register WHERE email = :email AND password = :password";
    const selectParams = { email, password };
    const result = await connection.execute(select, selectParams);
    if (result.rows.length > 0) {
      res.send(result.rows);
    } else {
      res.send({ message: "Wrong username or password!" });
    }
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send({ message: "An error occurred while logging in." });
  }  
});

// app.post("/forgotpassword", async (req, res) => {
//     const email = req.body.email;
//     const con = await connectDB();
//     con.execute(
//         "SELECT * FROM custom.register WHERE email = :email",
//         [email],
//         (err, result) => {
//             if (err) {
//                 console.error('Error executing query:', err);
//                 res.status(500).send({ message: "An error occurred while processing the request." });
//             } else {
//                 if (result.rows.length > 0) {
//                     res.send(result.rows);
//                 } else {
//                     res.send({ message: "Wrong email, please enter the correct email!" });
//                 }
//             }
//         }
//     );
// }); 
// app.post("/forgotpass", async (req, res) => {
//     const email = req.body.email;
//     const newPassword = req.body.newPassword;
//     const con = await connectDB();
//     con.execute(
//         "UPDATE custom.register SET password = :newPassword WHERE email = :email",
//         { email, newPassword },
//         (err, result) => {
//             if (err) {
//                 console.error('Error executing query:', err);
//                 res.status(500).send({ message: "An error occurred while updating the password." });
//             } else {
//                 if (result.rowsAffected > 0) {
//                     res.send({ message: "New password updated successfully" });
//                 } else {
//                     res.status(404).send({ message: "User not found" });
//                 }
//             }
//         }
//     );
// }); 
const PORT =  3008; 
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log("Running backend server on port", PORT);
    } catch (err) {
        console.error("Error starting backend server:", err);
    }
});
