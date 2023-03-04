const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// Background
ASSET_MANAGER.queueDownload("./sprites/space_background.png");
ASSET_MANAGER.queueDownload("./sprites/earth.png");

//Entities
ASSET_MANAGER.queueDownload("./sprites/asteroid1.png");
ASSET_MANAGER.queueDownload("./sprites/asteroid2.png");
ASSET_MANAGER.queueDownload("./sprites/asteroid3.png");
ASSET_MANAGER.queueDownload("./sprites/shooting_area.png");
ASSET_MANAGER.queueDownload("./sprites/green_area.png");
ASSET_MANAGER.queueDownload("./sprites/explosion.png");
ASSET_MANAGER.queueDownload("./sprites/health_outline.png");
ASSET_MANAGER.queueDownload("./sprites/health.png");

//Music
ASSET_MANAGER.queueDownload("./music/noragami_op2.mp3");



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
