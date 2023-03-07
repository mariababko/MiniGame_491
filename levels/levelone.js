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

        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 1);
        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 1);

        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 580);

        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 950);

        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 1300);

        setTimeout(() => {this.game.addEntity(new Asteroid(this.game, false));}, 1620);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 1920);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 2270);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 2530);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 2870);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 3150);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 3470);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 3780);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 4150);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 4420);

        setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 4810);

        //setTimeout(() => { this.game.addEntity(new Asteroid(this.game, false));}, 3780);





        this.game.addEntity(new Earth(this.game));
    }

    update() {
        // method not used but declaration is necessary for game engine
    };

    draw(ctx) {
        // method not used but declaration is necessary for game engine
    };
}