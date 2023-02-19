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
ASSET_MANAGER.queueDownload("./Sprites/health_outline.png");
ASSET_MANAGER.queueDownload("./Sprites/health.png");



ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);

	new Scenemanager(gameEngine);

	gameEngine.start();
});
