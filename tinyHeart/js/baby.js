var babyObj = function() {
	this.x;
	this.y;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
	this.angle;
}
babyObj.prototype.init = function() {
	this.x = canWidth / 2 + 50;
	this.y = canHeight / 2 - 50;
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
	this.babyTail.src = "./src/babyTail0.png";
	this.angle = 0;

}
babyObj.prototype.draw = function() {
	this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);
	// lerb 角度
	var deltaX = mom.x - this.x;
	var deltaY = mom.y - this.y;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.6);
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babyBody, -this.babyBody.width / 2, -this.babyBody.height / 2);
	ctx1.drawImage(this.babyTail, -this.babyTail.width / 2 + 25, -this.babyTail.height / 2);
	ctx1.drawImage(this.babyEye, -this.babyEye.width / 2, -this.babyEye.height / 2);

	ctx1.restore();
}