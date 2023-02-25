class LevelOne {
    constructor(game, healthGreenBar) {
        this.game = game;
        this.healthGreenBar = healthGreenBar;

        this.setUpLevel();
    };

    setUpLevel() {
        this.game.addEntity(new HealthOutline(this.game));
        this.game.addEntity(this.healthGreenBar);

        this.game.addEntity(new HealthGreyBar(this.game));


        this.game.addEntity(new Shooting_Area(this.game));

        this.game.addEntity(new Asteroid(this.game, false));

        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 2000);

        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 3000);

        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 4000);

        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 5000);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 6000);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 7000);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 8000);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, true));}, 9000);


        this.game.addEntity(new Earth(this.game));
    }

    update() {
        // method not used but declaration is necessary for game engine
    };

    draw(ctx) {
        // method not used but declaration is necessary for game engine
    };
}