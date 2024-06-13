import {Component, Fragment} from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Sertificates from "../components/Sertificates";
import Products from "../components/Products/Products";
import Contact from "../components/Contact";
import Group from "../components/Group";
import News from "../components/News/News";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <About />
        <Sertificates />
        <Products />
        <Contact />
        <Group />
        <News />
      </Fragment>
    );
  }
}

export default Home;
