 function inverse(z) {  return Math.pow(z, -1); } 
function factorial(g) { if(g>1000) { return "<p style='color:red'><small><sup>This system wasn't programmed to calculate factorial above 1000</sup></small></p>"; }  else { 
var b= 1;
for(h=1; h<=g; h++) { b=h*b; }
return b; } }

function combination(n, x) { 
if(n>=x) {
var a= factorial(n);
var b=factorial(x); var c= factorial(n-x);
var e= c*b;
return a/e; } else {return null; }  } 

function permutation(n, x) {  if(n>=x) { var a= factorial(n);
var b= factorial(n-x);

return a/b;} else {return null; }  } 

function cube(y) { return Math.pow(y, 3); }
function zw(b) { return Math.pow(b, 0.5); }
function square(a) { return Math.pow(a, 2); }
function power(a, b) { return Math.pow(a, b); }
function Log(a) {var b=2/Math.log(100);  return (Math.log(a)*b); }
function ln(a) {  
return Math.log(a); }

function sine(a) {var b=(Math.PI/180)*a;  return Math.sin(b); } 
function cosine(a) { var b=(Math.PI/180)*a; return Math.cos(b); }

function tangent(a) { var b= (Math.PI/180)*a;
 if(a==90) { return 1.6331; } 
else if(a==-90) { return -1.6331; } 
else if(a==270) { return 5.4437; } 
else if(a==-270) { return -5.4437; } 
else {
 return Math.tan(b); } }

function cuberoot(b) { return (Math.pow(b, 1/3))+0.0000000000001; } 
function nthRoot(a, b) { return (Math.pow(b, 1/a)); }

function poweren(v) { return Math.pow(10,v); }
function raisePwE(h) { return Math.pow(Math.E, h); }


function arcosine(c) { 
if(c>1||c<-1) { return null; }
 else {var b= Math.acos(c); 
return ((b*180)/Math.PI); }}

function arcsine(c) { 
if(c>1||c<-1) { return null; } 
else {var b= Math.asin(c); 
return ((b*180)/Math.PI); } }

function arctan(c) { 

var b= Math.atan(c); 
return ((b*180)/Math.PI); }

function ran(j)  {var b= Math.random()*j; return b; }

function exponent(k,f) { return k*(Math.pow(10,f)); }
function micro(s) { return s*(Math.pow(10,-6)); }
function milli(m) { return m*(Math.pow(10,-3)); }
function kilo(w) { return w*1000; }
function filo(p) { return p*(Math.pow(10,-15)); }
function pico(i) { return i*(Math.pow(10,-12)); }
function nano(l) { return l*(Math.pow(10,-9)); }
function pi(z) { return z*Math.PI; }






