const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const path = require('path')

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(express.json());

const http = require('http');

const db = require('./database');


// starting the server
app.listen(3001, 'localhost', () => {
    console.log('listening on port 3001');
});


app.post('/applyLeaves', (req, res) => {
    const {
        id,
        noOfDays,
        reason,
        typeOfLeave,
    } = req.body;

    const query = "INSERT INTO LEAVES_DETAILS VALUES(?,?,?,?)";

    db.query(query, [id, noOfDays, reason, typeOfLeave], (err, result) => {
        if (err) console.log(err);
        else {
            const updateQuery = "update employee_leaves set leave_count=leave_count-? where id=?";
            db.query(updateQuery, [parseInt(noOfDays), id]);
        }
    })

    return res.json({ "success": true });
    
})




