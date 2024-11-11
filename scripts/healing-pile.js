const healingPile = extend(MendProjector, "healing-pile", {});

healingPile.buildType = () => extend(MendProjector.MendBuild, healingPile, {
	time: 15,
	updateTile(){
		if(this.time<=0){
			this.damage(10);
			this.time=15;
		}
		this.time--;
		this.super$updateTile();
	}
});