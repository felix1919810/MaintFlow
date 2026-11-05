import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':'index.html','/index.html':'index.html','/app.js':'app.js','/runtime.js':'runtime.js','/style.css':'style.css','/project.json':'project.json'};
const types={html:'text/html',js:'text/javascript',css:'text/css',json:'application/json'};
const server=http.createServer(async(req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(req.method!=='GET'||!file){res.writeHead(404);return res.end('Not found');}try{res.writeHead(200,{'Content-Type':types[file.split('.').at(-1)]+'; charset=utf-8','Cache-Control':'no-store','Content-Security-Policy':"default-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'"});res.end(await readFile(new URL(file,import.meta.url)));}catch{res.writeHead(500);res.end('File unavailable');}});
server.listen(Number(process.env.PORT||4180),'127.0.0.1',()=>console.log('Demo: http://127.0.0.1:'+server.address().port));
