import {Component} from "react";
import "./Hero.scss";
import Slider from "../Slider/Slider";
import {slides} from "../../data/hero-db";

export class Hero extends Component {
  render() {
    return <Slider slides={slides} />;
  }
}

export default Hero;
