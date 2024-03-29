import { request } from "http";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Logo {
    private object: Group
    private accountant = 0

    constructor(scene, loader: GLTFLoader) {
        loader.load("/logo.glb", (gltf) => {
            this.object = gltf.scene;
            // this.object.scale.set(0.4, 0.4, 0.4);
            this.position();

            scene.add(this.object);
        });

        this.update();
    }

    private position() {
        this.object.translateZ(-10);
            
        if (window.innerWidth > 900) {
            const ratio = (window.innerWidth - 900) * 3.2 / 460 + 5.6
            this.object.translateY(4);
            this.object.translateX(ratio);
        } else {
            this.object.translateY(7);
        }
    }

    private update() {
        // ciclos
        this.accountant += 0.01;
        if (this.object) this.object.rotation.y = Math.sin(this.accountant) / 5;
        requestAnimationFrame(this.update.bind(this));
    }
}