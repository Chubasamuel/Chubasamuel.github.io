
## Events List
<body markdown="0">

<style>

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
		
<div id="content-main"></div>
	
	<script>
		var ev=[{"topic":"topic one","content":"content one","dt":"91881-7"},{"topic":"topic teo","content":"content 2","dt":"dt 2"},{"topic":"topic 3","content":"content 3","dt":"00:33"},{"topic":"topic 4","content":"content kd","dt":"099-87"}];

for(i in ev){document.getElementById("content-main").innerHTML+="<center><div class=\"mcontent\"><span class=\"content_topic\">"+ev[i]["topic"]+"</span><span class=\"content_content\">"+ev[i]["content"]+"</span><span class=\"content_date-time\">"+ev[i]["dt"]+"</span></div></center>";}
	</script>
</body>

