import {Component, Fragment} from "react";
import Header from "../Header";
import Footer from "../Footer";
import BackToTop from "../BackToTop";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <BackToTop />
        <Header />
        {this.props.children}
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
