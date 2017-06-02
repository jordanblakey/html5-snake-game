window.onload=function() {
		canv=documment.getElementById("gc");
		ctx=canv.getContext("2d");
		document.addEventListener("keydown", keyPush);
		setInterval(game, 1000 / 15);
	}

	playerx = playery = 10;
	gamesize = tilecount = 20;
	applex = appley = 15;
	xvelocity = yvelocity = 0;
	trail = [];
	tail = 5;

	function game() {
		playerx += xvelocity;
		playery += yvelocity;
		if(playerx < 0) {
			playerx = tilecount - 1;
		}
		if(playerx > tilecount - 1) {
			playerx = 0;
		}
		if(playery < 0) {
			playery = tilecount - 1;
		}
		if(playery > tilecount - 1) {
			playery = 0;
		}
		ctx.fillStyle="black";
		ctx.fillRect(0, 0, canv.width, canv.height);

		ctx.fillStyle="lime";
		for(var i=0; i < trail.length; i++) {
			ctx.fillRect(trail[i].x*gamesize, trail[i].y*gamesize, gamesize - 2, gamesize - 2);
			if(trail[i].x==playerx && trail[i].y==playery) {
				tail = 5;
			}
		}
		trail.push({x:playerx, y:playery});
		while(trail.length > tail) {
			trail.shift();
		}

		if(applex==playerx && appley==playery) {
			tail++;
			applex=Math.floor(Math.random() * tilecount);
			appley=Math.floor(Math.random() * tilecount)
		}

		ctx.fillStyle="red";
		ctx.fillRect(applex * gamesize, appley * gamesize, gamesize - 2, gamesize - 2);
	}

	function keyPush(evt) {
		switch(evt.keyCode) {
			case 37:
				xvelocity = -1;
				yvelocity = 0;
				break;
			case 38:
				xvelocity = 0;
				yvelocity = -1;
				break;
			case 39:
				xvelocity = 1;
				yvelocity = 0;
				break;
			case 40:
				xvelocity = 0; yvelocity = 1;
				break;
		}
	}
