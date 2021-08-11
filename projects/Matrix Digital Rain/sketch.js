var symbolSize = 30;
var streams = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	var x = 0;
	for (var i = 0; i <= width/ symbolSize; i++) {
		var stream = new Stream(); 
		stream.generateSymbols(
			x, 
			random(-1000, 0)
		);
		streams.push(stream);
		x += symbolSize
	}
	textSize(symbolSize);
}

function draw() {
	background(0);
	streams.forEach(function(stream) {
		stream.render();
	});

}

function Symbol(x, y, speed, first) {
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.switchInterval = round(random(2,30));
	this.first = first;

	this.setToRandomSymbol = function() {
		if (frameCount % this.switchInterval == 0) {
			this.value = String.fromCharCode(
				0x30A0 + round(random(0, 96))
			);
		}
		
	}

	this.rain = function() {
		this.y = (this.y >= height) ? 0 : this.y += this.speed;	
	}
}

function Stream() {
	this.symbols = [];
	this.totalSymbols = round(random(5, 15));
	this.speed = random(5,8);

	this.generateSymbols = function(x, y) {
		var first = round(random(0,1)) == 1;
		for (var i = 0; i <= this.totalSymbols; i++) {
			symbol = new Symbol(x, y, this.speed, first); 
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			first = false;
		}	
	}

	this.render = function() {
		this.symbols.forEach(function(symbol) {
			if (symbol.first) {
				fill(213, 255, 213);
			} else {
				fill(0, 228, 61);
			}
			text(symbol.value, symbol.x, symbol.y);
			symbol.rain();
			symbol.setToRandomSymbol();
		});
	}

}