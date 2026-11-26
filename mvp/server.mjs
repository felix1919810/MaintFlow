import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const routes=new Map([['/',['index.html','text/html']],['/index.html',['index.html','text/html']],['/core.mjs',['core.mjs','text/javascript']]]);
export function createServer(){return http.createServer(async(req,res)=>{
 const route=routes.get(new URL(req.url,'http://localhost').pathname);
 if(req.method!=='GET'||!route){res.writeHead(404);return res.end('Not found');}
 try{const b=await readFile(new URL(route[0],import.meta.url));res.writeHead(200,{'Content-Type':route[1]+'; charset=utf-8','Cache-Control':'no-store','Content-Security-Policy':"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'none'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"});res.end(b);}catch{res.writeHead(500);res.end('File unavailable');}
});}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){const server=createServer();server.listen(Number(process.env.PORT||4181),'127.0.0.1',()=>console.log('MaintFlow MVP: http://127.0.0.1:'+server.address().port));}
