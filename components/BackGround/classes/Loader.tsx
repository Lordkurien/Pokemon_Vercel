import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default class Loader extends GLTFLoader {
    constructor() {
        super()
        const dracoloader = new DRACOLoader();
        dracoloader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
        dracoloader.preload();
        dracoloader.setDecoderConfig({ type: "Js" });
        this.setDRACOLoader(dracoloader);
    }
}