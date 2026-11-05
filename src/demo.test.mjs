import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {evaluateProjectDemo,runProjectDemo} from './runtime.js';
const c=JSON.parse(await readFile(new URL('./project.json',import.meta.url),'utf8'));
test('项目闭环与边界',()=>{const e=evaluateProjectDemo(c.projectId,c.modules);assert.equal(e.passed,e.total,JSON.stringify(e.cases.filter(x=>!x.passed)));for(const x of e.cases){assert.equal(x.output.writes,0);assert.equal(x.output.externalSends,0);}});
test('其他样本不可读取',()=>{const r=runProjectDemo(c.projectId,{recordId:'OTHER'},c.modules);assert.equal(r.status,'blocked');assert.equal(r.sources.length,0);});
