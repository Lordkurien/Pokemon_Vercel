import {
  Mesh,
  SphereGeometry,
  TextureLoader,
  BackSide,
  MeshPhongMaterial,
} from "three";

export default class Skybox {
    constructor(scene) {
        const SkyGeometry = new SphereGeometry(360, 25, 25);
        const loader = new TextureLoader();
        const texture = loader.load("/custom-sky.png");
        const material2 = new MeshPhongMaterial({
        map: texture,
        });
        const skyBox = new Mesh(SkyGeometry, material2);
        skyBox.material.side = BackSide;
        scene.add(skyBox);
        }
}