const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3010'],
    credentials: true,
  };
  app.options('/login', cors(corsOptions));
const dbConfig = {
  user: 'custom',
  password: 'custom',
  connectString: '//dbfin:1521/FINMULTI',
  poolMax: 10
};

async function connectDB() {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Connected to Oracle Database");
    return connection;
  } catch (err) {
    console.error("Error connecting to Oracle Database:", err);
    throw err;
  }
}

app.post("/about", async (req, res) => {
   let connection;
    try {
        connection = await connectDB();
  const { employee_id, employee_design, date_column } = req.body;
  const sql = "INSERT INTO custom.present (employee_id, employee_design, date_column) VALUES (:employee_id, :employee_design, :date_column)";
  const binds = { employee_id, employee_design, date_column };
   const result =  await connection.execute(sql, binds, { autoCommit: true });
    if (result === result) {
        res.send("User registered successfully");
      } else {
        res.send({ message: "Time is denied!" });
      }
}   
  catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send({ message: "Error inserting data" });
  }  
});
app.get('/display', async (req, res) => {
    let connection;
    try {
        connection = await connectDB();
      const sql = 'SELECT id, employee_id, employee_design, date_column FROM custom.present'; 
      const send = {id, employee, employee_design,date_column}
      const result = await connection.execute(sql,send  );
      res.send(result.rows,({message:"data dispalyed"})); 
    } catch (err) {
      console.error('Error executing query:', err);
      res.status(500).send({ message: "Error fetching attendance details" });
    }  
  });  
  app.get('/madei', async (req, res) => {
    let connection;
    try {
        const id = req.params.id; 
        connection = await connectDB();
        const sql = 'SELECT id, employee_id, date_column FROM custom.present';
        const binde = {id}
        const result = await connection.execute(sql,binde ); 
        res.send(result.rows);  
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send({ message: "Error fetching data from attendance details"});
    }  
}); 
app.get("/attendetails/:id", async (req, res) => {
    try {
        connection = await connectDB();
        const id = req.params.id;  
        const sql = "SELECT * FROM custom.present WHERE id = :id";  
        const binds = [id]; 
        const result = await connection.execute(sql, binds );   
        if (result.rows.length > 0) {
            res.send(result.rows);  
        } else {
            res.status(404).send({ message: "No record found with the provided id" });
        }
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).send({ message: "An error occurred while processing your request" });
    }
})
app.delete("/attenddelete/:id", async (req, res) => { 
try {
    connection = await connectDB();
    const { id } = req.body.useParam;  
    const sql = "DELETE FROM custom.present WHERE id = :id"; 
    const binds = { id };  
    const result = await connection.execute(sql, binds   ); 
    if (result.rowsAffected && result.rowsAffected === 1) {  
        res.send({ message: "User deleted successfully" });
    } else {
        res.status(404).send({ message: "User not found or already deleted" });
    }
} catch (error) {
    console.error("Error executing query:", error);
    res.status(500).send({ message: "Error deleting user" });
}
}) 
app.put("/attendadd/:id", async (req, res) => {
        let connection;
        try {
            connection = await connectDB();
            const id = req.params.id;  
            const {employee_id, employee_design, date_column } = req.body; 
            const sql = "UPDATE custom.present SET employee_id = :employee_id, employee_design = :employee_design, date_column = :date_column WHERE id = :id";  
            const binds = { employee_id, employee_design, date_column, id }; 
            const result = await connection.execute(sql, binds, { autoCommit: true });   
            if (result.rowsAffected && result.rowsAffected > 0) {  
                res.send({ message: "Employee details updated successfully" });
            } else {
                res.status(404).send({ message: "User not found" });
            }
        } catch (err) {
            console.error('Error updating employee details:', err);
            res.status(500).send({ message: "An error occurred while updating the Employee." });
        }  
}); 
app.post("/product", async (req, res) => {
    const { employee_id, start_date, end_date, lev_reason, lev_approve } = req.body;
    let connection;
    try {
        connection = await connectDB();
        const result = await connection.execute(
            "INSERT INTO custom.leave (employee_id, start_date, end_date, lev_reason, lev_approve) VALUES (:employee_id, TO_DATE(:start, 'YYYY-MM-DD'), TO_DATE(:end, 'YYYY-MM-DD'), :reason, :accept)",
            {
                employee_id,
                start_date,
                end_date,
                lev_reason,
                lev_approve
            },
            { autoCommit: true }
        );
        console.log("Rows inserted:", result.rowsAffected);
        res.send({ message: "Leave record successfully added" });
    } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).send({ message: "Error inserting data" });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error("Error closing connection:", err);
            }
        }
    }
});
app.get('/leavi', (req, res) => {
    con.query('SELECT  id, employee_id, start_date, accept FROM custom.leave', (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ message: "Error fetching data from leave table" });
            return;
        }
        res.send(result);
    });
}); 
app.get('/shareu', (req, res) => {
    con.query('SELECT  id,  employee_id, start_date, end_date, lev_reason, lev_approve FROM custom.leave', (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ message: "Error fetching data from leave details" });
            return;
        }
        res.json(result);
    });
});

 
app.delete("/leavedelete/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM custom.leave WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error('Error deleting employee:', err);
            res.status(500).send({ message: "An error occurred while deleting the employee." });
        } else {
            if (result.affectedRows > 0) {
                res.send({ message: "Employee detail deleted successfully" });
            } else {
                res.status(404).send({ message: "Employee not found" });
            }
        }                                                                  
    });
}); 
app.get("/leavedetails/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM custom.leave WHERE id = ?"; 
    con.query(sql, id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("An error occurred while processing your request.");
        }
        res.send(result);
    });
}); 
app.put("/leaveadd/:id", (req, res) => {
    const id = req.params.id;
    const { employee_id, start_date, end_date, lev_reason, lev_approve } = req.body; 
    con.query("UPDATE custom.leave SET employee_id =?, start_date = ?, end_date = ?,  lev_reason= ?, lev_approve = ? WHERE id = ?",
        [employee_id, start_date, end_date, lev_reason, lev_approve, id],
        (err, result) => {
            if (err) {
                console.error('Error updating employee details:', err);
                res.status(500).send({ message: "An error occurred while updating the Employee." });
            } else {
                if (result.affectedRows > 0) {
                    res.send({ message: "Employee details updated successfully" });
                } else {
                    res.status(404).send({ message: "User not found" });
                }
            }
        });
}); 
app.post("/comment", (req, res) => {
    const {  employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, cur_location, per_location, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bank_ac, uan_no, pf_no } = req.body; 
    const sql = "INSERT INTO custom.employee ( employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, cur_location, per_location, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bank_ac, uan_no, pf_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [  employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, cur_location, per_location, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bank_ac, uan_no, pf_no];

    con.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ message: "Error inserting data" });
            return;
        }
        res.send(result);
    });
});

app.get('/wanted', (req, res) => {
    con.query('SELECT id, employee_name, employee_id, work_email, mobile, department, designation FROM custom.employee', (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ message: "Error fetching data from employee details" });
            return;
        }
        res.send(result);
    });
}); 
app.delete("/employeedelete/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM custom.employee WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error('Error deleting employee:', err);
            res.status(500).send({ message: "An error occurred while deleting the employee." });
        } else {
            if (result.affectedRows > 0) {
                res.send({ message: "Employee detail deleted successfully" });
            } else {
                res.status(404).send({ message: "Employee not found" });
            }
        }                                                                  
    });
});

app.put("/employeeadd/:id", (req, res) => {
    const id = req.params.id;
    const { employee_name, employee_id, work_email, mobile, department, designation } = req.body; 
    con.query("UPDATE custom.employee SET  employee_name = ?, employee_id = ?, work_email = ?, mobile = ?, department = ?, designation = ? WHERE id = ?",
        [employee_name, employee_id, work_email, mobile, department, designation, id], 
         (err, result) => {
            if (err) {
                console.error('Error updating employee details:', err);
                res.status(500).send({ message: "An error occurred while updating the Employee." });
            } else {
                if (result.affectedRows > 0) {
                    res.send({ message: "Employee details updated successfully" });
                } else {
                    res.status(404).send({ message: "User not found" });
                }
            }
        });
});
 
app.get("/employeedetails/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM custom.employee WHERE id = ?";

    con.query(sql,  id , (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred while processing your request.");
        }
        res.send(result);   
    });
});

  
app.post("/sendOtp", (req, res) => {
    const { sendOtp, updated_pass } = req.body;
    con.query("INSERT INTO custom.employee (sendOtp, updated_pass) VALUES (?, ?)", [sendOtp, updated_pass], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send({ message: "Error inserting data" });
            return;
        }
        res.send(result);
    });
});


const PORT = 3030;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Running backend server on port", PORT);
  } catch (err) {
    console.error("Error starting backend server:", err);
  }
});







 