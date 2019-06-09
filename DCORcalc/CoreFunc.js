var UMASS;  var cc; var bt; 
var vaxa=[]; 
var shift=0;
var A; 
var ans;
var d=/[\? ]/gi;
var dd;
var UMA;
var hash=1;
var tty="(";
var tty2=")";
  
 function doSpecialFunc(CZ, FUNC) {
try { 
sd="";
cc="";
bt=[];
vaxa=[];

if(UMASS.match("A")!=null&&UMASS.match("A")=="A") { UMASS= UMASS.replace("A", ans); }
var sd= UMASS;

cc=sd.replace(d, "#");
 bt= cc.split("#").join("    ").toString().split("   ");


for(X=0; X<=bt.length-1; X++) { 
vaxa[X]= bt[X];
if(bt[X].match(CZ)!=null||bt[X].match(CZ)==CZ) { 
var fad;
var fada;
if(FUNC=="square"||FUNC=="factorial"||FUNC=="cube"||FUNC=="micro"||FUNC=="milli"||FUNC=="kilo"||FUNC=="filo"||FUNC=="pico"||FUNC=="nano"||FUNC=="pi"||FUNC=="inverse") { fad=bt[X].split(CZ)[0]; 

vaxa[X]= FUNC+tty+ fad+tty2; 
  }


else if(FUNC=="zw"||FUNC=="cuberoot"||FUNC=="poweren"||FUNC=="raisePwE"||FUNC=="arcsine"||FUNC=="arcosine"||FUNC=="arctan") { 
 fada= bt[X].split(CZ)[1]; 

vaxa[X]= FUNC+tty+ fada+tty2; 
}
else { fad= bt[X].split(CZ)[0];   fada= bt[X].split(CZ)[1];   vaxa[X]= FUNC+tty+fad+"H"+ fada+tty2; }
} }
var comma=/\,/g;
vaxa=vaxa.toString(); 
vaxa= vaxa.replace(comma,"");
if(sd.match(d)!=null||sd.match(d)!=undefined) {
	vaxa=vaxa.toString();  dd=sd.match(d);
	 
for(i=0;i<=dd.length-1;i++) {
	vaxa=vaxa.replace("!" , ","); } }
	else {}
var nad=/H/g;
vaxa=vaxa.replace(nad, ",");
UMASS=vaxa;
UMASS= UMASS.toString();
decideToDoSpecialFunc();}

catch(e) { typeError(e); } 
 
return UMASS;  } 

function decideToDoSpecialFunc() { 


if(UMASS.match("B")!=null&&UMASS.match("B")=="B") { doSpecialFunc("B", "combination"); }
else if(UMASS.match("U")!=null&&UMASS.match("U")=="U") { doSpecialFunc("U", "permutation"); }
else if(UMASS.match("Q")!=null&&UMASS.match("Q")=="Q") { doSpecialFunc("Q", "power"); }
else if(UMASS.match("Z")!=null&&UMASS.match("Z")=="Z") { doSpecialFunc("Z", "square"); }
else if(UMASS.match("V")!=null&&UMASS.match("V")=="V") { doSpecialFunc("V", "inverse"); }
else if(UMASS.match("X")!=null&&UMASS.match("X")=="X") { doSpecialFunc("X", "zw"); }
else if(UMASS.match("!")!=null&&UMASS.match("!")=="!") { doSpecialFunc("!", "factorial"); }
else if(UMASS.match("F")!=null&&UMASS.match("F")=="F") { doSpecialFunc("F", "cuberoot"); }
else if(UMASS.match("x")!=null&&UMASS.match("x")=="x") { doSpecialFunc("x", "cube"); }
else if(UMASS.match("{")!=null&&UMASS.match("{")=="{") { doSpecialFunc("{", "nthRoot"); }
else if(UMASS.match("O")!=null&&UMASS.match("O")=="O") { doSpecialFunc("O", "poweren"); }
else if(UMASS.match("N")!=null&&UMASS.match("N")=="N") { doSpecialFunc("N", "raisePwE"); }
else if(UMASS.match("I")!=null&&UMASS.match("I")=="I") { doSpecialFunc("I", "arcsine"); }
else if(UMASS.match("]")!=null&&UMASS.match("]")=="]") { doSpecialFunc("]", "arcosine"); }
else if(UMASS.match("T")!=null&&UMASS.match("T")=="T") { doSpecialFunc("T", "arctan"); }

else {  


   try {UMASS=UMASS.toString().replace(d, ""); ans=evalAns(UMASS);
 } 
catch(e) {  typeError(e); } 
 

 if(ans!=undefined&&ans!=null) {if(!isNaN(ans)){ A=ans*1; } 
document.getElementById("ansdivS1").innerHTML="<p style= 'text-align:right;'>"+''+ans+''+"</p>"; } 
else if(ans==null||ans.toString=="NaN") { 
typeError("Math Error")}

else {  } 
} 
} 


var special=0;
var special2=0;



var Uinput=
document.getElementById("inp").value;
var U2input= document.getElementById("inp1").value;

function typeToTest1() { UMA=Uinput;
var X= /X/g;
var q= /q/g;
var M=/M/g;
var l=/l/g;
var S=/S/g;
var C= /C/g;
var t= /t/g;
var D=/D/g;
var star= /\*/g;
var Aa=/A/g;
var B=/B/g;
var U=/U/g;
var V=/V/g;
UMA= UMA.replace(X, 'a');
UMA= UMA.replace(q, 'a');
UMA= UMA.replace(M, 'Log(');
UMA= UMA.replace(l, 'ln(');
UMA= UMA.replace( S, 'sin(');
UMA= UMA.replace(C, 'cos(');
UMA= UMA.replace(t, 'tan(');
UMA= UMA.replace(D,  'd');
UMA= UMA.replace(star, 'b');
UMA= UMA.replace(Aa, 'Ans');
UMA= UMA.replace(B, "b");
UMA= UMA.replace(U, "c");
UMA= UMA.replace(V, "xx");

document.getElementById("test1").value=UMA; }

function reType() { 
 var UM=Uinput;
var X= /X/g;
var q= /q/g;
var M=/M/g;
var l=/l/g;
var S=/S/g;
var C= /C/g;
var t= /t/g;
var D=/D/g;
var star= /\*/g;
var Aa=/A/g;
var B=/B/g;
var U=/U/g;
var V=/V/g;
var F=/F/g;
var x=/x/g;
var c1=/\{/g;
var c2=/O/g;
var inb=/\N/g;
var c3=/\I/g;
var c4=/\]/g;
var c5=/\T/g;
var c6=/\@/g;
var c8=/y/g;
UM= UM.replace(X, '\&radic;');
UM= UM.replace(q, '<sup><small>2</small></sup>');
UM= UM.replace(M, 'Log(');
UM= UM.replace(l, 'ln(');
UM= UM.replace( S, 'sin(');
UM= UM.replace(C, 'cos(');
UM= UM.replace(t, 'tan(');
UM= UM.replace(D,  '\&divide;');
UM= UM.replace(star, '&times;');
UM= UM.replace(Aa, 'Ans');
UM= UM.replace(V, "<small><small><sup>-1</sup></small></small>");
UM= UM.replace(F, '<small><small><sup>3</sup></small>&radic;</small>');
UM= UM.replace(x, '<small><small><sup>3</sup></small></small>');
UM= UM.replace(c1, '<small><small><sup>x</sup></small>&radic;</small>');
UM= UM.replace(c2, '<small><small>10</small></small>');
UM= UM.replace(inb, '<small>e</small>');
UM= UM.replace(c3, '<small>sin<small><sup>-1</sup></small></small>');
UM= UM.replace(c4, '<small>cos<small><sup>-1</sup></small></small>');
UM= UM.replace(c5, '<small>tan<small><sup>-1</sup></small></small>');
UM= UM.replace(c6, '<small>&micro;</small>');
UM= UM.replace(c8, '<small>&pi;</small>');
UM= UM.replace(B, "<b style='color:orange;'><b>C</b></b>");
UM= UM.replace(U, "<b style='color:orange;'><b>P</b></b>");

document.getElementById("ansdivS2").innerHTML= "<p style= 'text-align:left;'>"+UM+"</p>"; 

  typeToTest1();    
  }  


function ACy() { document.getElementById("inp").value="";  document.getElementById("inp1").value=""; Uinput="";U2input=""; document.getElementById("test1").value="";

  reType(); makeShiftZ(); }

function typeDigita(a,b) {  
if(special!=0&&a!='+'&&a!='-'&&a!='/'&&a!='*'&&a!='q'&&a!='^')  {ACy(); }  
  if(special!=0&&special2!=0) { if(a=='+'||a=='-'||b=='/'||a=='*'||a=='q'||a=='^'||a=='x'||a=='V') {typeDigit('A', 'A'); } special2=0; }
 if(a=="("||b=="("||a=="N"||a=="O"||a=="^"||eqnSwitch==1) { hash=0; } 
if(a==")"||b==")") { hash=1; } 
if(b=="+"||b=="-"||b=="/"||b=="*") { if(hash!=0) {
U2input=document.getElementById("inp1").value+="?"+b+"?"; }  else { U2input=document.getElementById("inp1").value+=b; hash=1;  } } 
else { U2input=document.getElementById("inp1").value+=b; } 
  
Uinput=document.getElementById("inp").value+=a; 



reType(); special=0; } 

function typeDigitb(a, b) { var caf= document.getElementById("test1").value; var vaha= caf.length+1;  if(vaha<=30){typeDigita(a, b); }  else { } }  

function typeDigit(a, b, c, d) { if(eqnSwitch==0){
if(shift==0) { typeDigitb(a, b);  } 
else if(shift==1) { typeDigitb(c, d);  shift=0; makeShiftZ(); }
else { alert("Sorry. There was an internal script error"); }  } 
else if(eqnSwitch==1&&formularSel==1&&typSw==1){typ2(a); }
else { }
}
function ACx() { document.getElementById("ansdivS1").innerHTML=""; makeShiftZ(); }



function AC() { ACx(); ACy(); makeShiftZ();  statDataCtrl=0; statDataCount=0; activEqn=0; eqnSwitch=0; document.getElementById("EqnBtn").style.backgroundColor="#999999"; }
var cavForDel=1;
function DEL() {special=0; 
cavForDel=1; 
if(U2input.charAt(U2input.toString().length-1)=="?"){cavForDel=3; }
var DELn= Uinput.substr(0, Uinput.length-1);  
var DELn2= U2input.substr(0, U2input.length-cavForDel);
Uinput= DELn;
U2input=DELn2; reType(); document.getElementById("inp").value=DELn; document.getElementById("inp1").value=DELn2;  makeShiftZ();  }

function typeError(a) {  document.getElementById("ansdivS2").innerHTML ="<p style= 'text-align:center; color:red;'>"+a+"</p>"; }


function evalAns(ANS){

	
	var answerM= eval(ANS);
	return answerM; }
	
var UM=0;
function typeAnsa() {

UM=U2input;
var z= /z/g;
var q= /q/g;
var M=/M/g;
var l=/l/g;
var S=/S/g;
var C= /C/g;
var t= /t/g;
var D=/D/g;
var pj=/\^/g;

UM= UM.replace(z, 'zw(');
UM= UM.replace(q, 'Z');
UM= UM.replace(M, 'Log(');
UM= UM.replace(l, 'ln(');
UM= UM.replace( S, 'sine(');
UM= UM.replace(C, 'cosine(');
UM= UM.replace(t, 'tangent(');
UM= UM.replace(D,  '/');
UM= UM.replace(pj, "Q");

UMASS=UM;


decideToDoSpecialFunc();  
  
} 
 function typeAns() {if(activEqn==0&&shift==0){ special=1; special2=1;  typeAnsa(); makeShiftZ();} 
else if(shift==1||statDataCtrl==1) {statDataCtrl=1;  typeStatDataAns(); }
else{ showFormular();}  }
 
function makeShiftY() { shift=1; document.getElementById("shift").style.backgroundColor="orange";  }

function makeShiftZ() { shift=0; document.getElementById("shift").style.backgroundColor="#999999";  }

function makeShift() { if(shift==0) { makeShiftY();  } else if(shift==1) {makeShiftZ(); }
else  { alert("Sorry. There was an internal script error"); }}



var t;

function typT(a) { document.getElementById("ansdivS1").innerHTML="<p style='text-align:right' >"+a+"</p>"; }
var EQN; var PARAMS;
var PARAMSDATA;
var PARAMSDATACOUNT=0; 
var solver;
var eqnSwitch=0;
var activEqn=0;
var eqnSel=1;
var formularSel=0;
var equations=["Quadratic","Simultaneous", "Refractive index","Capacitive reactance","Inductive reactance", "Electric force", "Gravitational force","focal length", "Kinetic energy 1","Kinetic energy 2", "Resistivity"]; 
var ansEQ=[];
var typSw=0;

function requestParam() {if(PARAMSDATACOUNT<=PARAMS){ ansEQ=ansEQ.concat(document.getElementById("inp1").value); var data=(PARAMSDATA[PARAMSDATACOUNT]+"?  "); typ(data); PARAMSDATACOUNT+=1; bava=0;  }
if(PARAMSDATACOUNT>=PARAMS+1){ 

ansEQ=ansEQ.filter(function(n) { return n;});
 typT(eval(solver+"("+ansEQ+")")); clearAns(); activEqn=0; typ("");eqnSwitch=0; document.getElementById("EqnBtn").style.backgroundColor="#999999"; }  }

function showFormular() {if(activEqn==1) {
if(formularSel==0) { whichEquation(document.getElementById("inp").value); typ(EQN);    PARAMSDATACOUNT=0; } if(formularSel==1) { requestParam(); typSw=1; } 
formularSel=1;}
}
function EqnBtnClk() {
if(eqnSwitch==0) { eqnSwitch=1; }
else if(eqnSwitch==1){ eqnSwitch=0; activEqn=0; typ("");  }
else {} 
if(eqnSwitch==1) {
document.getElementById("EqnBtn").style.backgroundColor="orange";  eqnSel=0; formularSel=0; bava=0; document.getElementById("inp").value=""; 
document.getElementById("inp1").value=""; 
activEqn=1; typ(equations[0]); clearAns(); 
} 
else{ document.getElementById("EqnBtn").style.backgroundColor="#999999";    }

typSw=0; }

function clearAns() {ansEQ=[]; document.getElementById("inp1").value=""; typSw=0;  }


function showNextEqn() {if(activEqn==1) { 

if(eqnSel<equations.length-1){eqnSel+=1;
} 

clearAns(); formularSel=0; bava=0;  typ(equations[eqnSel]); 

 }
typSw=0;}

function showPrevEqn() {if(activEqn==1) { 

if(eqnSel>=1){eqnSel-=1;
} 

clearAns(); formularSel=0; bava=0;  typ(equations[eqnSel]); 

 }
typSw=0;}


function typ(a) { document.getElementById("inp").value=a; document.getElementById("ansdivS2").innerHTML="<p style='text-align:left'>"+a+"</p>"; }
var bav=""; 
var bava=0; 
function typ2(a) {if(activEqn==1) { if(bava==0){document.getElementById("inp1").value="";  bava=1; }bav=document.getElementById("inp1").value+=a; document.getElementById("ansdivS2").innerHTML="<p style='text-align:left' >"+bav+"</p>"; document.getElementById("inp1").value=bav; }}


function whichEquation(FUNC) { 
if(FUNC=="Quadratic") {EQN="aX<small><sup>2</sup></small>+bX+c=0"; PARAMS=3; PARAMSDATA=["a","b","c"]; solver="solveQuadratic"; }

else if(FUNC=="Simultaneous") {EQN="aX+bY+c=0"; PARAMS=6; PARAMSDATA=["a1", "b1","c1","a2","b2","c2"]; solver="solveSimultaneous"; }

else if(FUNC=="Refractive index") { EQN="<sup><sup><sup><small>sin(A+dm)</small></sup>/<sub>2</sub></sup></sup>/<sub><small>sinA<sub>/2</sub></small></sub>"; PARAMS=2; PARAMSDATA=["A","dm"]; solver="solveRefractiveIndex"}
else if(FUNC=="Capacitive reactance") {EQN="<sup>1</sup>/<sub>2&pi;fc</sub>"; PARAMS=2; PARAMSDATA=["f", "c"]; solver="solveCreactance"; }
else if(FUNC=="Inductive reactance") {EQN="2&pi;fl"; PARAMS=2; PARAMSDATA=["f","l"]; solver="solveLreactance"; }
else if(FUNC=="Electric force") {EQN="<sup>q1q2</sup>/<sub>4&pi;e<sub>o</sub>r<sup>2</sup></sub>"; PARAMS=3; PARAMSDATA=["q1","q2","r"]; solver="solveEforce"; }
else if(FUNC=="Gravitational force") {EQN="<sup>GmM</sup>/<sub>r<sup>2</sup></sub>"; PARAMS=3; PARAMSDATA=["m","M","r"]; solver="solveGforce"; }
else if(FUNC=="focal length") {EQN="<sup>1</sup><small>/</small><sub>f </sub>=<sup>1</sup><small>/</small><sub>u</sub>+<sup> 1</sup><small>/</small><sub>v</sub>"; PARAMS=2; PARAMSDATA=["u","v"]; solver="solveFocalLength"; }
else if(FUNC=="Kinetic energy 1") {EQN="<sup>1</sup><small>/</small><sub>2</sub>mv<sup>2</sup>"; PARAMS=2; PARAMSDATA=["m","v"]; solver="solveKE1"; }
else if(FUNC=="Kinetic energy 2") {EQN="<sup>1</sup><small>/</small><sub>2</sub>mw<sup>2</sup>r<sup>2</sup>"; PARAMS=3; PARAMSDATA=["m","w","r"]; solver="solveKE2"; }
else if(FUNC=="Resistivity") {EQN="<sup>RA</sup><small>/</small><sub>L</sub>"; PARAMS=3; PARAMSDATA=["R","A","L"]; solver="solveResistivity"; }
else{ }
}





function solveQuadratic(a, b, c) { 
a=a*1; b=b*1; c=c*1;
var bM= -1*b;
var bS=b*b; 
var ac4=4*a*c; 

var x1= (bM+Math.sqrt(bS-ac4))/(2*a); 
var x2= (bM-Math.sqrt(bS-ac4))/(2*a);

return "x1= "+x1.toFixed(4)+", x2= "+x2.toFixed(4); 
}

function solveRefractiveIndex(A, dm) { 

var AplusDdiv2=(A+dm)/2;
var Adiv2=A/2;

var ADmDeg=AplusDdiv2*(Math.PI/180);
var ADeg=Adiv2*(Math.PI/180);

return "R= "+(Math.sin(ADmDeg)/Math.sin(ADeg)).toFixed(4); 
}
function solveSimultaneous(a1, b1, c1, a2, b2, c2) { c1=-1*c1; c2=-1*c2;  var y= ((a2*c1)-(a1*c2))/((a2*b1)-(a1*b2)); 
var x=(c1-( b1*((a2*c1)-(a1*c2))/((a2*b1)-(a1*b2))))/a1

return "x= "+x.toFixed(4)+" y= "+y.toFixed(4); 
}
function solveCreactance(f, c) { 
var imp= 2*Math.PI*f*c;
return "X<small><sub>C</sub></small> = "+ ((1/imp).toExponential(6)).toString().replace("e","&times;10<sup>").replace("+",""); }
function solveLreactance(f, c) { var imp=2*Math.PI*f*c;
return  "X<small><sub>L</sub></small> = "+ (imp.toExponential(6)).toString().replace("e","&times;10<sup>").replace("+",""); } 
function solveEforce(q1,q2,r) { 
var force= (9*Math.pow(10, 9)*q1*q2)/(r*r); 
return "F<sub>E</sub>= "+ (force.toExponential(6)).toString().replace("e","&times;10<sup>").replace("+","")+"</sup>N"; }
function solveGforce(m1, m2, r) { var force= (6.667*Math.pow(10, -11)*m1*m2)/(r*r); 
return "F<sub>G</sub>= "+(force.toExponential(6)).toString().replace("e","&times;10<sup>").replace("+","")+"</sup>N"; }
function solveFocalLength(u, v) { var f=(u*v)/(u+v); return  " f = "+f.toFixed(4); }
function solveKE1(m, v) { var KE=0.5*m*v*v; return "KE = "+(KE.toExponential(6)).toString().replace("e","&times;10<sup>").replace("+",""); } 
function solveKE2(m, w, r) { var KE=0.5*m*w*w*r*r; return "KE = "+(KE.toExponential(6)).toString().replace("e","&times;10<sup>").replace("+",""); } 
function solveResistivity(R, A, L) { var res= (R*A)/L;  return res; }

var Xmplus=[];
var Ymplus=[];
var XmplusQ=[];
var YmplusQ=[];
var sData;

function mPlus() { if(shift==1){clearStatData(); makeShiftZ(); AC(); statDataCtrl=0;  } else{ try{statDataCtrl=1;  sData =document.getElementById("inp1").value; 
if(sData!=null&&sData!=undefined&&sData!=""&&sData.length>0) {

sData=sData.toString().replace(d,"");

sData=sData.split(","); 

if(sData[0]*1!=null&&!isNaN(sData[0]*1)) { 
Xmplus=Xmplus.concat(sData[0]); 

if(sData[1]*1!=null&&!isNaN(sData[1]*1)) {

Ymplus=Ymplus.concat(sData[1]); }
else{ Ymplus=Ymplus.concat(0);  } 
} 
AC();
  solveStats(); 
typT(""); typ(""); sData=""; } 

} 
catch(e) { typeError(e); } }}

var statDataN; var statDataBeta0; 
var statDataGN; var statDataBeta1;
var statDataC; var statDataMedian;
var statDataGmean; var statDataMode;
var statDataHmean; var statDataAmean; 
var statDataRange; var statDataQ1; 
var statDataQ2; var statDataQ3; var statDataQ4;
var statDataD1; var statDataD2; var statDataD3; var statDataD4; var statDataD5; var statDataD6; var statDataD7; var statDataD8; var statDataD9;
var statDataD10; 
var statDataP10; var statDataP20; var statDataP30; var statDataP40; var statDataP50; var statDataP60; var statDataP70; var statDataP80; var statDataP90;
var statDataP100; var statDataCorrelation; 
var statDataSD; var statDataVariance; var statDataCV; var statDataXbar; var statDataYbar; 
var sumFX;
var sumF;
var sumX;
var sumYsq;
var sumXsq;

function solveStats() {
if(Xmplus.length>Ymplus.length) {statDataN=Xmplus.length; }
else{statDataN=Ymplus.length;} 
XmplusQ[statDataN-1]=sData[0];
YmplusQ[statDataN-1]=sData[1];

statDataGN=Math.round(1+(3.32*((Math.log(statDataN))/2.302585))); 
var DataR1;  var DataR2; 
if(statDataN>1) {DataR1=Xmplus.sort()[0]; 
DataR2=Xmplus.sort()[Xmplus.length-1]; }
else { DataR2=Xmplus[0]; DataR1=0}

statDataRange=DataR2-DataR1;
 statDataC=Math.round(statDataRange/statDataGN);
var fComma=/,/g;
sumFX=0; sumF=eval(YmplusQ.toString().replace(fComma,"+"));
sumX=eval(XmplusQ.toString().replace(fComma,"+")); 
for(i=0;i<=statDataN-1;i++){sumFX+=(XmplusQ[i]*YmplusQ[i]); }
statDataXbar=sumX/statDataN; statDataYbar=sumF/statDataN;
var Gmean=eval(XmplusQ.toString().replace(fComma,"*"));

statDataHmean=statDataN/(sumX/Gmean);
statDataGmean=Math.pow(eval(Gmean), 1/statDataN);

 sumXsq=XmplusQ.map(function(n){ return n*n});
sumYsq=YmplusQ.map(function(n){return n*n});
sumXsq=eval(sumXsq.toString().replace(fComma,"+")); 
sumYsq=eval(sumYsq.toString().replace(fComma,"+"));

statDataAmean=sumFX/sumF; 
statDataCorrelation=((statDataN*sumFX)-(sumX*sumF))/Math.sqrt(((statDataN*sumXsq)-(sumX*sumX))*((statDataN*sumYsq)-(sumF*sumF)));
statDataBeta1=((statDataN*sumFX)-(sumX*sumF))/((statDataN*sumXsq)-(sumX*sumX)); 
statDataBeta0=statDataYbar-(statDataBeta1*statDataXbar); 

}
var dataS_1=["sumFX","sumF","sumX","sumXsq","sumYsq","statDataAmean","statDataGmean","statDataHmean", "statDataGN","statDataN", "statDataRange","statDataCorrelation", "statDataBeta0", "statDataBeta1"]; 

var statDataCount=0; 
var statDataCtrl=1;

function clearStatData() { statDataN=""; statDataBeta0="";  statDataGN=""; statDataBeta1=""; statDataC=""; statDataMedian=""; statDataGmean=""; statDataMode="";  statDataHmean=""; statDataAmean="";  statDataRange="";  statDataQ1=""; statDataQ2=""; statDataQ3=""; statDataQ4=""; statDataD1=""; statDataD2=""; statDataD3=""; statDataD4="";  statDataD5=""; statDataD6=""; statDataD7=""; statDataD8=""; statDataD9="";statDataD10=""; statDataP10="";statDataP20=""; statDataP30="";statDataP40="";statDataP50=""; statDataP60=""; statDataP70=""; statDataP80=""; statDataP90=""; statDataP100=""; statDataCorrelation=""; statDataSD=""; statDataVariance=""; statDataCV=""; statDataXbar="";statDataYbar=""; Ymplus=[]; Xmplus=[]; sData=""; YmplusQ=[]; XmplusQ=[];sumFX=""; sumX="";sumYsq=""; sumXsq=""; statDataBeta0=""; statDataBeta1=""; }

function typeStatDataAns() { 

if(statDataCtrl==1) {
if(statDataCount>=dataS_1.length) {statDataCtrl=0; }
typ(dataS_1[0]);
typT(eval(dataS_1[0]));
typT(eval(dataS_1[statDataCount])); 
typ(dataS_1[statDataCount]);   
if(statDataCount<dataS_1.length-1) { statDataCount+=1; }
else { statDataCount=0; } }

else {}
}

function typeWithButton(event) {  var b= event.which || event.keyCode;
 switch(b) { 
	 case 8: DEL();
 break;
     case 13: typeAns();
	 break;
       case 32: DEL();
       break;
       case 64: AC(); 
       break;
	 case 33:  typeDigit("!", "!", "","");
	 break;
	 case 40: typeDigit("(","(","","");
	 break;
	 case 41: typeDigit(")",")","","");
	 break;
	 case 42: typeDigit("*","*","U","U");
	 break;
	 case 43: typeDigit("+","+","","");
	 break;
        case 44: typeDigit(",",",","","");
        break;
	 case 45: typeDigit("-","-","","");
	 break;
	 case 46: typeDigit(".",".",":",":");
	 break;
	 case 47: typeDigit("/","/","B","B");
	 break; 
	 case 48: typeDigit("0","0","","");
       break;
	 case 49: typeDigit("1", "1","f","f");
       break;
       case 50: typeDigit("2","2","p","p");
       break;
       case 51: typeDigit("3", "3","n","n");
       break;
       case 52: typeDigit("4","4","@","@");
       break;
       case 53: typeDigit("5", "5","m","m");
       break;
       case 54: typeDigit("6","6","k","k");
       break;
       case 55: typeDigit("7","7","","");
       break;
       case 56: typeDigit("8","8","","");
       break;
 case 57: typeDigit("9","9","","");
 break; 
 case 61: typeAns();
 break;
 case 65: typeDigit("A", "A","","");
 break;
  case 67: typeDigit("B","B","","");
 break;
  case 69: typeDigit("E","E","","");
 break;
 case 77: typeDigit("M","M","","");
break;
  case 80: typeDigit("U","U","","");
 break;
 case 94: typeDigit("^","^","","");
 break;
 case 97: typeDigit("A","A","","");
 break;
  case 101: typeDigit("e","e","","");
 break;
  case 107: typeDigit("k","k","","");
 break;
 case 109: typeDigit("m","m","","");
 break;
 case 110: typeDigit("n","n","","");
 break;
 case 112: typeDigit("p","p","","");
 break;

  default:;
   }  
 event.preventDefault();
 }
 window.addEventListener('keypress', typeWithButton);

