function sp() {
    this._s = function(a) {
        for (var b = 0; b < 24; b++) this[String.fromCharCode(97 + b)] = a[b] || 0;
        this.c < .01 && (this.c = .01);
        var c = this.b + this.c + this.e;
        if (c < .18) {
            var d = .18 / c;
            this.b *= d, this.c *= d, this.e *= d
        }
    }
}

function ss() {
    this._p = new sp;
    var a, b, c, d, e, f, g, h, i, j, k, l;
    this.reset = function() {
        var a = this._p;
        d = 100 / (a.f * a.f + .001), e = 100 / (a.g * a.g + .001), f = 1 - a.h * a.h * a.h * .01, g = -a.i * a.i * a.i * 1e-6, a.a || (k = .5 - a.n / 2, l = 5e-5 * -a.o), h = 1 + a.l * a.l * (a.l > 0 ? -.9 : 10), i = 0, j = 1 == a.m ? 0 : (1 - a.m) * (1 - a.m) * 2e4 + 32
    }, this.tr = function() {
        this.reset();
        var d = this._p;
        return a = d.b * d.b * 1e5, b = d.c * d.c * 1e5, c = d.e * d.e * 1e5 + 12, 3 * ((a + b + c) / 3 | 0)
    }, this._s = function(m, n) {
        var o = this._p,
            p = 1 != o.s || o.v,
            q = o.v * o.v * .1,
            r = 1 + 3e-4 * o.w,
            s = o.s * o.s * o.s * .1,
            t = 1 + 1e-4 * o.t,
            u = 1 != o.s,
            v = o.x * o.x,
            w = o.g,
            x = o.q || o.r,
            y = o.r * o.r * o.r * .2,
            z = o.q * o.q * (o.q < 0 ? -1020 : 1020),
            A = o.p ? ((1 - o.p) * (1 - o.p) * 2e4 | 0) + 32 : 0,
            B = o.d,
            C = o.j / 2,
            D = o.k * o.k * .01,
            E = o.a,
            F = a,
            G = 1 / a,
            H = 1 / b,
            I = 1 / c,
            J = 5 / (1 + o.u * o.u * 20) * (.01 + s);
        J > .8 && (J = .8), J = 1 - J;
        for (var Q, S, U, W, Y, Z, K = !1, L = 0, M = 0, N = 0, O = 0, P = 0, R = 0, T = 0, V = 0, X = 0, $ = 0, _ = new Array(1024), aa = new Array(32), ba = _.length; ba--;) _[ba] = 0;
        for (var ba = aa.length; ba--;) aa[ba] = 2 * Math.random() - 1;
        for (var ba = 0; ba < n; ba++) {
            if (K) return ba;
            if (A && ++X >= A && (X = 0, this.reset()), j && ++i >= j && (j = 0, d *= h), f += g, d *= f, d > e && (d = e, w > 0 && (K = !0)), S = d, C > 0 && ($ += D, S *= 1 + Math.sin($) * C), S |= 0, S < 8 && (S = 8), E || (k += l, k < 0 ? k = 0 : k > .5 && (k = .5)), ++M > F) switch (M = 0, ++L) {
                case 1:
                    F = b;
                    break;
                case 2:
                    F = c
            }
            switch (L) {
                case 0:
                    N = M * G;
                    break;
                case 1:
                    N = 1 + 2 * (1 - M * H) * B;
                    break;
                case 2:
                    N = 1 - M * I;
                    break;
                case 3:
                    N = 0, K = !0
            }
            x && (z += y, U = 0 | z, U < 0 ? U = -U : U > 1023 && (U = 1023)), p && r && (q *= r, q < 1e-5 ? q = 1e-5 : q > .1 && (q = .1)), Z = 0;
            for (var ca = 8; ca--;) {
                if (T++, T >= S && (T %= S, 3 == E))
                    for (var da = aa.length; da--;) aa[da] = 2 * Math.random() - 1;
                switch (E) {
                    case 0:
                        Y = T / S < k ? .5 : -.5;
                        break;
                    case 1:
                        Y = 1 - T / S * 2;
                        break;
                    case 2:
                        W = T / S, W = 6.28318531 * (W > .5 ? W - 1 : W), Y = 1.27323954 * W + .405284735 * W * W * (W < 0 ? 1 : -1), Y = .225 * ((Y < 0 ? -1 : 1) * Y * Y - Y) + Y;
                        break;
                    case 3:
                        Y = aa[Math.abs(32 * T / S | 0)]
                }
                p && (Q = R, s *= t, s < 0 ? s = 0 : s > .1 && (s = .1), u ? (P += (Y - R) * s, P *= J) : (R = Y, P = 0), R += P, O += R - Q, O *= 1 - q, Y = O), x && (_[V % 1024] = Y, Y += _[(V - U + 1024) % 1024], V++), Z += Y
            }
            Z *= .125 * N * v, m[ba] = Z >= 1 ? 1 : Z <= -1 ? -1 : Z
        }
        return n
    }
}
var synth = new ss;
var ac;
sound = function(a) {
	if (!gs) { return; }
	var b = function(a) {
	//	debugger;
		ac = ac || new AudioContext;
		synth._p._s(a);
		var c = synth.tr();
		var e = ac.createBuffer(1, c + 1, ac.sampleRate);
		synth._s(e.getChannelData(0), c);
		return e
	}(a),
	d = ac.createBufferSource();
    d.buffer = b, d.connect(ac.destination), d.start(ac.currentTime)
};


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

var mountain = document.createElement("canvas");
mountain.width = 1008;
mountain.height = 480;
mr = new random(200);
generate = function(s) {
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
	ctx = mountain.getContext("2d");
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
generate();
generate();
generate();
mr.n();

var cloud = new Image(), clouds = [], player;
cloud.src = "c.png";
//var stats, xPanel;
load = function(s) {
	/*if (/iPhone|iPad|Android/i.test(navigator.userAgent)) {
		m.style.display = "block";
		m1.ontouchstart = function(e) {
			e.preventDefault();
			document.onkeydown({keyCode:37})
		}
		m1.ontouchend = function(e) {
			e.preventDefault();
			document.onkeyup({keyCode:37})
		}
		m2.ontouchstart = function(e) {
			e.preventDefault();
			document.onkeydown({keyCode:39})
		}
		m2.ontouchend = function(e) {
			e.preventDefault();
			document.onkeyup({keyCode:39})
		}
		m3.ontouchstart = function(e) {
			e.preventDefault();
			document.onkeydown({keyCode:38})
		}
		m3.ontouchend = function(e) {
			e.preventDefault();
			document.onkeyup({keyCode:38})
		}
	}*/
	//stats = new Stats();
	//xPanel = stats.addPanel( new Stats.Panel( 'x', '#ff8', '#221' ) );
	
	//stats.showPanel( 2 ); // 0: fps, 1: ms, 2: mb, 3+: custom
	//document.body.appendChild( stats.dom );

	
	//canvas = document.getElementById("canvas");
	c.width = 1008;
	c.height = 480;
	ctx = c.getContext("2d");
	ctx.fillStyle = "#D0F4F7"; //Sky color

	player = new P(40,200);
	
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
var gs = 0;
var level="                                               B B BBB B B          A A A A A A          ABA A A ABA            A A A   A     BBBC   A AAA   A TBBBAAADC   MM   I  TUAAAAAAADBBBBBBBBBBBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC         TAAAAAAAAAADC       TUAAAAAAAAAAADC     TUAAAAAAAAAAAAADC   TUAAAAAAAAAAAAAAADB BUAAAAAAAAA                   AA                   AA         O         AA         O         AA         O         AA         O         AA                   AA         J         AA  BBBBBBBBBBBBBBBBBAA                   AA                   AA B                 AAJA                 AAAA                 AAAA                 AA               A   AA               A  XAA      WWXWW    AAAAAA      BBBBB    AAAAAA             TBAAAAAA            TUAAAAAAA           TUAAAAAAAA          TUAAAAAAAAA         TUAAAAAAAAAA        TUAAAAAAAAAAABBBBBC             AAAAAAADC            AAAAAAAADC           AAAAAAAAADC          AAAAAAAAAADC         AAAAAAAAAAADC        AAAAAAAAAAAADC       AAAAAAAAAAAAADC      AAAAAAAAAAAAAADC     AAAAAAAAAAAAAAADB    AA              A    AA BB           A    AA A B               AA A A             JJAA A A          BBBBBAA AB                AA                   AA BBB               AA A A               AA AB  A N    N      AA A A AW           BAA A A A      N   N AAA     A           XAAA BBB A N    N     AAA A A AW           AAA ABA A      N   N AAA A A A           XAAA A A A N    N      AA     AW            AA A A A      N   N  AA A A A           XAAA ABA A N    N     AAA A A AW           AAA A A A          N AAA                 XAAA                   AA      W            AA      B            AA   BBBBBBBBBBBBBBBBAA                   AA                   AAJO                 AABO                 AA O                 AA O                 AA O                 AANJ                 AANB                 AAN                  AAN                  AAN                  AAJM                 AABM                 AA M                 AA M                 AALM                 AALJ                 AALB       TB        AAL       TUAMLMOLMNLAAL      TUAAONLNMNLOAAL     TUAAALONLOLMNAAJ    TUAAAANLMOLMLOAAB   TUAAAAAJJJJJJJJAA   TUAAAAAABBBBBBBBAA  TUAAAAAAA        AA BUAAAAAAAA        AA AAAAAAAAAA        AA                   AA                   AA                LMNAAJ               OMLAABBB             BBBAAAAA             AAAAA      L      L     AA      B      B     AA                   AA                   AA         LO        AA        WLOX       AA        ALOA       AA         LO        AA         LO        AA         LO        AA         LO        AA         LO        AA         JJ        AA         BB        AA       B    B      AA                   AA                   AA   B           B   AA                   AA                   AAB                 BAA                   AA                   AA   B           B   AA                   AA                   AABBBBBBB     BBBBBBBAA                   AA                   AA      BBBBBBB      AA                   AA                   AA                   AA                   AAW                 XAABBBBBBB     BBBBBBBAA      AW   XA      AA      AW   XA      AA      AW   XA      AA      AW   XA      AA      AW   XA      AA      AW   XA      AA      AW   XA      AA  A A AW   XA      AA  A A AW   XA      AA  AA  AW   XA      AA  A A AW   XA      AA  A A AW   XA      AA      AW   XA      AA  AAA AW   XA      AA    A AW   XA      AA    A AW   XA      AA   AA AW   XA      AA    A AW   XA      AA  AAA AW   XA      AA      AW   XA      AA   A  AW   XA      AA  AA  AW   XA      AA   A  AW   XA      AA   A  AW   XA      AA  AAA AW   XA      AA      AW   XA      AA      AW   XA      AA      AW   XA      AA  AAA AW   XA      AA  A   AW   XA      AA  AAA AW   XA      AA    A AW   XA      AA  AAA AW   XA      AA      AW   XA      AA  AAA AW   XA      AA    A AW   XA      AA    A AW   XA      AA  A A AW   XA      AA   AA AW   XA      AA      AW   XA      AA      AW   XA      AA      AW   XA      AA      A     A      AA      M            AA      M  J         AA   OO AAAAAAA      AA OO  O             AAO     OO           AAO       O   OO     AAO       O     O    AAW        OO    O   AA          O    O   AA          X     O  AA          A      O AA                   AA                  XAA                   AA  N B O B L B M B  AA  N A O A L A M A  AA  N A O A L A M A  AA  N A O A L A M A  AA  N A   A   A   A  AA  J A J A J A J    AAO BBBBBBBBBBBBBBBBBAAO                  AAO                  AAO                  AA                   AAJO                 AAAN                 AA M                 AA O              L  AA N          XNN  L AA M          BBB  L AA J          AAA   LAABBB               LAAAAA               LAA  A                AA  A               JAA  ABBBBBB       O BAA                BBAAA                AAAAA            O      AA            B      AA            A      AA        O          AA        B          AA        A          AA    O              AA    B              AA    A              AA              BBBBBAAB     LLL     AAAAAAA      LLL          AA                   AABBBBBBBBBBBBBBB    AAAAAAAAAAAAAAAAA    AA             NLM   AA            O   O  AA           O       AA          O        AA      T          JBAA     TU          AAAA    TUA           AAA   TUAAW J  B    XAAA BBUAAABBBBBABBBBAAAA A  NN   NN        AA A N  N N  N       AA        N  N       AA                   AA       B    B      AAJ      A    A      AABBBBBBBA    ABB    AA                  XAA     LL     LL     AA     LL            AA            TBBBBB AA           TU      AAOBBBBBBBBBBU  OO   AAO                  AAO       OO         AAO                  AAO                  AA                   AAJ    N             AAB         O      JMAA     J           BMAA     B    J       MAA                  MAA                  MAA                   AA                  JAA                  BAA                   AALNNN     O        BAALBBB           O   AAL        J         AAL        B     J   AAL              B   AAL                  AAJMNMNMNMNMNMNMNMN  AABBBBBBBBBBBBBBBBBB AA                  OAA                  OAA                  OAA                  OAA                   AA                  JAANLMNOL          OTBAANBBBBB          BUAAAN        J         AAN        B         AAN                  AAN                  AAJ                  AABBBBB         M    AA      N       B  N AA     LB    O     B AA     L     B       AA     L        L    AA     L        B    AA     BCOOOOOOOOOOOOAA     ADBBBBBBBBBBBBAA       AAAAAAAAAAAAAAW      AAAAAAAAAAAAAA       A           AA       A           AA       A           AA       A           AA     X A           AA     AAA           AA       A           AA       A           AA       A           AAW      A OL        AA       A NM        AA       A OL        AA       A NM        AA       A OL        AA       A NM        AA     X AJOL        AA     AAAB   MMM    AA            BBB    AA                 OOAA                 BBAAW             MLM  AABBBBBC        ONO  AAAAAAADC     BBBBBBBAAAAAAAADC    AAAAAAAAAAAAAAAADC          AAAAAAAAAADC  O      AAAAAAAAAAADC  O     AAAAAAAAAAAADC       AAAAAAAAAAAAADBB     AA                   AA                   AA                   AA                  XAA                   AA              MM   AA              BBBBBAA              AAAAAAA          N        AA       JJJJ        AA       BBBB        AA     N             AA  JJJJ             AA  BBBB             AA                   AAJ L                AAB L                AA   L               AA   L               AA   L               AA     M             AA   J M             AA   B M             AA      M            AA      M            AA      M            AA        N          AA      J  N         AA      B  N         AA          N        AA          N        AA          N        AA            O      AA          J  O     AA          B  O     AA              O    AA              O    AA              O    AA                L  AA              J  L AA              B  L AA                  LAA                  LAA                  LAA                   AA                  JAA    M             BAAOOOOB          OOOAAAOOOOA         BBBBAAAOOOOAJ         AAAAAAOOOOAB       L     AA    AA        L    AAJJJJAA MNJ     L   AABBBBAABBBB      L  AAAAAAAAAAAA       L AA                   AA                  XAA            NONO   AA        MM  BBBB   AA     L  BB         AA     B             AA                   AA     LLLL          AAN   TBBBBC    NN   AAN  TUAAAADCML NN   AAN BUAAAAAADBBBBBBBBAAN AAAAAAAAAAAAAAAAAAAN                  AAN                  AA                   AAJ LLL          OOO AABBBBB   MMMM   BBBNA         BBBB      NA                   NAA                  NAA        OOOO      NAA      TBBBBBC      AA  OOOTUAAAAADC OO JAABBBBBUAAAAAAADBBBBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
//level = level.replaceAll("Z","    ").split("");
level = level.split("");
for (var t in level) {
	level[t] = {type:level[t]!=" " ? level[t].charCodeAt(0)-64 : null};
	if (level[t].type==2 && !level[t-21].type && mr.n()>0.8) {
		level[t-21].type=[5,6,7,8,16,18][(mr.n()*6)|0];
	}
}
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

var speech = {};
speech[0] = " ";
speech[80] = "What's that?...";
speech[150] = "Oh!";
speech[250] = "I finally found the chest of the 404 gems!";
speech[520] = " ";
speech[610] = "Oh no!!!";
speech[700] = "I need to find all of them!";
speech[850] = " ";

go = 1;
var explode = 0,gems = [],extraX,extraY,ds,frame=0; //975;
function gameLoop (t) {
	//console.log(a);
	//stats.begin();
	extraX = 0;
	extraY = 0;
	
	if (frame<1000) {
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
				gems.push(new G(620, 240));
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
			player.js = 1;
			allowKeys = 1;
			floor.style.display = "block";
			ti.style.display = "block";
			sc.style.display = "block";
			//ds = Date.now();
			ds = t;
		}
	}
	if (gs) {
		frame++;
	}
	ctx.fillRect(0, 0, 1008, 480);
	

	for (var i=0; i<clouds.length; i++) {
		if (clouds[i].x<-200) { clouds[i].x = 1200; }
		ctx.drawImage(cloud, clouds[i].x-=clouds[i].speed,clouds[i].y, 128*clouds[i].size, 71*clouds[i].size);
	}
	ctx.drawImage(mountain,0,0,1008,592);

	var x=0;
	start = Math.max(0,Math.round(player.y/48)-6);
	var y = -48+(48*start);
	
	
	
	
	//var debugNbDraw = 0;
	for (var i=start*21; i<(start+11)*21; i++) {
		if (i%21==0) {
			y+=48;
			x=0;
		}
		
		level[i].x = x;
		level[i].y = y;
		
		if (level[i].type!=null) {
			//debugNbDraw++;
			var tN = level[i].type-1;
			var dY = extraX;
			var dX = extraY;
			if ([11,12,13,14].indexOf(tN)!=-1) {
				dY = Math.sin(frame/24)*5;
			}
			var angle = 0;
			
			if (tN==8) {
				dX = Math.random()*explode;
				dY = -Math.random()*explode;
			} else if (tN==22) {
				tN = 10;
				angle = Math.PI/4;
			} else if (tN==23) {
				tN = 10;
				angle = -Math.PI/4;
			}
			
			if (angle) {
				ctx.save();
				ctx.translate(x+24, y+dY+deltaY+24);
				ctx.rotate(angle);
				ctx.drawImage(img,tN*48,0,48,48, -24 , -24,48,48);
				ctx.restore();
			} else {
				ctx.drawImage(img,tN*48,0,48,48,x+dX , y+dY+deltaY,48,48);
			}
			
			if (tN==15) {
				if (frame%(180)==0) {
					blink[i] = ((Math.random()*20)|0)+10;
				}
				if (blink[i]) {
					blink[i]--;
				} else {
					ctx.drawImage(img,16*48,0,48,48,x,y+deltaY,48,48);
				}
			}
			if (tN==10 && level[i].returnTo==0) {
				level[i].type=10;
			} else if (tN==10) {
				level[i].returnTo--;
			}
//			ctx.fillText(i, x+dX , y+dY+deltaY+24); //debug
		}
		x+=48;
	}
	//gems.forEach(g => g.update());
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
	
	//stats.end();
	//xPanel.update( debugNbDraw, 460 );
}


G = function(x, y) {
	this.x = x;
	this.y = y;
	this.speed = 5 + Math.random()*15;
	this.angle = Math.random()*Math.PI*2;
	this.life = 300;
	this.tN = [11,12,13,14][(Math.random()*4)|0];
	this.vY = -10;
	this.update = function() {
		this.life--;
		if (!this.life) {
			gems = [];
		}
		this.vY+=0.1;
		ctx.drawImage(img,this.tN*48,0,48,48,this.x,this.y,48,48);
		this.x+=Math.sin(this.angle)*this.speed;
		this.y+=Math.cos(this.angle)*this.speed+this.vY;
	}
}


var blink = [];
var images = [];
S = function(sf, lf, r) {
	this.fi = sf;
	this.sf = sf;
	this.lf = lf;
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
			if (++this.fi>=this.lf) {
				this.fi = this.sf;
			}
		}
		this.draw();
	}
	this.draw = function () {
		ctx.drawImage(
			images[this.name],
			this.fi * 32,
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



var score = 0;
keys = [];
deltaY = 0;
allowKeys = 0;
document.onkeydown = function(e) {
	if (allowKeys) {
		keys[e.keyCode] = 1;
	}
}
document.onkeyup = function(e) {
	if (allowKeys) {
		keys[e.keyCode] = 0;
		if (e.keyCode==38) {
			player.js = 1;
		}
	}
	if (!gs) {
		h.remove();
		iA();
		gs = 1;
	}
}

g = function(x, y) {
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

P = function(x, y) {
	this.state = "idle";
	this.x=x;
	this.y = y;
	this.d = 1;
	this.s = {};
	this.v = {x:0, y:1};
	this.js = 1;
	
	this.s.idle = new S(6, 11);
	this.s.idleL = new S(6, 11, 1);
	
	this.s.walk = new S(1, 5);
	this.s.walkL = new S(1, 5, 1);
	
	this.s.jump = new S(12, 14);
	this.s.jumpL = new S(12, 14, 1);
	
	this.s.fall = new S(15, 17);
	this.s.fallL = new S(15, 17, 1);
	
	this.sprite = this.s[this.state];
	this.update = function() {
		var oldState = this.state;
		floor2.innerHTML = 424 - (this.y/48)|0;
		if (Math.round(this.y/48)==20) {
			go = 0;
			keys = [];
			f.innerHTML = "CONGRATULATIONS !<br/>You reach the 404th floor in "+ti.innerHTML+"<br/>"+score+" / 404 gems found<br/><br/><a href='//twitter.com/intent/tweet?hashtags=js13k&url="+location+"&text=I beat "+document.title+" in "+ti.innerHTML+" with "+score+"/404 gems !'>Share on twitter</a>";
			
			f.style.display="flex";
		}
		
		if (this.state!="jump" && this.state!="fall") {
			this.v.x = 0;
			if (keys[39]) {
				this.v.x = 6; //DEBUG 6
				this.d = 1;
			} else if (keys[37]) {
				this.v.x = -6;  //DEBUG 6
				this.d = 0;
			}
			
			if (keys[38]) {
				if (this.js) {
					this.v.y = -18;
					sound([0,,0.1945,,0.2019,0.3725,,0.2486,,,,,,0.3973,,,,,1,,,0.0979,,0.5]);
					this.js = 0;
				}
			}
		} else {
			if (keys[39]) {
				this.d = 1;
				if (this.v.x<0) {
					this.v.x*=0.90; //-10  -3
				}
				if (this.v.x>6.2) {
					this.v.x*=0.95; //+10
				}
				if (this.v.x<6.2) {
					this.v.x+=0.5; //-10  -3  +3
				}
			} else if (keys[37]) {
				this.d = 0;
				if (this.v.x>0) {
					this.v.x*=0.90; //+3 +10 
				}
				if (this.v.x<-6.2) {
					this.v.x*=0.95; //-10
				}
				if (this.v.x>-6.2) {
					this.v.x-=0.5; // -3 +3 10
				}
			} else {
				this.v.x*=0.90;
			}
		}
		this.v.y+=1.01;
		if (this.v.y>47) {
			this.v.y = 47;
		}
		var onSlope = 0;
		if (this.v.y>0) {
			y = 48;
			
			//debugCollid = 0;
			
			//Si je vais vers la droite, il faut faire 36->24->12
			//Si je vais vers la gauche, il faut faire 12->24->36
			/*xStart = player.direction==1 ? 36 : 12;
			xStep = player.direction==1 ? -12 : 12;
			xEnd = xStart + 2*xStep;*/
			
			//for (var x=12; x<=36; x+=12) {
			//for (var x=xStart; x!=xEnd; x+=xStep) {
			for (x of [24,12,36]) {
			//for (x of [12,24,36]) {
			
				//console.log("Je vérifie la collision en ",this.x + x + this.v.x, this.y + this.v.y + y);
				if (c = g(this.x + x + this.v.x, this.y + this.v.y + y)) {
					this.v.y = 0;
					this.y = c.y - 48;
					switch (c.type) {
						case 10:
						case 11:
							this.v.y = -24;
							this.state = "jump";
							c.type=11;
							c.returnTo = 5;
							sound([0,,0.16,0.33,0.59,0.35,,0.02,-0.02,0.69,0.3,,,0.31,,0.36,,,1,,,0.0715,,0.5]);
							break;
						case 23:
						case 24:
							this.v.y = -25;
							this.v.x = c.type==23 ? 24 : -24;
							this.state = "jump";
							player.x = c.x;
							sound([0,,0.16,0.33,0.59,0.35,,0.02,-0.02,0.69,0.3,,,0.31,,0.36,,,1,,,0.0715,,0.5]);
							//break;
						case 3: //Pente qui monte vers la gauche
							this.y+=Math.min(48, this.x +24 + this.v.x - c.x);
							onSlope = 1;
							break;
						
						case 20: //Pente qui monte vers la droite
							//var debugAvant = this.y;
							//Pour corriger le bug, il faudraut limiter le delta à 0 au minimum si en fasse du joueur, ce n'est plus une rampe
							this.y+=Math.min(48,48-(this.x + 24 + this.v.x - c.x));
						//	console.log("Collision, je suis en Y=",debugAvant+48, "Je rajoute", Math.min(48,47-(this.x + 24 + this.v.x - c.x)), "Je passe donc en ",this.y+48);
							onSlope = 1;
							break;
					}
					//debugCollid = 1;
					//console.log(c);
					//ctx.strokeRect(c.x, c.y-this.y+256, 48,48);
					break;
				}
			}
			//if (!debugCollid) {
			//	console.log('Pas de c');
			//}
		}
		if (!onSlope) { 
			if (this.v.y<0) {
				y = 0;
				for (var x=12; x<=36; x+=12) {
					if (c = g(this.x + x + this.v.x, this.y + this.v.y + y)) {
						this.v.y = 0;
						this.y = c.y + 48;
						//console.log("ici");
						break;
					}
				}
			}
			if (this.v.x>0) {
				x = 48;
				a:
				for (var y=0; y<=47; y+=12) {
					if (c = g(this.x + x + this.v.x, this.y + this.v.y + y)) {
						switch (c.type) {
							case 3:
								continue;
							case 23:
							case 24:
								this.v.y = -25;
								this.v.x = c.type==23 ? 24 : -24;
								this.state = "jump";
								player.x = c.x;
								sound([0,,0.16,0.33,0.59,0.35,,0.02,-0.02,0.69,0.3,,,0.31,,0.36,,,1,,,0.0715,,0.5]);
								break a;
							case 20:
								this.y+=Math.min(0, -(this.x+24+this.v.x - c.x));
								break a;
						}
						this.v.x = 0;
						this.x = c.x - 48;
						break;
					}
				}
			}
			if (this.v.x<0) {
				x = 0;
				a:
				for (var y=0; y<=47; y+=12) {
					if (c = g(this.x + x + this.v.x, this.y + this.v.y + y)) {
						switch (c.type) {
							case 20:
								continue;
							case 23:
							case 24:
								this.v.y = -25;
								this.v.x = c.type==23 ? 24 : -24;
								this.state = "jump";
								player.x = c.x;
								sound([0,,0.16,0.33,0.59,0.35,,0.02,-0.02,0.69,0.3,,,0.31,,0.36,,,1,,,0.0715,,0.5]);
								break a;
							case 3:
								this.y+=Math.min(48, Math.min(48,this.x+24+this.v.x - c.x)-48);
								break a;
						}
						this.v.x = 0;
						this.x = c.x + 48;
						break;
					}
				}
			}
			//console.log("Pas on slope", this.v.y);
		}
		
		this.state = "idle";
		if (this.v.x!=0) {
			this.state = "walk";
		}
		if (this.v.y>0) {
			this.state = "fall";
		} else if (this.v.y<0) {
			this.state = "jump";
		}
		
		if ((oldState=="fall" || oldState=="jump") && (this.state=="walk" || this.state=="idle")) {
			//console.log(oldState, this.state);
			sound([3,,0.0137,,0.1662,0.31,,-0.5727,,,,,,,,,,,1,,,,,0.5]);
		} else {
			//console.log(oldState, this.state);
		}
		//console.log(this.v.y);
		
		this.y+=this.v.y;
		this.x+=this.v.x;
		this.sprite = this.s[this.state+(!this.d ? "L" : "")];
		this.sprite.x = this.x + extraX;
		this.sprite.y = this.y + extraY; // + penteY;
		this.sprite.update();
	}
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
    this.generate = function () {
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

    // Create a WAVE formatted Uint8Array from the generated audio data
    this.createWave = function() {
	   
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

iA = function() {
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
// Génération de la musique
//
var m = new CPlayer();
while (!m.generate()) { }
var wave = m.createWave();

var scale=1;
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