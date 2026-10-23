const assert=require('node:assert/strict'),M=require('./cost-model.js'),d=require('./catalog.json');
const p=id=>d.products.find(p=>p.id===id),close=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
const x={dbGB:8,filesGB:50,years:3,growth:20,concurrent:10,hardwarePrice:p('mini').price,upsPrice:p('ups').price,backupPrice:p('backup').price,watts:40,kwhPrice:.2,hourRate:25,localHours:2,upgrades:0,localOther:0};
const e=M.estimate(x);close(e.localInitial,846.01);close(e.electricityMonth,5.84);close(e.localMonth,55.84);close(e.localTotal,2856.25);assert.equal(e.localDiskGB,214);assert.equal(e.backupPerDriveGB,168);assert.equal(e.ramGB,16);
assert.equal(M.estimate({...x,concurrent:30}).ramGB,32);assert.equal(M.estimate({...x,concurrent:80}).ramGB,64);assert.equal(M.estimate({...x,filesGB:2000,growth:50}).backupPerDriveGB,9036);
close(M.estimate({...x,hardwarePrice:0,localHours:0}).localInitial,548.01);assert.equal(M.estimate({...x,growth:0}).annual[2].filesGB,50);
const fs=require('node:fs'),html=fs.readFileSync('index.html','utf8');assert.ok(html.includes(fs.readFileSync('research/cost-model.js','utf8')),'Embedded model differs from verified source');for(const s of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new Function(s[1]);
for(const term of ['id="cloudTotal"','id="computeSize"','id="needMAU"','id="needEgress"','Supabase Pro administrado','piloto administrado'])assert.ok(!html.includes(term),`Unexpected subscription content: ${term}`);
console.log('Verified local-device costs, electricity, growth, capacity, existing-device budget, JavaScript syntax and removal of subscription controls.');
