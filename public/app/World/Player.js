import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'
import Experience from '../Experience.js'
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';

export default class Player
{
    constructor(_player_file)
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time    

        this.loader = new GLTFLoader();
        this.player_file = _player_file
        this.player_loaded = ""
        this.addPlayer()   
        
        // Resource
        this.resource = this.resources.items.foxModel

        // load animations
        this.resource.animations.idle = this.resources.items.playerAnimation.animations[0]
        //this.resource.animations.running = this.resources.items.runningAnimation.animations[0]
        //this.resource.animations.jumping = this.resources.items.jumpingAnimation.animations[0]
        
       


    }

    addPlayer(){
        
        // Load a glTF resource
        this.loader.load(
            // resource URL
            this.player_file,
            // called when the resource is loaded
             ( gltf ) => {

                this.player_mesh = gltf.scene

                this.player_mesh.receiveShadows=true
                this.scene.add( this.player_mesh );

                this.setAnimation()


            },
            // called while loading is progressing
            ( xhr ) => {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            ( error ) => {

                console.log( 'An error happened' );

            }
        );
    }

    setAnimation()
    {


            console.log(">> MESH:" + this.player_mesh + "<<")
            this.animation = {}

            // Mixer
            this.animation.mixer = new THREE.AnimationMixer(this.player_mesh)
            
            // Actions
            this.animation.actions = {}
            
            this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations.idle)
            this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations.idle)
            this.animation.actions.jumping = this.animation.mixer.clipAction(this.resource.animations.idle)
            this.animation.actions.jumping.setLoop( THREE.LoopOnce, 0 );
            
            this.animation.actions.current = this.animation.actions.idle
            this.animation.actions.current.play()

            // Play the action
            this.animation.play = (name) =>
            {
                const newAction = this.animation.actions[name]
                const oldAction = this.animation.actions.current

                newAction.reset()
                newAction.play()
                newAction.crossFadeFrom(oldAction, 0)

                this.animation.actions.current = newAction
                
            }


    }  
    
    
    update()
    {
        if(this.player_mesh){
            if(this.animation.actions.idle){
                this.animation.mixer.update(this.time.delta * 0.001)
            } else {
                console.log("nononono")
            }
        }

    }    

   
}