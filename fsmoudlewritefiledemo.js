// var mysql = require('mysql');
 import mysql from 'mysql';
// const mytool = require("./mymodule");
 //import mytool from "./mymodule.js";

 //const {look_keys ,print,clearmonitor} = mytool

//import inquirer from 'inquirer';

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'disk_official_document'
});
 connection.connect();
 //var querstring = "Select * from findcase where casenumber like '%0367'"
// var querstring = "Select * from findcase where casenumber like '%134'"
 var querstring = "Select * from findcase where br_fullname like '%191%'"
 connection.query(querstring, function (error, results, fields) {
  if (error) throw error;
  //console.log(`${results[0].br_fullname},${results[0].case_number}`);
  console.log(results.length);
  console.log(results);
  
});
connection.end();
