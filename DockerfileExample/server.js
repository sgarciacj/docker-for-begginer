'use strict';

const os = require('os');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Info about task
const datetime = new Date();

const message_info = `Docker | Beginners
 - Server running at http://${HOST}:${PORT}/
 - TimeZone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
 - Offset: ${datetime.getTimezoneOffset()}
 - Date: ${datetime.toLocaleDateString()}
 - Time: ${datetime.toLocaleTimeString()}
 - Hostname: ${os.hostname}
 - IP Address: `;


var net_int = os.networkInterfaces();
var no_of_network_interfaces = 0;

// Review Network (IP address available)
var network_info = '';
for (var key in net_int) {
        network_info += `\n\t${key}`;
        var net_infos=net_int[key];
     net_infos.forEach(element => {
        no_of_network_interfaces++;
    for (var attr in element){
                network_info += `\n\t\t${attr} : ${element[attr]}`;
    }
  });
}

// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message_info + network_info);
  res.send(message_info + network_info);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Endpoint http://${HOST}:${PORT}/info/`);
