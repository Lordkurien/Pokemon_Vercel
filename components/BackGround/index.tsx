import { Component } from "react";
import Renderer from "./Renderer";

export default class Background extends Component{
    componentDidMount = () => new Renderer();
  
    render() {
        return <canvas id="bg" />
    }

}