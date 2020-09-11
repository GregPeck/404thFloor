<!doctype html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<title>404th floor</title>
		<script src="404.js"></script>
<style type="text/css">
html, body {
margin:0;
font-family:Arial;
font-weight: bold;
overflow:hidden;
}
#c {
	width:100%;
}
#a>div { position:absolute; }
#a {
width:1008px;
margin:0 auto;
position:relative;
}
#floor {
top:10px;
left:10px;
display:none;
}
#sc {
top: 10px;
right: 10px;
display:none;
}
#o {
min-width: 100px;
max-width: 150px;
border: 3px solid #000;
background-color: #FFFFFFEA;
font-style: italic;
top: 20%;
box-shadow: 5px 5px 5px #0000003F;
padding: 36px 40px;
margin: 1em auto 80px;
text-align: center;
border-radius: 220px / 120px;
display:none;
transform-origin: left top;
}
#o::before, #o::after {
content: "";
border: 3px solid #000;
background-color: #FFFFFFEA;
border-radius: 30px;
position:absolute;
}
#o::before {
bottom: -25px;
left: 20px;
width: 24px;
height: 24px;
}
#o::after {
bottom: -39px;
left: 4px;
width: 15px;
height: 15px;
}
#ti {
bottom: 10px;
text-align: center;
width: 126px;
background-color: #AAA;
border: 2px solid #FFF;
display: inline-block;
left: calc(50% - 64px);
display:none;
}
#f {
width:100%;
height:100%;
background-color:#FFFFFFBB;
text-align: center;
top:0;
line-height:2em;
display:none;
align-items: center;
justify-content: center;
flex-direction: column;
}
#h {
	width: 100%;
	background-color: #FFFFFF90;
	height: 100%;
	align-items: center;
	justify-content: center;
	display: flex;
	font-size: 39px;
	animation: b 2s ease-in-out infinite;
}
@keyframes b {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
</head>
<body onload="load()">
<div id="a">
<div id="h">Press any key to start</div>
<canvas id="c"></canvas>
<div id="floor">FLOOR : <span id="floor2"></span></div>
<div id="sc"></div>
<div id="ti"></div>
<div id="o"></div>
<div id="f"></div>
</div>
</body>
</html>