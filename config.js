const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="jayrad200@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/2349163481768";
global.website=process.env.GURL || "https://wa.me/2349163481768" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "RëverêGØD" 


global.devs = "2349163481768" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349163481768";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_01_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQzLFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExLFxuICAgICAgICA4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMVZKdmdTZ1ZnaFZIUDlwbHNCM2thMStSN0M4MWJYSmNJUXZnUDJpM2laWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTYzNDgxNzY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4M0VCREI5Q0I4QjNEMTZEMDc1Qjg0QzJCRDNBRTY2OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjcyNTEzMTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZnJ4aEdqc0ZTMzJSWGQzQWZXZWVkd1wiLFxuICBcInBob25lSWRcIjogXCJjNWNkNjRiNC0yNjEwLTQwYjktODQzMC0xMzE2MjE1ODQyNzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMzEsXG4gICAgICAxMjIsXG4gICAgICAzMCxcbiAgICAgIDE4OCxcbiAgICAgIDIzLFxuICAgICAgMTk5LFxuICAgICAgMTQsXG4gICAgICA4NCxcbiAgICAgIDUwLFxuICAgICAgMjA3LFxuICAgICAgNzUsXG4gICAgICA2NCxcbiAgICAgIDExOCxcbiAgICAgIDE0NCxcbiAgICAgIDk3LFxuICAgICAgMTc1LFxuICAgICAgMjQxLFxuICAgICAgODAsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMjE5LFxuICAgICAgMjM4LFxuICAgICAgMTI4LFxuICAgICAgMjQzLFxuICAgICAgNDYsXG4gICAgICA2MixcbiAgICAgIDE4LFxuICAgICAgMTcxLFxuICAgICAgNzksXG4gICAgICAxNDUsXG4gICAgICAxNDIsXG4gICAgICAxMzksXG4gICAgICAxMDEsXG4gICAgICAyMDcsXG4gICAgICAxMjcsXG4gICAgICAyNDIsXG4gICAgICA5MixcbiAgICAgIDIsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjM2Sk45S1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjM0ODE3Njg6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMTQyMTQwMDA4NDYwNzozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKamg1cnNGRU9pR3o3Y0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1hcVY5S1JaSjFvdmkrbk9BenhjWU5kSFhYUTJOcUdIK1dFdkYreHpqMkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUHpqRngxNHNUUVZIVE1UOXZXZ0VudXR3dm1WT2RWaGwzTTlSa1lkcjc2RzlJUmNJT01PaFdESSt2N0tTK3pVemR4Z2JRaDh5K2lvbm9sN1lhZmpSQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYU9SU0I2N29YaDAyNjJ2NysvN3dPOE5SZWUvdkljVVdzMFpRdy9QUGV6L2tlYlBjbFpPYzhKWlFCVlJEME9uT3lPTmkvd0VVSHEwQ3pkMGNLcnhDQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MzQ4MTc2ODozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcyNTEzMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHQzRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdDNC5qc29uIjogIntcImtleURhdGFcIjpcIkJDUzhtMUx5VjFHY280bGY2Wk9oVDd6ZCtVNWdicFR0WW1PSWxIMUNITWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2NzU5Mjg1NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMxNDY5NjQyMDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BØTGŌDJÅY",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "LŌRD HÏGH BØT",
  ownername:process.env.OWNER_NAME|| "BØTGŌDJÅY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "ZcETecbwaCKGF27LGjx1Mt3S",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "3cc485faf5e6aca811861fcbfc11fcfb";
global.aitts_Voice_Id = process.env.AITTS_ID|| "jeremy";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
