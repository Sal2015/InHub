const express = require ("express");
const mysql = require ('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    passsword: "",
    database: "innovesthub"
})

app.post('/signup', (req,res)=> {
    const sql = "INSERT INTO user (email,phone,password,dob) VALUES (?)";
    
    const values = [
        req.body.email,
        req.body.phone,
        req.body.password,
        req.body.dob
    ]
    db.query(sql,[values], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/signin', (req,res)=> {
    const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    
   
    db.query(sql,[req.body.email, req.body.password], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        }
        else{
            return res.json("Failed");
        }
    })
})

app.post('/signup', (req,res)=> {
    const sql = "INSERT INTO user (email,phone,password,dob) VALUES (?)";
    
    const values = [
        req.body.email,
        req.body.phone,
        req.body.password,
        req.body.dob
    ]
    db.query(sql,[values], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/addpro', (req,res)=> {
    const sql = "INSERT INTO addpro (product_name,product_phase,product_milestone,product_desc,patent_id,collaborator_name) VALUES (?)";
    
    const values = [
        req.body.proname,
        req.body.prophase,
        req.body.promile,
        req.body.prodesc,
        req.body.patid,
        req.body.colname,
    ]
    db.query(sql,[values], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/investorpro', (req,res)=> {
    const sql = "INSERT INTO investor_profile (investor_name,interested_phase,bank_account,investor_type) VALUES (?)";
    
    const values = [
        req.body.name,
        req.body.phase,
        req.body.accid,
        req.body.type
    ]
    db.query(sql,[values], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/addstartup', (req,res)=> {
    const sql = "INSERT INTO startup (startup_name,startup_sector) VALUES (?)";
    
    const values = [
        req.body.startname,
        req.body.startsector,
       
    ]
    db.query(sql,[values], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })

})

app.listen(8081, ()=> {
    console.log("listening")
})