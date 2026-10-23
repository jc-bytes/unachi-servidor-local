/* Equipo físico local. Estimador orientativo, pendiente de prueba técnica. */
const CostModel=(()=>{
 const n=v=>Math.max(0,Number(v)||0);
 function estimate(x){
  const years=Math.max(1,Math.min(5,Math.floor(Number(x.years)||1))),growth=n(x.growth)/100;
  const annual=Array.from({length:years},(_,i)=>{const factor=(1+growth)**i,dbGB=Math.ceil(n(x.dbGB)*factor),filesGB=n(x.filesGB)*factor;return{year:i+1,dbGB,filesGB,ssdGB:Math.ceil((80+dbGB+filesGB)*1.3),backupGB:Math.ceil((dbGB+filesGB)*2)}});
  const last=annual.at(-1),ramGB=n(x.concurrent)<=15?16:n(x.concurrent)<=50?32:64;
  const hardware=n(x.hardwarePrice),ups=n(x.upsPrice),backup=2*n(x.backupPrice),upgrades=n(x.upgrades),localInitial=hardware+ups+backup+upgrades;
  const electricityMonth=n(x.watts)/1000*730*n(x.kwhPrice),localSupport=n(x.localHours)*n(x.hourRate),localMonth=electricityMonth+localSupport+n(x.localOther),localTotal=localInitial+years*12*localMonth;
  return{annual,ramGB,localDiskGB:last.ssdGB,backupPerDriveGB:last.backupGB,localInitial,electricityMonth,localSupport,localMonth,localTotal,hardware,ups,backup,upgrades,years};
 }
 return{estimate};
})();
if(typeof module!=='undefined'&&module.exports)module.exports=CostModel;
