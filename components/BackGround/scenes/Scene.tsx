import { Scene as SceneThree } from "three";
import Camera from "../classes/Camera";
import Light from "../classes/Light";
import Skybox from "../classes/Skybox";
import Loader from "../classes/Loader";
import Logo from "../classes/pokemon/Logo";
import Pokeball from "../classes/pokemon/Pokeball";

export default class Scene extends SceneThree {
    private camera: Camera

    constructor(renderer) {
        super()
        const loader = new Loader();
        this.camera = new Camera();
        new Light(this);
        new Skybox(this);
        new Logo(this, loader);
        new Pokeball(this, loader);
        this.update(renderer);
    }

    private update(renderer) {
        renderer.render(this, this.camera);
        requestAnimationFrame(this.update.bind(this, renderer));
    }
}
