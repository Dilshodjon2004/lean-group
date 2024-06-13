import {Component} from "react";
import {BsChevronUp} from "react-icons/bs";
import "./BackToTop.scss";

export class BackToTop extends Component {
  render() {
    return (
      <a href='#' className='backToTop'>
        <BsChevronUp fontSize={30} />
      </a>
    );
  }
}

export default BackToTop;
