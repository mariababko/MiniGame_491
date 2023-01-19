const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./space_background.png");
ASSET_MANAGER.queueDownload("./earth.png");
ASSET_MANAGER.queueDownload("./asteriod1.png");
ASSET_MANAGER.queueDownload("./asteriod2.png");
ASSET_MANAGER.queueDownload("./asteriod3.png");
ASSET_MANAGER.queueDownload("./shooting_area.png");
ASSET_MANAGER.queueDownload("./explosion.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Shooting_Area(gameEngine));

	gameEngine.addEntity(new Asteriod(gameEngine));

	setTimeout(() => { gameEngine.addEntity(new Asteriod(gameEngine)); }, 2000);

	setTimeout(() => { gameEngine.addEntity(new Asteriod(gameEngine)); }, 3000);

	gameEngine.addEntity(new Earth(gameEngine));

	//gameEngine.addEntity(new Explosion(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
