//
// JsFXR
//
function sp(){this._s=function(e){for(var t=0;t<24;t++)this[String.fromCharCode(97+t)]=e[t]||0;this.c<.01&&(this.c=.01);var r=this.b+this.c+this.e;if(r<.18){var s=.18/r;this.b*=s,this.c*=s,this.e*=s}}}function ss(){var e,t,r,s,a,n,i,c,h,f,o,u;this._p=new sp,this.reset=function(){var e=this._p;s=100/(e.f*e.f+.001),a=100/(e.g*e.g+.001),n=1-e.h*e.h*e.h*.01,i=-e.i*e.i*e.i*1e-6,e.a||(o=.5-e.n/2,u=5e-5*-e.o),c=1+e.l*e.l*(e.l>0?-.9:10),h=0,f=1==e.m?0:(1-e.m)*(1-e.m)*2e4+32},this.tr=function(){this.reset();var s=this._p;return e=s.b*s.b*1e5,t=s.c*s.c*1e5,r=s.e*s.e*1e5+12,3*((e+t+r)/3|0)},this._s=function(v,b){var p=this._p,g=1!=p.s||p.v,k=p.v*p.v*.1,w=1+3e-4*p.w,_=p.s*p.s*p.s*.1,l=1+1e-4*p.t,m=1!=p.s,d=p.x*p.x,y=p.g,q=p.q||p.r,C=p.r*p.r*p.r*.2,M=p.q*p.q*(p.q<0?-1020:1020),x=p.p?32+((1-p.p)*(1-p.p)*2e4|0):0,A=p.d,B=p.j/2,S=p.k*p.k*.01,j=p.a,D=e,R=1/e,T=1/t,z=1/r,E=5/(1+p.u*p.u*20)*(.01+_);E>.8&&(E=.8),E=1-E;for(var F,G,H,I,J,K,L=!1,N=0,O=0,P=0,Q=0,U=0,V=0,W=0,X=0,Y=0,Z=0,$=new Array(1024),ee=new Array(32),te=$.length;te--;)$[te]=0;for(te=ee.length;te--;)ee[te]=2*Math.random()-1;for(te=0;te<b;te++){if(L)return te;if(x&&++Y>=x&&(Y=0,this.reset()),f&&++h>=f&&(f=0,s*=c),(s*=n+=i)>a&&(s=a,y>0&&(L=!0)),G=s,B>0&&(Z+=S,G*=1+Math.sin(Z)*B),(G|=0)<8&&(G=8),j||((o+=u)<0?o=0:o>.5&&(o=.5)),++O>D)switch(O=0,++N){case 1:D=t;break;case 2:D=r}switch(N){case 0:P=O*R;break;case 1:P=1+2*(1-O*T)*A;break;case 2:P=1-O*z;break;case 3:P=0,L=!0}q&&((H=0|(M+=C))<0?H=-H:H>1023&&(H=1023)),g&&w&&((k*=w)<1e-5?k=1e-5:k>.1&&(k=.1)),K=0;for(var re=8;re--;){if(++W>=G&&(W%=G,3==j))for(var se=ee.length;se--;)ee[se]=2*Math.random()-1;switch(j){case 0:J=W/G<o?.5:-.5;break;case 1:J=1-W/G*2;break;case 2:J=.225*(((J=1.27323954*(I=6.28318531*((I=W/G)>.5?I-1:I))+.405284735*I*I*(I<0?1:-1))<0?-1:1)*J*J-J)+J;break;case 3:J=ee[Math.abs(32*W/G|0)]}g&&(F=V,(_*=l)<0?_=0:_>.1&&(_=.1),m?(U+=(J-V)*_,U*=E):(V=J,U=0),Q+=(V+=U)-F,J=Q*=1-k),q&&($[X%1024]=J,J+=$[(X-H+1024)%1024],X++),K+=J}K*=.125*P*d,v[te]=K>=1?1:K<=-1?-1:K}return b}}var ac,synth=new ss;sound=function(e){if(gameStarted){var t=function(e){ac=ac||new AudioContext,synth._p._s(e);var t=synth.tr(),r=ac.createBuffer(1,t+1,ac.sampleRate);return synth._s(r.getChannelData(0),t),r}(e),r=ac.createBufferSource();r.buffer=t,r.connect(ac.destination),r.start(ac.currentTime)}};


/**
 * Creates a pseudo-random value generator. The seed must be an integer.
 *
 * Uses an optimized version of the Park-Miller PRNG.
 * http://www.firstpr.com.au/dsp/rand31/
 */
function random(s) {
	this.s = s % 2147483647;
	this.n = function () {
		this.s = this.s * 16807 % 2147483647;
		return (this.s - 1) / 2147483646;
	};
}

var ctx, img, mountain = new Image();
var gameStarted = false;
var clouds = [], player;

var blink = [];
var images = [];
var score = 0;
keys = [];
deltaY = 0;
allowKeys = false;

go = true;
var explode = 0,gems = [],extraX,extraY,ds,frame=0;
var cloud = new Image();
cloud.src = "c.png";
var mountain = document.createElement("canvas");
mountain.width = 1008;
mountain.height = 480;


//
// Init auto move for start screen
//
var auto = {};
auto[20] = 39;
auto[80] = 39;
auto[140] = 39;
auto[150] = 39;
auto[520] = 39;
auto[540] = 39;
auto[560] = 37;
auto[610] = 37;
auto[611] = 39;
auto[612] = 39;
auto[850] = 39;
auto[955] = 38;
auto[975] = 38;
auto[990] = 39;

//
// init speech bubble for start screen
//
var speech = {};
speech[0] = " ";
speech[80] = "What's that?...";
speech[150] = "Oh!";
speech[250] = "I finally found the chest of the 404 gems!";
speech[520] = " ";
speech[610] = "Oh no!!!";
speech[700] = "I need to find all of them!";
speech[850] = " ";



//
// Init level
//
var level = "                     ";
level+="                     ";
level+="     B B BBB B B     ";
level+="     A A A A A A     ";
level+="     ABA A A ABA     ";
level+="       A A A   A     ";
level+="BBBC   A AAA   A TBBB";
level+="AAADC   MM   I  TUAAA";
level+="AAAADBBBBBBBBBBBUAAAA";
level+="AAAAAAAAAAAAAAAAAAAAA";
level+="AAAAAAAAAAAAAAAAAAAAA";
level+="AAAAAAAAAAAAAAAAAAAAA";
level+="AAAAAAAAAAAAAAAAAAAAA";
level+="AAAAAC         TAAAAA";
level+="AAAAADC       TUAAAAA";
level+="AAAAAADC     TUAAAAAA";
level+="AAAAAAADC   TUAAAAAAA";
level+="AAAAAAAADB BUAAAAAAAA";
level+="A                   A";
level+="A                   A";
level+="A         O         A";
level+="A         O         A";
level+="A         O         A";
level+="A         O         A";
level+="A                   A";
level+="A         J         A";
level+="A  BBBBBBBBBBBBBBBBBA";
level+="A                   A";
level+="A                   A";
level+="A B                 A";
level+="AJA                 A";
level+="AAA                 A";
level+="AAA                 A";
level+="A               A   A";
level+="A               A  XA";
level+="A      WWXWW    AAAAA";
level+="A      BBBBB    AAAAA";
level+="A             TBAAAAA";
level+="A            TUAAAAAA";
level+="A           TUAAAAAAA";
level+="A          TUAAAAAAAA";
level+="A         TUAAAAAAAAA";
level+="A        TUAAAAAAAAAA";
level+="ABBBBBC             A";
level+="AAAAAADC            A";
level+="AAAAAAADC           A";
level+="AAAAAAAADC          A";
level+="AAAAAAAAADC         A";
level+="AAAAAAAAAADC        A";
level+="AAAAAAAAAAADC       A";
level+="AAAAAAAAAAAADC      A";
level+="AAAAAAAAAAAAADC     A";
level+="AAAAAAAAAAAAAADB    A";
level+="A              A    A";
level+="A BB           A    A";
level+="A A B               A";
level+="A A A             JJA";
level+="A A A          BBBBBA";
level+="A AB                A";
level+="A                   A";
level+="A BBB               A";
level+="A A A               A";
level+="A AB  A N    N      A";
level+="A A A AW           BA";
level+="A A A A      N   N AA";
level+="A     A           XAA";
level+="A BBB A N    N     AA";
level+="A A A AW           AA";
level+="A ABA A      N   N AA";
level+="A A A A           XAA";
level+="A A A A N    N      A";
level+="A     AW            A";
level+="A A A A      N   N  A";
level+="A A A A           XAA";
level+="A ABA A N    N     AA";
level+="A A A AW           AA";
level+="A A A A          N AA";
level+="A                 XAA";
level+="A                   A";
level+="A      W            A";
level+="A      B            A";
level+="A   BBBBBBBBBBBBBBBBA";
level+="A                   A";
level+="A                   A";
level+="AJO                 A";
level+="ABO                 A";
level+="A O                 A";
level+="A O                 A";
level+="A O                 A";
level+="ANJ                 A";
level+="ANB                 A";
level+="AN                  A";
level+="AN                  A";
level+="AN                  A";
level+="AJM                 A";
level+="ABM                 A";
level+="A M                 A";
level+="A M                 A";
level+="ALM                 A";
level+="ALJ                 A";
level+="ALB       TB        A";
level+="AL       TUAMLMOLMNLA";
level+="AL      TUAAONLNMNLOA";
level+="AL     TUAAALONLOLMNA";
level+="AJ    TUAAAANLMOLMLOA";
level+="AB   TUAAAAAJJJJJJJJA";
level+="A   TUAAAAAABBBBBBBBA";
level+="A  TUAAAAAAA        A";
level+="A BUAAAAAAAA        A";
level+="A AAAAAAAAAA        A";
level+="A                   A";
level+="A                   A";
level+="A                LMNA";
level+="AJ               OMLA";
level+="ABBB             BBBA";
level+="AAAA             AAAA";
level+="A      L      L     A";
level+="A      B      B     A";
level+="A                   A";
level+="A                   A";
level+="A         LO        A";
level+="A        WLOX       A";
level+="A        ALOA       A";
level+="A         LO        A";
level+="A         LO        A";
level+="A         LO        A";
level+="A         LO        A";
level+="A         LO        A";
level+="A         JJ        A";
level+="A         BB        A";
level+="A       B    B      A";
level+="A                   A";
level+="A                   A";
level+="A   B           B   A";
level+="A                   A";
level+="A                   A";
level+="AB                 BA";
level+="A                   A";
level+="A                   A";
level+="A   B           B   A";
level+="A                   A";
level+="A                   A";
level+="ABBBBBBB     BBBBBBBA";
level+="A                   A";
level+="A                   A";
level+="A      BBBBBBB      A";
level+="A                   A";
level+="A                   A";
level+="A                   A";
level+="A                   A";
level+="AW                 XA";
level+="ABBBBBBB     BBBBBBBA";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A  A A AW   XA      A";
level+="A  A A AW   XA      A";
level+="A  AA  AW   XA      A";
level+="A  A A AW   XA      A";
level+="A  A A AW   XA      A";
level+="A      AW   XA      A";
level+="A  AAA AW   XA      A";
level+="A    A AW   XA      A";
level+="A    A AW   XA      A";
level+="A   AA AW   XA      A";
level+="A    A AW   XA      A";
level+="A  AAA AW   XA      A";
level+="A      AW   XA      A";
level+="A   A  AW   XA      A";
level+="A  AA  AW   XA      A";
level+="A   A  AW   XA      A";
level+="A   A  AW   XA      A";
level+="A  AAA AW   XA      A";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A  AAA AW   XA      A";
level+="A  A   AW   XA      A";
level+="A  AAA AW   XA      A";
level+="A    A AW   XA      A";
level+="A  AAA AW   XA      A";
level+="A      AW   XA      A";
level+="A  AAA AW   XA      A";
level+="A    A AW   XA      A";
level+="A    A AW   XA      A";
level+="A  A A AW   XA      A";
level+="A   AA AW   XA      A";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A      AW   XA      A";
level+="A      A     A      A";
level+="A      M            A";
level+="A      M  J         A";
level+="A   OO AAAAAAA      A";
level+="A OO  O             A";
level+="AO     OO           A";
level+="AO       O   OO     A";
level+="AO       O     O    A";
level+="AW        OO    O   A";
level+="A          O    O   A";
level+="A          X     O  A";
level+="A          A      O A";
level+="A                   A";
level+="A                  XA";
level+="A                   A";
level+="A  N B O B L B M B  A";
level+="A  N A O A L A M A  A";
level+="A  N A O A L A M A  A";
level+="A  N A O A L A M A  A";
level+="A  N A   A   A   A  A";
level+="A  J A J A J A J    A";
level+="AO BBBBBBBBBBBBBBBBBA";
level+="AO                  A";
level+="AO                  A";
level+="AO                  A";
level+="A                   A";
level+="AJO                 A";
level+="AAN                 A";
level+="A M                 A";
level+="A O              L  A";
level+="A N          XNN  L A";
level+="A M          BBB  L A";
level+="A J          AAA   LA";
level+="ABBB               LA";
level+="AAAA               LA";
level+="A  A                A";
level+="A  A               JA";
level+="A  ABBBBBB       O BA";
level+="A                BBAA";
level+="A                AAAA";
level+="A            O      A";
level+="A            B      A";
level+="A            A      A";
level+="A        O          A";
level+="A        B          A";
level+="A        A          A";
level+="A    O              A";
level+="A    B              A";
level+="A    A              A";
level+="A              BBBBBA";
level+="AB     LLL     AAAAAA";
level+="A      LLL          A";
level+="A                   A";
level+="ABBBBBBBBBBBBBBB    A";
level+="AAAAAAAAAAAAAAAA    A";
level+="A             NLM   A";
level+="A            O   O  A";
level+="A           O       A";
level+="A          O        A";
level+="A      T          JBA";
level+="A     TU          AAA";
level+="A    TUA           AA";
level+="A   TUAAW J  B    XAA";
level+="A BBUAAABBBBBABBBBAAA";
level+="A A  NN   NN        A";
level+="A A N  N N  N       A";
level+="A        N  N       A";
level+="A                   A";
level+="A       B    B      A";
level+="AJ      A    A      A";
level+="ABBBBBBBA    ABB    A";
level+="A                  XA";
level+="A     LL     LL     A";
level+="A     LL            A";
level+="A            TBBBBB A";
level+="A           TU      A";
level+="AOBBBBBBBBBBU  OO   A";
level+="AO                  A";
level+="AO       OO         A";
level+="AO                  A";
level+="AO                  A";
level+="A                   A";
level+="AJ    N             A";
level+="AB         O      JMA";
level+="A     J           BMA";
level+="A     B    J       MA";
level+="A                  MA";
level+="A                  MA";
level+="A                   A";
level+="A                  JA";
level+="A                  BA";
level+="A                   A";
level+="ALNNN     O        BA";
level+="ALBBB           O   A";
level+="AL        J         A";
level+="AL        B     J   A";
level+="AL              B   A";
level+="AL                  A";
level+="AJMNMNMNMNMNMNMNMN  A";
level+="ABBBBBBBBBBBBBBBBBB A";
level+="A                  OA";
level+="A                  OA";
level+="A                  OA";
level+="A                  OA";
level+="A                   A";
level+="A                  JA";
level+="ANLMNOL          OTBA";
level+="ANBBBBB          BUAA";
level+="AN        J         A";
level+="AN        B         A";
level+="AN                  A";
level+="AN                  A";
level+="AJ                  A";
level+="ABBBBB         M    A";
level+="A      N       B  N A";
level+="A     LB    O     B A";
level+="A     L     B       A";
level+="A     L        L    A";
level+="A     L        B    A";
level+="A     BCOOOOOOOOOOOOA";
level+="A     ADBBBBBBBBBBBBA";
level+="A       AAAAAAAAAAAAA";
level+="AW      AAAAAAAAAAAAA";
level+="A       A           A";
level+="A       A           A";
level+="A       A           A";
level+="A       A           A";
level+="A     X A           A";
level+="A     AAA           A";
level+="A       A           A";
level+="A       A           A";
level+="A       A           A";
level+="AW      A OL        A";
level+="A       A NM        A";
level+="A       A OL        A";
level+="A       A NM        A";
level+="A       A OL        A";
level+="A       A NM        A";
level+="A     X AJOL        A";
level+="A     AAAB   MMM    A";
level+="A            BBB    A";
level+="A                 OOA";
level+="A                 BBA";
level+="AW             MLM  A";
level+="ABBBBBC        ONO  A";
level+="AAAAAADC     BBBBBBBA";
level+="AAAAAAADC    AAAAAAAA";
level+="AAAAAAAADC          A";
level+="AAAAAAAAADC  O      A";
level+="AAAAAAAAAADC  O     A";
level+="AAAAAAAAAAADC       A";
level+="AAAAAAAAAAAADBB     A";
level+="A                   A";
level+="A                   A";
level+="A                   A";
level+="A                  XA";
level+="A                   A";
level+="A              MM   A";
level+="A              BBBBBA";
level+="A              AAAAAA";
level+="A          N        A";
level+="A       JJJJ        A";
level+="A       BBBB        A";
level+="A     N             A";
level+="A  JJJJ             A";
level+="A  BBBB             A";
level+="A                   A";
level+="AJ L                A";
level+="AB L                A";
level+="A   L               A";
level+="A   L               A";
level+="A   L               A";
level+="A     M             A";
level+="A   J M             A";
level+="A   B M             A";
level+="A      M            A";
level+="A      M            A";
level+="A      M            A";
level+="A        N          A";
level+="A      J  N         A";
level+="A      B  N         A";
level+="A          N        A";
level+="A          N        A";
level+="A          N        A";
level+="A            O      A";
level+="A          J  O     A";
level+="A          B  O     A";
level+="A              O    A";
level+="A              O    A";
level+="A              O    A";
level+="A                L  A";
level+="A              J  L A";
level+="A              B  L A";
level+="A                  LA";
level+="A                  LA";
level+="A                  LA";
level+="A                   A";
level+="A                  JA";
level+="A    M             BA";
level+="AOOOOB          OOOAA";
level+="AOOOOA         BBBBAA";
level+="AOOOOAJ         AAAAA";
level+="AOOOOAB       L     A";
level+="A    AA        L    A";
level+="AJJJJAA MNJ     L   A";
level+="ABBBBAABBBB      L  A";
level+="AAAAAAAAAAA       L A";
level+="A                   A";
level+="A                  XA";
level+="A            NONO   A";
level+="A        MM  BBBB   A";
level+="A     L  BB         A";
level+="A     B             A";
level+="A                   A";
level+="A     LLLL          A";
level+="AN   TBBBBC    NN   A";
level+="AN  TUAAAADCML NN   A";
level+="AN BUAAAAAADBBBBBBBBA";
level+="AN AAAAAAAAAAAAAAAAAA";
level+="AN                  A";
level+="AN                  A";
level+="A                   A";
level+="AJ LLL          OOO A";
level+="ABBBBB   MMMM   BBBNA";
level+="         BBBB      NA";
level+="                   NA";
level+="A                  NA";
level+="A        OOOO      NA";
level+="A      TBBBBBC      A";
level+="A  OOOTUAAAAADC OO JA";
level+="ABBBBBUAAAAAAADBBBBBA";
level+="AAAAAAAAAAAAAAAAAAAAA";
level+="AAAAAAAAAAAAAAAAAAAAA";
level+="AAAAAAAAAAAAAAAAAAAAA";
level+="AAAAAAAAAAAAAAAAAAAAA";
level+="AAAAAAAAAAAAAAAAAAAAA";
level+="AAAAAAAAAAAAAAAAAAAAA";




//
// GEMS in explosion at start
//
GEMS = function(x, y) {
	this.x = x;
	this.y = y;
	this.speed = 5 + Math.random()*15;
	this.angle = Math.random()*Math.PI*2;
	this.life = 300;
	this.tileNumber = [11,12,13,14][(Math.random()*4)|0];
	this.vY = -10;
	this.update = function() {
		this.life--;
		if (!this.life) {
			gems = [];
		}
		this.vY+=0.1;
		ctx.drawImage(img,this.tileNumber*48,0,48,48,this.x,this.y,48,48);
		this.x+=Math.sin(this.angle)*this.speed;
		this.y+=Math.cos(this.angle)*this.speed+this.vY;
	}
}

//
// Show sprite image accordinalty the state
//
SPRITE = function(startFrame, lastFrame, r) {
	this.frameIndex = startFrame;
	this.startFrame = startFrame;
	this.lastFrame = lastFrame;
	this.wait = 0;
	this.image = new Image();
	var name = "p.png"+(r  ? "R" : "");
	this.name = name;
	this.r = r;
	
	if (!images[name]) {
		images[name] = new Image();
		images[name].src = name.replace("R", "");
		if (this.r) {
			images[name].onload = function() {
				//Parser chaque sprite de l'image pour les retourner sur l'axe X
				if (this._m) { return; }
				var m = document.createElement("canvas");
				m.width = 576;
				m.height = 32;
				var ctx3 = m.getContext("2d");
				ctx3.translate(576,0);
				ctx3.scale(-1, 1);
				for (var i=0; i<18; i++) {
					ctx3.drawImage(this,i*32, 0, 32, 32, (18-i)*32, 0, 32, 32);
				}
				this.src = m.toDataURL();
				this._m = 1;
			}
		}
	}
	
	this.update = function() {
		if (this.wait>0) {
			this.wait--;
		} else {
			this.wait = 3;
			if (++this.frameIndex>=this.lastFrame) {
				this.frameIndex = this.startFrame;
			}
		}
		this.draw();
	}
	this.draw = function () {
		ctx.drawImage(
			images[this.name],
			this.frameIndex * 32,
			0,
			32,
			32,
			this.x,
			this.y+deltaY,
			48,
			48
		);
		deltaY = -this.y + 256;
	};
}

PLAYER = function(x, y) {
	this.state = "idle";
	this.x=x;
	this.y = y;
	this.direction = 1;
	this.sprites = {};
	this.velocity = {x:0, y:1};
	this.jumpStop = 1;
	
	this.sprites.idle = new SPRITE(6, 11);
	this.sprites.idleL = new SPRITE(6, 11, 1);
	
	this.sprites.walk = new SPRITE(1, 5);
	this.sprites.walkL = new SPRITE(1, 5, 1);
	
	this.sprites.jump = new SPRITE(12, 14);
	this.sprites.jumpL = new SPRITE(12, 14, 1);
	
	this.sprites.fall = new SPRITE(15, 17);
	this.sprites.fallL = new SPRITE(15, 17, 1);
	
	this.sprite = this.sprites[this.state];
	this.update = function() {
		var oldState = this.state;
		floor2.innerHTML = 424 - (this.y/48)|0;
		if (Math.round(this.y/48)==20) {
			go = false;
			keys = [];
			f.innerHTML = "CONGRATULATIONS !<br/>You reach the 404th floor in "+ti.innerHTML+"<br/>"+score+" / 404 gems found<br/><br/><a href='//twitter.com/intent/tweet?hashtags=js13k&url="+location+"&text=I beat "+document.title+" in "+ti.innerHTML+" with "+score+"/404 gems !'>Share on twitter</a>";
			
			f.style.display="flex";
		}
		
		if (this.state!="jump" && this.state!="fall") {
			this.velocity.x = 0;
			if (keys[39]) {
				this.velocity.x = 6;
				this.direction = 1;
			} else if (keys[37]) {
				this.velocity.x = -6;
				this.direction = 0;
			}
			
			if (keys[38]) {
				if (this.jumpStop) {
					this.velocity.y = -18;
					sound([0,,0.1945,,0.2019,0.3725,,0.2486,,,,,,0.3973,,,,,1,,,0.0979,,0.5]);
					this.jumpStop = 0;
				}
			}
		} else {
			if (keys[39]) {
				this.direction = 1;
				if (this.velocity.x<0) {
					this.velocity.x*=0.90;
				}
				if (this.velocity.x>6.2) {
					this.velocity.x*=0.95;
				}
				if (this.velocity.x<6.2) {
					this.velocity.x+=0.5;
				}
			} else if (keys[37]) {
				this.direction = 0;
				if (this.velocity.x>0) {
					this.velocity.x*=0.90;
				}
				if (this.velocity.x<-6.2) {
					this.velocity.x*=0.95;
				}
				if (this.velocity.x>-6.2) {
					this.velocity.x-=0.5;
				}
			} else {
				this.velocity.x*=0.90;
			}
		}
		this.velocity.y+=1.01;
		if (this.velocity.y>47) {
			this.velocity.y = 47;
		}
		var onSlope = 0;
		if (this.velocity.y>0) {
			y = 48;
			for (x of [24,12,36]) {
				if (c = getTile(this.x + x + this.velocity.x, this.y + this.velocity.y + y)) {
					this.velocity.y = 0;
					this.y = c.y - 48;
					switch (c.type) {
						case 10:
						case 11:
							this.velocity.y = -24;
							this.state = "jump";
							c.type=11;
							c.returnTo = 5;
							sound([0,,0.16,0.33,0.59,0.35,,0.02,-0.02,0.69,0.3,,,0.31,,0.36,,,1,,,0.0715,,0.5]);
							break;
						case 23:
						case 24:
							this.velocity.y = -25;
							this.velocity.x = c.type==23 ? 24 : -24;
							this.state = "jump";
							player.x = c.x;
							sound([0,,0.16,0.33,0.59,0.35,,0.02,-0.02,0.69,0.3,,,0.31,,0.36,,,1,,,0.0715,,0.5]);
							//break;
						case 3: //Pente qui monte vers la gauche
							this.y+=Math.min(48, this.x +24 + this.velocity.x - c.x);
							onSlope = 1;
							break;
						
						case 20: //Pente qui monte vers la droite
							this.y+=Math.min(48,48-(this.x + 24 + this.velocity.x - c.x));
							onSlope = 1;
							break;
					}
					break;
				}
			}
		}
		if (!onSlope) { 
			if (this.velocity.y<0) {
				y = 0;
				for (var x=12; x<=36; x+=12) {
					if (c = getTile(this.x + x + this.velocity.x, this.y + this.velocity.y + y)) {
						this.velocity.y = 0;
						this.y = c.y + 48;
						break;
					}
				}
			}
			if (this.velocity.x>0) {
				x = 48;
				a:
				for (var y=0; y<=47; y+=12) {
					if (c = getTile(this.x + x + this.velocity.x, this.y + this.velocity.y + y)) {
						switch (c.type) {
							case 3:
								continue;
							case 23:
							case 24:
								this.velocity.y = -25;
								this.velocity.x = c.type==23 ? 24 : -24;
								this.state = "jump";
								player.x = c.x;
								sound([0,,0.16,0.33,0.59,0.35,,0.02,-0.02,0.69,0.3,,,0.31,,0.36,,,1,,,0.0715,,0.5]);
								break a;
							case 20:
								this.y+=Math.min(0, -(this.x+24+this.velocity.x - c.x));
								break a;
						}
						this.velocity.x = 0;
						this.x = c.x - 48;
						break;
					}
				}
			}
			if (this.velocity.x<0) {
				x = 0;
				a:
				for (var y=0; y<=47; y+=12) {
					if (c = getTile(this.x + x + this.velocity.x, this.y + this.velocity.y + y)) {
						switch (c.type) {
							case 20:
								continue;
							case 23:
							case 24:
								this.velocity.y = -25;
								this.velocity.x = c.type==23 ? 24 : -24;
								this.state = "jump";
								player.x = c.x;
								sound([0,,0.16,0.33,0.59,0.35,,0.02,-0.02,0.69,0.3,,,0.31,,0.36,,,1,,,0.0715,,0.5]);
								break a;
							case 3:
								this.y+=Math.min(48, Math.min(48,this.x+24+this.velocity.x - c.x)-48);
								break a;
						}
						this.velocity.x = 0;
						this.x = c.x + 48;
						break;
					}
				}
			}
		}
		
		this.state = "idle";
		if (this.velocity.x!=0) {
			this.state = "walk";
		}
		if (this.velocity.y>0) {
			this.state = "fall";
		} else if (this.velocity.y<0) {
			this.state = "jump";
		}
		
		if ((oldState=="fall" || oldState=="jump") && (this.state=="walk" || this.state=="idle")) {
			sound([3,,0.0137,,0.1662,0.31,,-0.5727,,,,,,,,,,,1,,,,,0.5]);
		}
		
		this.y+=this.velocity.y;
		this.x+=this.velocity.x;
		this.sprite = this.sprites[this.state+(!this.direction ? "L" : "")];
		this.sprite.x = this.x + extraX;
		this.sprite.y = this.y + extraY; // + penteY;
		this.sprite.update();
	}
}


//
// Generate a mountain and draw it in a canva
//
generateMountain = function(s) {
	v = 480;
	t = [(mr.n() * v)|0, (mr.n() * v)|0];
	while(t.length < mountain.width) {
		v *= 0.52;
		t = function(o, v) {
			n = [o[0]];
			for(i = 1; i < o.length; i++) {
				n.push(((o[i - 1] + o[i]) / 2 + ((Math.random() - 0.5) * v))|0);
				n.push(o[i]);
			}
			return n;
		}(t, v);
	}
	var ctx = mountain.getContext("2d");
	var grd=ctx.createLinearGradient(0,mountain.height,0,0);
	grd.addColorStop(0,"#000");
	grd.addColorStop(0.95,"rgb(200,"+(mr.n()*255)+",200)");
	ctx.strokeStyle = grd;

	for(i = 0; i < mountain.width; i++) {
		ctx.beginPath();
		ctx.moveTo(i + 0.5, mountain.height - t[i]);
		ctx.lineTo(i + 0.5, mountain.height);
		ctx.stroke();
	}
}

//
// Return a tile from it position
//
getTile = function(x, y) {
	var i = (x/48+(((y/48)|0)*21))|0;
	if (!level[i]) {
		return null;
	}
	if ([12,13,14,15].indexOf(level[i].type)!=-1) {
		sound([0,,0.0202,0.4332,0.3526,0.46,,,,,,0.5604,0.6381,,,,,,1,,,,,0.5]);
		sc.innerHTML = ++score+"/404";
		level[i].type = null;
		return null;
	}
	return level[i].type!=null && [4,5,6,7,8,16,18].indexOf(level[i].type)==-1 ? level[i] : null;
}

//
// Init music
//
initAudio = function() {
	var context = new AudioContext();
	var gainNode = context.createGain();
	var music = context.createBufferSource();
	gainNode.connect(context.destination);
	
	context.decodeAudioData(wave.buffer, function(buffer){
		music.buffer = buffer; // Attatch our Audio Data as it's Buffer
		music.connect(gainNode);  // Link the Sound to the Output
		music.loop = 1;
		music.loopStart = 16;
		music.loopEnd = 48;
		music.start(0); // Play the Sound Immediately
	});
}

//
// Init pseudo random for mountain and decorations
//
mr = new random(200);


//
// Init game, canvas, player
//
load = function(s) {
	
	//
	// Generate mountains
	//
	generateMountain();
	generateMountain();
	generateMountain();
	mr.n();

	//
	// Explode level in array and compute decorations
	//
	level = level.split("");
	for (var t in level) {
		level[t] = {type:level[t]!=" " ? level[t].charCodeAt(0)-64 : null};
		if (level[t].type==2 && !level[t-21].type && mr.n()>0.8) { //Place random decoration
			level[t-21].type=[5,6,7,8,16,18][(mr.n()*6)|0];
		}
	}
	
	c.width = 1008;
	c.height = 480;
	ctx = c.getContext("2d");
	ctx.fillStyle = "#D0F4F7"; //Sky color

	player = new PLAYER(40,200);
	
	img = new Image();
	img.src = 't.png';
	img.onload = function() {
		for (var i=0; i<10; i++) {
			clouds.push({x:Math.random()*1224, y:Math.random()*250, size:0.5+Math.random()/2, speed:Math.max(0.25, Math.random())});
		}
	}
	onresize();
	gameLoop();
}


//
// Main loop
//
function gameLoop (t) {
	extraX = 0;
	extraY = 0;
	
	if (frame<1000) { //Introduction, show bubble, move player, explode, etc.
		if (auto[frame]) {
			keys[auto[frame]] = !keys[auto[frame]];
		}
		if (speech[frame]) {
			o.innerHTML = speech[frame];
			o.style.display = speech[frame]==" " ? "none" : "inline-block";
			o.style.left = ((player.x+48)/1008*100)+"%";
		}
		if (frame==280) {
			explode = 2;
		}
		if (frame==350) {
			explode = 4;
		}
		if (frame==440) {
			explode = 10;
		}
		if (frame==560) {
			for (var i=0; i<100; i++) {
				gems.push(new GEMS(620, 240));
			}
			level[160].type = null;
			sound([3,,0.59,0.78,0.84,0.1765,,-0.37,,,,,,,,,0.3976,-0.2442,1,,,,,0.5]);
		}

		if (frame>=560 && frame<=650) {
			var f = 650-frame;
			extraX = Math.random()*f-f/2;
			extraY = Math.random()*f-f/2;
		}
		if (frame==975) {
			player.x = 50;
			player.y = 20050;
		}
		if (frame==990) {
			player.jumpStop = 1;
			allowKeys = true;
			floor.style.display = "block";
			ti.style.display = "block";
			sc.style.display = "block";
			ds = t;
		}
	}
	if (gameStarted) {
		frame++;
	}
	ctx.fillRect(0, 0, 1008, 480);
	
	//
	// Move clouds
	//
	for (var i=0; i<clouds.length; i++) {
		if (clouds[i].x<-200) { clouds[i].x = 1200; }
		ctx.drawImage(cloud, clouds[i].x-=clouds[i].speed,clouds[i].y, 128*clouds[i].size, 71*clouds[i].size);
	}
	
	//
	// Draw mountains
	//
	ctx.drawImage(mountain,0,0,1008,592);

	//
	// Draw tiles which are visible on the screen
	//
	start = Math.max(0,Math.round(player.y/48)-6);
	var x=0;
	var y = -48+(48*start);
	
	for (var i=start*21; i<(start+11)*21; i++) {
		if (i%21==0) {
			y+=48;
			x=0;
		}
		
		level[i].x = x;
		level[i].y = y;
		
		if (level[i].type!=null) {
			var tileNumber = level[i].type-1;
			var dY = extraX;
			var dX = extraY;
			if ([11,12,13,14].indexOf(tileNumber)!=-1) {
				dY = Math.sin(frame/24)*5;
			}
			var angle = 0;
			
			if (tileNumber==8) {
				dX = Math.random()*explode;
				dY = -Math.random()*explode;
			} else if (tileNumber==22) {
				tileNumber = 10;
				angle = Math.PI/4;
			} else if (tileNumber==23) {
				tileNumber = 10;
				angle = -Math.PI/4;
			}
			
			if (angle) {
				ctx.save();
				ctx.translate(x+24, y+dY+deltaY+24);
				ctx.rotate(angle);
				ctx.drawImage(img,tileNumber*48,0,48,48, -24 , -24,48,48);
				ctx.restore();
			} else {
				ctx.drawImage(img,tileNumber*48,0,48,48,x+dX , y+dY+deltaY,48,48);
			}
			
			if (tileNumber==15) {
				if (frame%(180)==0) {
					blink[i] = ((Math.random()*20)|0)+10;
				}
				if (blink[i]) {
					blink[i]--;
				} else {
					ctx.drawImage(img,16*48,0,48,48,x,y+deltaY,48,48);
				}
			}
			if (tileNumber==10 && level[i].returnTo==0) {
				level[i].type=10;
			} else if (tileNumber==10) {
				level[i].returnTo--;
			}
		}
		x+=48;
	}
	
	//
	// Move the gemes exploded
	//
	for (var i=0; i<gems.length; i++) {
		gems[i].update();
	}
	player.update();
	
	
	if (go) {
		window.requestAnimationFrame(gameLoop);
		nb = (t-ds)/1000;
		sec = nb|0;
		mill = Math.min(99,(nb-sec)*100);
		ti.innerHTML = ((sec/60|0)<10 ? "0" : "")+(sec/60|0) + ":"+((sec%60)<10 ? "0" : "")+(sec%60) + ":" + (mill<10 ? "0" : "")+(mill|0);
	}
	
	if (player.y>20000) {
		ctx.fillStyle = "#754F2C"; //Sky color
		ctx.font = "20px Arial";
		ctx.fillText("move with arrow keys", 410, 20600 - player.y);
		ctx.fillStyle = "#D0F4F7"; //Sky color
	}
}





//
// Events handlers
//
document.onkeydown = function(e) {
	if (allowKeys) {
		keys[e.keyCode] = 1;
	}
}
document.onkeyup = function(e) {
	if (allowKeys) {
		keys[e.keyCode] = 0;
		if (e.keyCode==38) {
			player.jumpStop = 1;
		}
	}
	if (!gameStarted) {
		h.remove();
		initAudio();
		gameStarted = true;
	}
}
onresize = function() {
        r = (1008/480);
	if (innerWidth / innerHeight <= r) {
		W = innerWidth;
		H = W / r;
	} else {
		H = innerHeight;
		W = H * r;
	}
	a.style.width = W + 'px';
	a.style.height = H + 'px';
	o.style.transform = "scale("+(scale = W/1008)+")";
}








// This music has been exported by SoundBox. You can use it with
// http://sb.bitsnbites.eu/player-small.js in your own product.

// See http://sb.bitsnbites.eu/demo.html for an example of how to
// use it in a demo.

// Song data
var song = {
      songData: [
        { // Instrument 0
          i: [
          2, // OSC1_WAVEFORM
          100, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          3, // OSC2_WAVEFORM
          201, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          5, // ENV_ATTACK
          6, // ENV_SUSTAIN
          58, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          195, // LFO_AMT
          6, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          135, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          147, // FX_PAN_AMT
          6, // FX_PAN_FREQ
          121, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1,2,1,2,1,2,3,4,2,1,5,4],
          // Columns
          c: [
            {n: [135,,139,,142,,139,,147,,139,,142,,139,,135,,139,,142,,139,,147,,139,,142,,139],
             f: []},
            {n: [140,,144,,147,,144,,140,,144,,147,,144,,140,,144,,147,,144,,140,,144,,147,,144],
             f: []},
            {n: [137,,140,,144,,140,,137,,140,,144,,140,,137,,140,,144,,140,,137,,140,,144,,140],
             f: []},
            {n: [142,,146,,149,,146,,142,,146,,149,,146,,142,,146,,149,,146,,142,,146,,149,,146],
             f: []},
            {n: [137,,141,,144,,141,,137,,141,,144,,141,,137,,141,,144,,141,,137,,141,,144,,141],
             f: []}
          ]
        },
        { // Instrument 1
          i: [
          2, // OSC1_WAVEFORM
          100, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          3, // OSC2_WAVEFORM
          201, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          5, // ENV_ATTACK
          6, // ENV_SUSTAIN
          58, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          195, // LFO_AMT
          6, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          135, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          147, // FX_PAN_AMT
          6, // FX_PAN_FREQ
          121, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,1,2,3,4,5,6,7,8],
          // Columns
          c: [
            {n: [151,,,,,,,,,,,,151,,152,,154,,,,151,,,,159,,,,,,158],
             f: []},
            {n: [158,,,,,,,,156],
             f: []},
            {n: [152,,,,,,,,,,,,152,,154,,156,,,,152,,,,161,,,,,,159],
             f: []},
            {n: [159,,,,,,,,158],
             f: []},
            {n: [159,,,,,,156,,152,,,,,,,,,,,,152,,154,,156,,,,158],
             f: []},
            {n: [159,,,,,,154,,151],
             f: []},
            {n: [159,,,,,,156,,153,,,,,,,,,,,,153,,154,,156,,,,153],
             f: []},
            {n: [154],
             f: []}
          ]
        },
        { // Instrument 2
          i: [
          0, // OSC1_WAVEFORM
          255, // OSC1_VOL
          116, // OSC1_SEMI
          1, // OSC1_XENV
          0, // OSC2_WAVEFORM
          255, // OSC2_VOL
          116, // OSC2_SEMI
          0, // OSC2_DETUNE
          1, // OSC2_XENV
          0, // NOISE_VOL
          4, // ENV_ATTACK
          6, // ENV_SUSTAIN
          35, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          14, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          20, // FX_DRIVE
          0, // FX_PAN_AMT
          0, // FX_PAN_FREQ
          0, // FX_DELAY_AMT
          0 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,1,1,1,1,1,1,1,1],
          // Columns
          c: [
            {n: [139,,,,151,,,,139,,,,151,,,,139,,,,151,,,,139,,,,151],
             f: [24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,20]}
          ]
        },
        { // Instrument 3
          i: [
          0, // OSC1_WAVEFORM
          255, // OSC1_VOL
          116, // OSC1_SEMI
          1, // OSC1_XENV
          0, // OSC2_WAVEFORM
          255, // OSC2_VOL
          116, // OSC2_SEMI
          0, // OSC2_DETUNE
          1, // OSC2_XENV
          14, // NOISE_VOL
          4, // ENV_ATTACK
          6, // ENV_SUSTAIN
          45, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          136, // FX_FREQ
          15, // FX_RESONANCE
          0, // FX_DIST
          16, // FX_DRIVE
          0, // FX_PAN_AMT
          0, // FX_PAN_FREQ
          66, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,1,1,1,1,1,1,1,1],
          // Columns
          c: [
            {n: [,,,,139,,,,,,,,139,,,,,,,,139,,,,,,,,139],
             f: [24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,16]}
          ]
        },
        { // Instrument 4
          i: [
          0, // OSC1_WAVEFORM
          160, // OSC1_VOL
          128, // OSC1_SEMI
          1, // OSC1_XENV
          0, // OSC2_WAVEFORM
          159, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          1, // OSC2_XENV
          210, // NOISE_VOL
          4, // ENV_ATTACK
          7, // ENV_SUSTAIN
          41, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          60, // LFO_AMT
          4, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          255, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          15, // FX_DRIVE
          61, // FX_PAN_AMT
          5, // FX_PAN_FREQ
          32, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,1,1,1,1,1,1,1,1],
          // Columns
          c: [
            {n: [,,,,139,,,,,,,,139,,,,,,,,139,,,,,,,,139],
             f: [24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,15]}
          ]
        },
        { // Instrument 5
          i: [
          0, // OSC1_WAVEFORM
          0, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          0, // OSC2_WAVEFORM
          0, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          125, // NOISE_VOL
          0, // ENV_ATTACK
          1, // ENV_SUSTAIN
          59, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          1, // FX_FILTER
          193, // FX_FREQ
          171, // FX_RESONANCE
          0, // FX_DIST
          11, // FX_DRIVE
          39, // FX_PAN_AMT
          3, // FX_PAN_FREQ
          88, // FX_DELAY_AMT
          3 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,2,2,1,1,1,1,1,1,1,1],
          // Columns
          c: [
            {n: [156,,156,,156,,156,,156,,156,,156,,156,,156,,156,,156,,156,,156,,156,,156,,156],
             f: [24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,11]},
            {n: [156,,,,,,,,156,,,,,,,,156,,,,,,,,156],
             f: []}
          ]
        },
        { // Instrument 6
          i: [
          2, // OSC1_WAVEFORM
          188, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          2, // OSC2_WAVEFORM
          188, // OSC2_VOL
          140, // OSC2_SEMI
          18, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          33, // ENV_ATTACK
          119, // ENV_SUSTAIN
          158, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          5, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          0, // FX_PAN_AMT
          0, // FX_PAN_FREQ
          24, // FX_DELAY_AMT
          8 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1,2,1,2,1,2,3,4,2,1,5,4],
          // Columns
          c: [
            {n: [147,,,,,,,,,,,,,,,,147,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,139,,,,,,,,,,,,,,,,142,,,,,,,,,,,,,,,,142],
             f: [6,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,188]},
            {n: [140,,,,,,,,,,,,,,,,140,,,,,,,,,,,,,,,,144,,,,,,,,,,,,,,,,144,,,,,,,,,,,,,,,,147,,,,,,,,,,,,,,,,147],
             f: []},
            {n: [137,,,,,,,,,,,,,,,,137,,,,,,,,,,,,,,,,140,,,,,,,,,,,,,,,,140,,,,,,,,,,,,,,,,144,,,,,,,,,,,,,,,,144],
             f: []},
            {n: [142,,,,,,,,,,,,,,,,142,,,,,,,,,,,,,,,,146,,,,,,,,,,,,,,,,146,,,,,,,,,,,,,,,,149,,,,,,,,,,,,,,,,149],
             f: []},
            {n: [137,,,,,,,,,,,,,,,,137,,,,,,,,,,,,,,,,141,,,,,,,,,,,,,,,,141,,,,,,,,,,,,,,,,144,,,,,,,,,,,,,,,,144],
             f: []}
          ]
        },
      ]
    };

var CPlayer = function() {

    //--------------------------------------------------------------------------
    // Private methods
    //--------------------------------------------------------------------------

    // Oscillators
    var osc_sin = function (value) {
        return Math.sin(value * 6.283184);
    };

    var osc_saw = function (value) {
        return 2 * (value % 1) - 1;
    };

    var osc_tri = function (value) {
        var v2 = (value % 1) * 4;
        if(v2 < 2) return v2 - 1;
        return 3 - v2;
    };

    var getnotefreq = function (n) {
        // 174.61.. / 44100 = 0.003959503758 (F3)
        return 0.003959503758 * Math.pow(2, (n - 128) / 12);
    };

    var createNote = function (instr, n, rowLen) {
	       
        var osc1 = mOscillators[instr.i[0]],
            o1vol = instr.i[1],
            o1xenv = instr.i[3],
            osc2 = mOscillators[instr.i[4]],
            o2vol = instr.i[5],
            o2xenv = instr.i[8],
            noiseVol = instr.i[9],
            attack = instr.i[10] * instr.i[10] * 4,
            sustain = instr.i[11] * instr.i[11] * 4,
            release = instr.i[12] * instr.i[12] * 4,
            releaseInv = 1 / release,
            arp = instr.i[13],
            arpInterval = 5513 * Math.pow(2, 2 - instr.i[14]);

        var noteBuf = new Int32Array(attack + sustain + release);

        // Re-trig oscillators
        var c1 = 0, c2 = 0;

        // Local variables.
        var j, j2, e, t, rsample, o1t, o2t;

        // Generate one note (attack + sustain + release)
        for (j = 0, j2 = 0; j < attack + sustain + release; j++, j2++) {
            if (j2 >= 0) {
                // Switch arpeggio note.
                arp = (arp >> 8) | ((arp & 255) << 4);
                j2 -= arpInterval;

                // Calculate note frequencies for the oscillators
                o1t = getnotefreq(n + (arp & 15) + instr.i[2] - 128);
                o2t = getnotefreq(n + (arp & 15) + instr.i[6] - 128) * (1 + 0.0008 * instr.i[7]);
		
            }

            // Envelope
            e = 1;
            if (j < attack) {
                e = j / attack;
            } else if (j >= attack + sustain) {
                e -= (j - attack - sustain) * releaseInv;
            }

            // Oscillator 1
            t = o1t;
            if (o1xenv) {
		   
                t *= e * e;
            }
            c1 += t;
            rsample = osc1(c1) * o1vol;

            // Oscillator 2
            t = o2t;
            if (o2xenv) {
		     
                t *= e * e;
            }
            c2 += t;
            rsample += osc2(c2) * o2vol;

            // Noise oscillator
            if (noiseVol) {
		 
                rsample += (2 * Math.random() - 1) * noiseVol;
            }

            // Add to (mono) channel buffer
            noteBuf[j] = (80 * rsample * e) | 0;
        }

        return noteBuf;
    };


    //--------------------------------------------------------------------------
    // Private members
    //--------------------------------------------------------------------------

    // Array of oscillator functions
    var mOscillators = [
        osc_sin,
        osc_sin,
        osc_saw,
        osc_tri
    ];

    // Private variables set up by init()
    var mSong, mCurrentCol, mMixBuf;


    

    //--------------------------------------------------------------------------
    // Public methods
    //--------------------------------------------------------------------------

    // Generate audio data for a single track
    this.gen = function () {
        // Local variables
        var i, j, b, p, row, col, n, cp,
            k, t, lfor, e, x, rsample, rowStartSample, f, da;

        // Put performance critical items in local variables
        var chnBuf = new Int32Array(4233984),
            instr = mSong.songData[mCurrentCol];

        // Clear effect state
        var low = 0, band = 0, high;
        var lsample, filterActive = 0;

        // Clear note cache.
        var noteCache = [];

         // Patterns
         for (p = 0; p <= 11; ++p) {
            cp = instr.p[p];

            // Pattern rows
            for (row = 0; row < 32; ++row) {
                // Execute effect command.
                var cmdNo = cp ? instr.c[cp - 1].f[row] : 0;
                if (cmdNo) {
			
                    instr.i[cmdNo - 1] = instr.c[cp - 1].f[row + 32] || 0;

                    // Clear the note cache since the instrument has changed.
                    if (cmdNo < 16) {
                        noteCache = [];
                    }
                }

                // Put performance critical instrument properties in local variables
                var oscLFO = mOscillators[instr.i[15]],
                    lfoAmt = instr.i[16] / 512,
                    lfoFreq = Math.pow(2, instr.i[17] - 9) / 5513,
                    fxLFO = instr.i[18],
                    fxFilter = instr.i[19],
                    fxFreq = instr.i[20] * 43.23529 * 3.141592 / 44100,
                    q = 1 - instr.i[21] / 255,
                    dist = instr.i[22] * 1e-5,
                    drive = instr.i[23] / 32,
                    panAmt = instr.i[24] / 512,
                    panFreq = 6.283184 * Math.pow(2, instr.i[25] - 9) / 5513,
                    dlyAmt = instr.i[26] / 255,
                    dly = instr.i[27] * 5513 & ~1;  // Must be an even number

                // Calculate start sample number for this row in the pattern
                rowStartSample = (p * 32 + row) * 5513;

                // Generate notes for this pattern row
                for (col = 0; col < 4; ++col) {
                    n = cp ? instr.c[cp - 1].n[row + col * 32] : 0;
                    if (n) {
                        if (!noteCache[n]) {
				
                            noteCache[n] = createNote(instr, n, 5513);
                        }

                        // Copy note from the note cache
                        var noteBuf = noteCache[n];
                        for (j = 0, i = rowStartSample * 2; j < noteBuf.length; j++, i += 2) {
                          chnBuf[i] += noteBuf[j];
                        }
                    }
                }

                // Perform effects for this pattern row
                for (j = 0; j < 5513; j++) {
                    // Dry mono-sample
                    k = (rowStartSample + j) * 2;
                    rsample = chnBuf[k];

                    // We only do effects if we have some sound input
                    if (rsample || filterActive) {
			    
                        // State variable filter
                        f = fxFreq;
                        if (fxLFO) {
                            f *= oscLFO(lfoFreq * k) * lfoAmt + 0.5;
                        }
                        f = 1.5 * Math.sin(f);
                        low += f * band;
                        high = q * (rsample - band) - low;
                        band += f * high;
                        rsample = fxFilter == 3 ? band : fxFilter == 1 ? high : low;

                        // Distortion
                        if (dist) {
                            rsample *= dist;
                            rsample = rsample < 1 ? rsample > -1 ? osc_sin(rsample*.25) : -1 : 1;
                            rsample /= dist;
                        }

                        // Drive
                        rsample *= drive;

                        // Is the filter active (i.e. still audiable)?
                        filterActive = rsample * rsample > 1e-5;

                        // Panning
                        t = Math.sin(panFreq * k) * panAmt + 0.5;
                        lsample = rsample * (1 - t);
                        rsample *= t;
                    } else {
                        lsample = 0;
                    }

                    // Delay is always done, since it does not need sound input
                    if (k >= dly) {
			    
                        // Left channel = left + right[-p] * t
                        lsample += chnBuf[k-dly+1] * dlyAmt;

                        // Right channel = right + left[-p] * t
                        rsample += chnBuf[k-dly] * dlyAmt;
                    }

                    // Store in stereo channel buffer (needed for the delay effect)
                    chnBuf[k] = lsample | 0;
                    chnBuf[k+1] = rsample | 0;

                    // ...and add to stereo mix buffer
                    mMixBuf[k] += lsample | 0;
                    mMixBuf[k+1] += rsample | 0;
                }
            }
        }

        // Next iteration. Return progress (1.0 == done!).
        return ++mCurrentCol == 7;
    };

    // Create a WAVE formatted Uint8Array from the gend audio data
    this.create = function() {
	   
        // Create WAVE header
        var wave = new Uint8Array(8468012);
        wave.set(
            [82,73,70,70,36,54,129,0,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,0,54,129,0]
        );

        // Append actual wave data
        for (var i = 0, idx = 44; i < 4233984; ++i) {
            // Note: We clamp here
            var y = mMixBuf[i];
            y = y < -32767 ? -32767 : (y > 32767 ? 32767 : y);
            wave[idx++] = y & 255;
            wave[idx++] = (y >> 8) & 255;
        }

        // Return the WAVE formatted typed array
        return wave;
    };
    //--------------------------------------------------------------------------
    // Initialization
    //--------------------------------------------------------------------------

   // this.init = function (song) {
        // Define the song
        mSong = song;

        // Init iteration state variables
        mCurrentCol = 0;

        // Create work buffer (initially cleared)
        mMixBuf = new Int32Array(4233984);
   // };

};



//
// Generate music at start
//
var m = new CPlayer();
while (!m.gen()) { }
var wave = m.create();
var scale=1;
