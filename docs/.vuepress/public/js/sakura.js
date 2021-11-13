var stop, staticx;
			var img = new Image();
			img.src = "data:image/png;base64,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";

			function Sakura(x, y, s, r, fn) {
				this.x = x;
				this.y = y;
				this.s = s;
				this.r = r;
				this.fn = fn;
			}

			Sakura.prototype.draw = function(cxt) {
				cxt.save();
				var xc = 40 * this.s / 4;
				cxt.translate(this.x, this.y);
				cxt.rotate(this.r);
				cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
				cxt.restore();
			}

			Sakura.prototype.update = function() {
				this.x = this.fn.x(this.x, this.y);
				this.y = this.fn.y(this.y, this.y);
				this.r = this.fn.r(this.r);
				if(this.x > window.innerWidth ||
					this.x < 0 ||
					this.y > window.innerHeight ||
					this.y < 0
				) {
					this.r = getRandom('fnr');
					if(Math.random() > 0.4) {
						this.x = getRandom('x');
						this.y = 0;
						this.s = getRandom('s');
						this.r = getRandom('r');
					} else {
						this.x = window.innerWidth;
						this.y = getRandom('y');
						this.s = getRandom('s');
						this.r = getRandom('r');
					}
				}
			}

			SakuraList = function() {
				this.list = [];
			}
			SakuraList.prototype.push = function(sakura) {
				this.list.push(sakura);
			}
			SakuraList.prototype.update = function() {
				for(var i = 0, len = this.list.length; i < len; i++) {
					this.list[i].update();
				}
			}
			SakuraList.prototype.draw = function(cxt) {
				for(var i = 0, len = this.list.length; i < len; i++) {
					this.list[i].draw(cxt);
				}
			}
			SakuraList.prototype.get = function(i) {
				return this.list[i];
			}
			SakuraList.prototype.size = function() {
				return this.list.length;
			}

			function getRandom(option) {
				var ret, random;
				switch(option) {
					case 'x':
						ret = Math.random() * window.innerWidth;
						break;
					case 'y':
						ret = Math.random() * window.innerHeight;
						break;
					case 's':
						ret = Math.random();
						break;
					case 'r':
						ret = Math.random() * 6;
						break;
					case 'fnx':
						random = -0.5 + Math.random() * 1;
						ret = function(x, y) {
							return x + 0.5 * random - 1.7;
						};
						break;
					case 'fny':
						random = 1.5 + Math.random() * 0.7
						ret = function(x, y) {
							return y + random;
						};
						break;
					case 'fnr':
						random = Math.random() * 0.03;
						ret = function(r) {
							return r + random;
						};
						break;
				}
				return ret;
			}

			function startSakura() {

				requestAnimationFrame = window.requestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					window.oRequestAnimationFrame;
				var canvas = document.createElement('canvas'),
					cxt;
				staticx = true;
				canvas.height = window.innerHeight;
				canvas.width = window.innerWidth;
				canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
				canvas.setAttribute('id', 'canvas_sakura');
				document.getElementsByTagName('body')[0].appendChild(canvas);
				cxt = canvas.getContext('2d');
				var sakuraList = new SakuraList();
				for(var i = 0; i < 50; i++) {
					var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
					randomX = getRandom('x');
					randomY = getRandom('y');
					randomR = getRandom('r');
					randomS = getRandom('s');
					randomFnx = getRandom('fnx');
					randomFny = getRandom('fny');
					randomFnR = getRandom('fnr');
					sakura = new Sakura(randomX, randomY, randomS, randomR, {
						x: randomFnx,
						y: randomFny,
						r: randomFnR
					});
					sakura.draw(cxt);
					sakuraList.push(sakura);
				}
				stop = requestAnimationFrame(function() {
					cxt.clearRect(0, 0, canvas.width, canvas.height);
					sakuraList.update();
					sakuraList.draw(cxt);
					stop = requestAnimationFrame(arguments.callee);
				})
			}

			// window.onresize = function() {
			// 	var canvasSnow = document.getElementById('canvas_snow');
			// 	canvasSnow.width = window.innerWidth;
			// 	canvasSnow.height = window.innerHeight;
			// }

			img.onload = function() {
				startSakura();
			}

			function stopp() {
				if(staticx) {
					var child = document.getElementById("canvas_sakura");
					child.parentNode.removeChild(child);
					window.cancelAnimationFrame(stop);
					staticx = false;
				} else {
					startSakura();
				}
			}