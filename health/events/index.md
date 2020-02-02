
## Events List
<body markdown="0">

<style markdown="0">

.mcontent{ 
	/*position:absolute;
	left:0px;
	right:0px;*/
	width:90%;
	margin:5px;
	border:1px solid black;
	border-radius:12px;
}
.mcontent span{ display:block;}
.mcontent .content_topic{
font-weight:bold;
color:;
font-size:1.5em;
}
.mcontent .content_date-time{
font-size:0.6em;
}

</style>
		
<div id="content-main" markdown="0"></div>
	
	<script markdown="0">
	var xhr= new XMLHttpRequest();              xhr.onreadystatechange=function(){          if(xhr.readyState==4){                              if(xhr.status=200){   
writeCont(xhr.responseText);
	}                       }                                           }
xhr.open("get","https://raw.githubusercontent.com/Chubasamuel/Chubasamuel.github.io/master/health/events/list.json",true);
xhr.send();


function writeCont(eiv){
var ev=JSON.stringify(eiv);
for(i in ev){document.getElementById("content-main").innerHTML+="<center><div class=\"mcontent\"><span class=\"content_topic\">"+ev[i]["topic"]+"</span><span class=\"content_content\">"+ev[i]["content"]+"</span><span class=\"content_date-time\">"+ev[i]["dt"]+"</span></div></center>"; }}
	</script>
</body>

