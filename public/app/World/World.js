import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Player from './Player.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.environment = new Environment()
        this.floor = new Floor();
        this.renderer = this.experience.renderer
        this.resources = this.experience.resources        

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // player
            this.player_file = this.experience.player_file
            this.player = new Player(this.player_file)
        })
        
    }

    update()
    {
                
        //if(this.cubeCamera)
            //this.cubeCamera.update( this.renderer.instance, this.scene );

        if(this.player)
            this.player.update()
        
        if(this.floor)
            this.floor.update()            


    }
}