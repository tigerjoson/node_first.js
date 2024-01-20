const express = require('express');

const homedir = require('os').homedir();

var app = express()
const fs = require('fs')
const now = new Date();
const axios = require('axios');
const authorization = "au";
var data_set = ""
const urlstring = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/${data_set}?Authorization=${authorization}&format=JSON`;
const paragraph = "=================================================";
axios.get(urlstring).then(response => {
    //console.log(response.status);
   // console.log(response.data);
	const json_parse = JSON.parse(JSON.stringify(response.data));
	//print (json_parse)
	
	var NewTaipeirecord = json_parse.records.location[1];
	print(NewTaipeirecord.locationName)
//    print(NewTaipeirecord);
    var weather_phenomenon = NewTaipeirecord.weatherElement;

	console.log("min_temperature="+"\r\n"+min_temperature(response.data));
	console.log("highest_temperature="+"\r\n"+highest_temperature(response.data));
	
	console.log(homedir)
    var fullfilename = homedir.concat("/Desktop/參考資料/資訊note/程式/網頁/myclientapi/",now.getFullYear(), "-", now.getMonth() + 1, "-", now.getDate(),NewTaipeirecord.locationName);
    console.log("fullfilename="+fullfilename);

})
.catch(error => {
    print(response.status)
	print(error)
});
/*node environment variable => process.env.NODE_ENV;*/
/*console.log(process.env)*/
;

//const port = process.env.PORT || 4343 ;

function rainfall_probability(data){
	const json_parse = JSON.parse(JSON.stringify(data));
    //print(`json_parse= ${json_parse}`);
    var locationNametitle = json_parse.result.fields[1].id;
    var alllocationrecord = json_parse.records;
    var NewTaipeirecord = json_parse.records.location[1];
   print(NewTaipeirecord);
    var weather_phenomenon = NewTaipeirecord.weatherElement;
    var rainfall_probability = weather_phenomenon[0];
	var rainfall_probability_time_record0 = rainfall_probability.time[0].startTime.concat("~",rainfall_probability.time[0].endTime,",",rainfall_probability.time[0].parameter.parameterName);
	var rainfall_probability_time_record1 = rainfall_probability.time[1].startTime.concat("~",rainfall_probability.time[1].endTime,",",rainfall_probability.time[1].parameter.parameterName);
	var rainfall_probability_time_record2 = rainfall_probability.time[2].startTime.concat("~",rainfall_probability.time[2].endTime,",",rainfall_probability.time[2].parameter.parameterName);
	var rainfall_probabilitycsvrecord = rainfall_probability_time_record0.concat("\r\n",rainfall_probability_time_record1,"\r\n",rainfall_probability_time_record2);
	return rainfall_probabilitycsvrecord;
}

 function min_temperature(data){
	const json_parse = JSON.parse(JSON.stringify(data));
	var NewTaipeirecord = json_parse.records.location[1];
    var weather_phenomenon = NewTaipeirecord.weatherElement;
	var lowest_temperature = weather_phenomenon[2];
	var lowest_temperature_record0= lowest_temperature.time[0].startTime.concat("~",lowest_temperature.time[0].endTime,",",lowest_temperature.time[0].parameter.parameterName,lowest_temperature.time[0].parameter.parameterUnit)
	var lowest_temperature_record1= lowest_temperature.time[1].startTime.concat("~",lowest_temperature.time[1].endTime,",",lowest_temperature.time[1].parameter.parameterName,lowest_temperature.time[1].parameter.parameterUnit)
	var lowest_temperature_record2= lowest_temperature.time[2].startTime.concat("~",lowest_temperature.time[2].endTime,",",lowest_temperature.time[2].parameter.parameterName,lowest_temperature.time[2].parameter.parameterUnit)
	var lowest_temperature_record = lowest_temperature_record0.concat("\r\n",lowest_temperature_record1,"\r\n",lowest_temperature_record2)
	return lowest_temperature_record
}

function highest_temperature(data){
	const json_parse = JSON.parse(JSON.stringify(data));
	var NewTaipeirecord = json_parse.records.location[1];
    var weather_phenomenon = NewTaipeirecord.weatherElement;
	var Max_temperature = weather_phenomenon[4];
	var Max_temperature_record0= Max_temperature.time[0].startTime.concat("~",Max_temperature.time[0].endTime,",",Max_temperature.time[0].parameter.parameterName,Max_temperature.time[0].parameter.parameterUnit);
	var Max_temperature_record1= Max_temperature.time[1].startTime.concat("~",Max_temperature.time[1].endTime,",",Max_temperature.time[1].parameter.parameterName,Max_temperature.time[1].parameter.parameterUnit);
	var Max_temperature_record2= Max_temperature.time[2].startTime.concat("~",Max_temperature.time[2].endTime,",",Max_temperature.time[2].parameter.parameterName,Max_temperature.time[2].parameter.parameterUnit);
	var Max_temperature_record = Max_temperature_record0.concat("\r\n",Max_temperature_record1,"\r\n",Max_temperature_record2)
	
	return  Max_temperature_record
}

function look_keys(object) {
    console.log(Object.keys(object));
}

function print(object) {
    console.log(object);
}

/*app.listen(port,()=>console.log("port = "+port));*/
//app.listen(port,()=>console.log(`port = ${port}`))
