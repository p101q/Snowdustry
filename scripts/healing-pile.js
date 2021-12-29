const healingPile = extend(MendProjector, "healing-pile", {});

healingPile.buildType = () => extend(MendProjector.MendBuild, healingPile, {
	updateTile(){
		this.damage(1);
		this.super$updateTile();
	}
});