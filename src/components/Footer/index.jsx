import {Component} from "react";
import "./Footer.scss";
import logo from "../../assets/logo.svg";
import vk from "../../assets/images/vk.svg";
import facebook from "../../assets/images/fb.svg";
import linkedin from "../../assets/images/linkedin.svg";
import {contacts, links} from "../../data/footer-db";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='footer__items__wrapper'>
            <div className='footer-logo'>
              <img src={logo} alt='footer logo' />
              <div className='socials'>
                <img src={vk} alt='social logo' />
                <img src={facebook} alt='social logo' />
                <img src={linkedin} alt='social logo' />
              </div>
            </div>
            <div className='footer__info'>
              <div className='footer__links'>
                {links.map((el, id) => (
                  <div key={id} className='link'>
                    <h3>{el.header}</h3>
                    <ul>
                      {el.items.map((item, id) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className='footer__contacts'>
                {contacts.map((el, id) => (
                  <div key={id} className='contact'>
                    <h4>{el.country}</h4>
                    <ul>
                      {el.numbers.map((number, id) => (
                        <li key={id}>{number}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <p>
              © 2022 Leangroup. All Rights Reserved. <br /> Разработка и
              продвижение сайтов SkyWeb.by
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
