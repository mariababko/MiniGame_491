const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./space_background.png");
ASSET_MANAGER.queueDownload("./earth.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Earth(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
