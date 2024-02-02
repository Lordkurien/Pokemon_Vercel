import { Scene as SceneThree } from "three";
import Camera from "../classes/Camera";
import Light from "../classes/Light";
import Skybox from "../classes/Skybox";

export default class Scene extends SceneThree {
    private camera: Camera

    constructor(renderer) {
        super()
        this.camera = new Camera();
        new Light(this);
        new Skybox(this);
        this.update(renderer);
    }

    private update(renderer) {
        renderer.render(this, this.camera);
        requestAnimationFrame(this.update.bind(this, renderer));
    }
}
