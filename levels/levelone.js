class LevelOne {
    constructor(game, healthGreenBar, asteroidCreation) {
        this.game = game;
        this.healthGreenBar = healthGreenBar;
        this.asteroidCreation = asteroidCreation;

        this.setUpLevel();
    };

    setUpLevel() {
        this.game.addEntity(new HealthOutline(this.game));
        this.game.addEntity(this.healthGreenBar);

        this.game.addEntity(new HealthGreyBar(this.game));


        this.game.addEntity(new Shooting_Area(this.game));

        this.generateAsteroids();

        this.game.addEntity(new Earth(this.game));
    }

    generateAsteroids(){
        this.asteroidCreation.createAsteroidFalse(0);
        this.asteroidCreation.createAsteroidFalse(0);

        this.asteroidCreation.createAsteroidFalse(580);
        this.asteroidCreation.createAsteroidFalse(950);

        this.asteroidCreation.createAsteroidFalse(1300);
        this.asteroidCreation.createAsteroidFalse(1620);

        this.asteroidCreation.createAsteroidFalse(1920);
        this.asteroidCreation.createAsteroidFalse(2270);

        this.asteroidCreation.createAsteroidFalse(2530);
        this.asteroidCreation.createAsteroidFalse(2870);

        this.asteroidCreation.createAsteroidFalse(3150);
        this.asteroidCreation.createAsteroidFalse(3470);

        this.asteroidCreation.createAsteroidFalse(3780);
        this.asteroidCreation.createAsteroidFalse(4150);

        this.asteroidCreation.createAsteroidFalse(4420);
        this.asteroidCreation.createAsteroidFalse(4810);

        this.asteroidCreation.createAsteroidFalse(5000);
        this.asteroidCreation.createAsteroidFalse(5530);

        this.asteroidCreation.createAsteroidFalse(5810);
        this.asteroidCreation.createAsteroidFalse(6210);

        this.asteroidCreation.createAsteroidFalse(6540);
        this.asteroidCreation.createAsteroidFalse(6850);

        this.asteroidCreation.createAsteroidFalse(7430);
        this.asteroidCreation.createAsteroidFalse(7570);

        this.asteroidCreation.createAsteroidFalse(8040);
        this.asteroidCreation.createAsteroidFalse(8500);

        this.asteroidCreation.createAsteroidFalse(8790);
        this.asteroidCreation.createAsteroidFalse(9190);

        this.asteroidCreation.createAsteroidFalse(9470);
        this.asteroidCreation.createAsteroidFalse(9800);

        this.asteroidCreation.createAsteroidFalse(10080);
        this.asteroidCreation.createAsteroidFalse(10500);

        this.asteroidCreation.createAsteroidFalse(10400);
        this.asteroidCreation.createAsteroidFalse(11130);

        this.asteroidCreation.createAsteroidFalse(11440);
        this.asteroidCreation.createAsteroidFalse(11740);

        this.asteroidCreation.createAsteroidFalse(12050);
        this.asteroidCreation.createAsteroidFalse(12580);

        this.asteroidCreation.createAsteroidFalse(12700);
        this.asteroidCreation.createAsteroidFalse(13270);

        this.asteroidCreation.createAsteroidFalse(13640);
        this.asteroidCreation.createAsteroidFalse(13969);

        this.asteroidCreation.createAsteroidFalse(14300);
        this.asteroidCreation.createAsteroidFalse(14630);

        this.asteroidCreation.createAsteroidFalse(14950);
        this.asteroidCreation.createAsteroidFalse(15280);

        this.asteroidCreation.createAsteroidFalse(15890);
        this.asteroidCreation.createAsteroidFalse(16300);

        this.asteroidCreation.createAsteroidFalse(16560);
        this.asteroidCreation.createAsteroidFalse(17180);

        this.asteroidCreation.createAsteroidFalse(17640);
        this.asteroidCreation.createAsteroidFalse(18560);

        this.asteroidCreation.createAsteroidFalse(18830);
        this.asteroidCreation.createAsteroidFalse(19180);

        this.asteroidCreation.createAsteroidFalse(19450);
        this.asteroidCreation.createAsteroidFalse(19800);

        this.asteroidCreation.createAsteroidFalse(20180);
        this.asteroidCreation.createAsteroidFalse(20480);

        this.asteroidCreation.createAsteroidFalse(21140);
        this.asteroidCreation.createAsteroidFalse(21770);

        this.asteroidCreation.createAsteroidFalse(22320);
        this.asteroidCreation.createAsteroidFalse(22940);

        this.asteroidCreation.createAsteroidFalse(23160);
        this.asteroidCreation.createAsteroidFalse(23710);

        this.asteroidCreation.createAsteroidFalse(24320);
        this.asteroidCreation.createAsteroidFalse(24720);

        this.asteroidCreation.createAsteroidFalse(25010);
        this.asteroidCreation.createAsteroidFalse(26280);

        this.asteroidCreation.createAsteroidFalse(27590);
        this.asteroidCreation.createAsteroidFalse(28860);

        this.asteroidCreation.createAsteroidFalse(30180);
        this.asteroidCreation.createAsteroidFalse(31470);

        this.asteroidCreation.createAsteroidFalse(32770);
        this.asteroidCreation.createAsteroidFalse(34080);

        this.asteroidCreation.createAsteroidFalse(35350);
        this.asteroidCreation.createAsteroidFalse(36680);

        this.asteroidCreation.createAsteroidFalse(37980);
        this.asteroidCreation.createAsteroidFalse(38610);

        this.asteroidCreation.createAsteroidFalse(39230);
        this.asteroidCreation.createAsteroidFalse(39790);

        this.asteroidCreation.createAsteroidFalse(40430);
        this.asteroidCreation.createAsteroidFalse(41140);

        this.asteroidCreation.createAsteroidFalse(41740);
        this.asteroidCreation.createAsteroidFalse(42980);

        this.asteroidCreation.createAsteroidFalse(43620);
        this.asteroidCreation.createAsteroidFalse(44270);

        this.asteroidCreation.createAsteroidFalse(44950);
        this.asteroidCreation.createAsteroidFalse(45850);

        this.asteroidCreation.createAsteroidFalse(46370);
        this.asteroidCreation.createAsteroidFalse(46940);

        this.asteroidCreation.createAsteroidFalse(48230);
        this.asteroidCreation.createAsteroidFalse(48800);

        this.asteroidCreation.createAsteroidFalse(49520);
        this.asteroidCreation.createAsteroidFalse(49760);

        this.asteroidCreation.createAsteroidFalse(50300);
        this.asteroidCreation.createAsteroidFalse(50900);

        this.asteroidCreation.createAsteroidFalse(51450);
        this.asteroidCreation.createAsteroidFalse(52210);

        this.asteroidCreation.createAsteroidFalse(52870);
        this.asteroidCreation.createAsteroidFalse(53420);

        this.asteroidCreation.createAsteroidFalse(54180);
        this.asteroidCreation.createAsteroidFalse(54810);

        this.asteroidCreation.createAsteroidFalse(55480);
        this.asteroidCreation.createAsteroidFalse(56060);

        this.asteroidCreation.createAsteroidFalse(56680);
        this.asteroidCreation.createAsteroidFalse(57280);

        this.asteroidCreation.createAsteroidFalse(57930);
        this.asteroidCreation.createAsteroidFalse(58720);

        this.asteroidCreation.createAsteroidFalse(59060);
        this.asteroidCreation.createAsteroidFalse(59430);

        this.asteroidCreation.createAsteroidFalse(59730);
        this.asteroidCreation.createAsteroidFalse(59980);

        this.asteroidCreation.createAsteroidFalse(60380);
        this.asteroidCreation.createAsteroidFalse(60680);

        this.asteroidCreation.createAsteroidFalse(61050);
        this.asteroidCreation.createAsteroidFalse(61280);

        this.asteroidCreation.createAsteroidFalse(61680);
        this.asteroidCreation.createAsteroidFalse(61980);

        this.asteroidCreation.createAsteroidFalse(62260);
        this.asteroidCreation.createAsteroidFalse(62630);

        this.asteroidCreation.createAsteroidFalse(63930);
        this.asteroidCreation.createAsteroidFalse(64560);

        this.asteroidCreation.createAsteroidFalse(65190);
        this.asteroidCreation.createAsteroidFalse(65790);

        this.asteroidCreation.createAsteroidFalse(66400);
        this.asteroidCreation.createAsteroidFalse(67080);

        this.asteroidCreation.createAsteroidFalse(68240);
        this.asteroidCreation.createAsteroidFalse(68950);

        this.asteroidCreation.createAsteroidFalse(69590);
        this.asteroidCreation.createAsteroidFalse(70230);

        this.asteroidCreation.createAsteroidFalse(70860);
        this.asteroidCreation.createAsteroidFalse(71560);

        this.asteroidCreation.createAsteroidFalse(72240);
        this.asteroidCreation.createAsteroidFalse(72800);

        this.asteroidCreation.createAsteroidFalse(73580);
        this.asteroidCreation.createAsteroidFalse(74150);

        this.asteroidCreation.createAsteroidFalse(74330);
        this.asteroidCreation.createAsteroidFalse(74820);

        this.asteroidCreation.createAsteroidFalse(75430);
        this.asteroidCreation.createAsteroidFalse(76000);

        this.asteroidCreation.createAsteroidFalse(76670);
        this.asteroidCreation.createAsteroidFalse(76930);

        this.asteroidCreation.createAsteroidFalse(77430);
        this.asteroidCreation.createAsteroidFalse(78030);

        this.asteroidCreation.createAsteroidFalse(78690);
        this.asteroidCreation.createAsteroidFalse(79410);

        this.asteroidCreation.createAsteroidFalse(80030);
        this.asteroidCreation.createAsteroidFalse(80630);

        this.asteroidCreation.createAsteroidFalse(81360);
        this.asteroidCreation.createAsteroidFalse(81960);

        this.asteroidCreation.createAsteroidFalse(82610);
        this.asteroidCreation.createAsteroidFalse(83260);

        this.asteroidCreation.createAsteroidFalse(83970);
        this.asteroidCreation.createAsteroidFalse(84680);

        this.asteroidCreation.createAsteroidFalse(85040);
        this.asteroidCreation.createAsteroidFalse(85710);

        this.asteroidCreation.createAsteroidFalse(86000);
        this.asteroidCreation.createAsteroidFalse(86330);

        this.asteroidCreation.createAsteroidFalse(86710);
        this.asteroidCreation.createAsteroidFalse(86990);

        this.asteroidCreation.createAsteroidFalse(87280);
        this.asteroidCreation.createAsteroidFalse(87610);

        this.asteroidCreation.createAsteroidFalse(87910);
        this.asteroidCreation.createAsteroidFalse(88290);

        this.asteroidCreation.createAsteroidTrue(88620);

    }

    update() {
        // method not used but declaration is necessary for game engine
    };

    draw(ctx) {
        // method not used but declaration is necessary for game engine
    };
}