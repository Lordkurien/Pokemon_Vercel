import {
  DirectionalLight,
  HemisphereLight,
  AmbientLight
} from "three";

export default class Light {
    constructor(scene) {
        scene.add(new AmbientLight(0xffffff, 0.8));
        scene.add(new HemisphereLight(0xffffff, 0.8));
    }
}

