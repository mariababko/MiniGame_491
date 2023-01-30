const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/space_background.png");
ASSET_MANAGER.queueDownload("./Sprites/earth.png");
ASSET_MANAGER.queueDownload("./Sprites/asteriod1.png");
ASSET_MANAGER.queueDownload("./Sprites/asteriod2.png");
ASSET_MANAGER.queueDownload("./Sprites/asteriod3.png");
ASSET_MANAGER.queueDownload("./Sprites/shooting_area.png");
ASSET_MANAGER.queueDownload("./Sprites/green_area.png");
ASSET_MANAGER.queueDownload("./Sprites/explosion.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	var green_area = new Green_Area(gameEngine);
	//green_area.removeFromWorld = true;
	gameEngine.addEntity(green_area);


	gameEngine.addEntity(new Shooting_Area(gameEngine));

	gameEngine.addEntity(new Asteriod(gameEngine));

	setTimeout(() => { gameEngine.addEntity(new Asteriod(gameEngine)); }, 2000);

	setTimeout(() => { gameEngine.addEntity(new Asteriod(gameEngine)); }, 3000);

	gameEngine.addEntity(new Earth(gameEngine));

	//gameEngine.addEntity(new Explosion(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
