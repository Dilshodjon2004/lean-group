import {Component} from "react";
import "./Header.scss";
import {BsMoonFill, BsBrightnessHighFill, BsList} from "react-icons/bs";

import logo from "../../assets/logo.svg";

export class Header extends Component {
  state = {
    isDark: false,
  };
  render() {
    const themeChange = () => {
      const {isDark} = this.state;
      document.body.classList.toggle("dark");
      this.setState({isDark: !isDark});
      console.log(isDark);
    };
    return (
      <nav>
        <div className='container'>
          <div className='navbar'>
            <div className='navbar__logo'>
              <img src={logo} alt='navbar logo' />
            </div>
            <ul className='navbar__items'>
              <li className='navbar__item'>
                <a href='#'>Продукция</a>
              </li>
              <li className='navbar__item'>
                <a href='#'>Сертификаты</a>
              </li>
              <li className='navbar__item'>
                <a href='#'>Наша команда</a>
              </li>
              <li className='navbar__item'>
                <a href='#'>О нас</a>
              </li>
              <li className='navbar__item'>
                <a href='#'>Новости</a>
              </li>
              <li className='navbar__item'>
                <a href='#'>Вакансии</a>
              </li>
              <li className='navbar__item'>
                <a href='#'>Контакты</a>
              </li>
            </ul>
            <div className='navbar__buttons'>
              <button onClick={themeChange}>
                {this.state.isDark ? (
                  <BsMoonFill className='icon' fontSize={25} />
                ) : (
                  <BsBrightnessHighFill className='icon' fontSize={30} />
                )}

                {/* <BsMoonFill className='color' /> */}
              </button>
              <button>
                <BsList className='icon' fontSize={30} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
