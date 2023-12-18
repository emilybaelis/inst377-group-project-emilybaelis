const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const cors = require('cors');
const port = 3000;
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://skqgiklhueexscsjqibd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcWdpa2xodWVleHNjc2pxaWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4NjM3MzYsImV4cCI6MjAxODQzOTczNn0.g3rv7byKrHdn-I_eNBZLaNTWzYxC2d0xEMmM176Hzqg'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.post('/customer', async (req, res) => {

    var name = req.body.name;
    var phone = req.body.phone;
    var email = req.body.email;
    var message = req.body.message;

    const { data, error } = await supabase
        .from('Customer')
        .insert([
            { 'cust_name': name, 'cust_phone': phone, 'cust_email': email, 'cust_message': message }
        ])
        .select();

    console.log(data)
    res.header('Content-type', 'application/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('App is running')
})