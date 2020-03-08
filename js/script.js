function Jerry(){
    this.x = 200;
    this.y = 300;
    this.speedX = 10;
    this.speedY = 10;
    this.width = 25;
    this.height = 25;
    this.pointCounter = 0;

    this.move = function(edit){
        if(edit === 'left'){
            this.x -= this.speedX;
        }else if(edit === 'right'){
            this.x += this.speedX;
        }else if(edit === 'right'){
            this.x -= this.speedY;
        }else if(edit === 'right'){
            this.x += this.speedY;
        }
    }
}

function Tomas(){
	tomCounter = 1;
	this.x = 50;
    this.y = 50;
    this.speedX = 10;
	this.speedY = 5;
	this.width = 50;
	this.height = 50;


    this.move = function(edit){
        if(edit === 'left'){
            this.x -= this.speedX;
        }else if(edit === 'right'){
            this.x += this.speedX;
        }else if(edit === 'right'){
            this.x -= this.speedY;
        }else if(edit === 'right'){
            this.x += this.speedY;
        }
    }

	this.spawn = function(){
		setInterval(function(){
			tomCounter++;
		}, 8000);
	}
}