class Scenemanager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.y = 0;

        this.healthGreenBar = new HealthGreenBar(this.game, 37, 30);

        this.loadLevel(titleScreen);
    }

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadLevel(level) {
        this.currentLevel = level;

        // title screen
        if (this.currentLevel === titleScreen) {
            this.clearEntities();
            this.game.addEntity(new TitleScreen(this.game));
        }

        // win screen
        if (this.currentLevel === winScreen) {
            this.clearEntities();
            this.healthGreenBar = new HealthGreenBar(this.game, 37, 30);
            this.game.addEntity(new WinScreen(this.game));
        }

        // lose screen
        if (this.currentLevel === loseScreen) {
            this.clearEntities();
            this.healthGreenBar = new HealthGreenBar(this.game, 37, 30);
            this.game.addEntity(new LoseScreen(this.game));
        }

        if (this.currentLevel === levelOne) {
            this.clearEntities();
            this.game.addEntity(new LevelOne(this.game, this.healthGreenBar));
            ASSET_MANAGER.playAsset(this.currentLevel.music);
        }

    };

    updateAudio() {
        var mute = document.getElementById("mute").checked;
        var volume = document.getElementById("volume").value;

        ASSET_MANAGER.muteAudio(mute);
        ASSET_MANAGER.adjustVolume(volume);

    };

    update() {

        if (this.currentLevel === levelOne) {
            //green area
            if (this.game.button1) {
                this.game.addEntityToTop(new Green_Area(this.game, 90, 457, this.game.button1));
            }
            if (this.game.button2) {
                this.game.addEntityToTop(new Green_Area(this.game, 307, 457, this.game.button2));
            }
            if (this.game.button3) {
                this.game.addEntityToTop(new Green_Area(this.game, 526, 457, this.game.button3));
            }
            if (this.game.button4) {
                this.game.addEntityToTop(new Green_Area(this.game, 747, 457, this.game.button4));
            }
        }

        this.updateAudio();

    };

    draw(ctx) {
        //
    };

}