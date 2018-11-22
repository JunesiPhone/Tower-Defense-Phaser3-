var preloadState = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function Preload(){
        Phaser.Scene.call(this, {key: 'Preload'});
    },
    preload: function() {
    	this.load.atlas('sprites', 'assets/spritesheet.png', 'assets/spritesheet.json');
        storageInfo.loadLevels();
    },
    create: function() {
        game.scene.start('MainMenu');
    },
    update: function() {
        
    }
});

towerD.scenes.push(preloadState);