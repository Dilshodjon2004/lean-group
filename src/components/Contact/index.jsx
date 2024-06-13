import {Component} from "react";

import {IoPersonSharp} from "react-icons/io5";
import {FaPhone} from "react-icons/fa6";

import "./Contact.scss";
export class Contact extends Component {
  render() {
    return (
      <section className='contact'>
        <div className='container'>
          <div className='contact__items__wrapper'>
            <h2 className='section-heading'>
              Получить подробную
              <span className='highlighted-text'> информацию</span>
            </h2>
            <p>
              Просто заполните форму, наш менеджер свяжется с вами в ближайшее
              время
            </p>
            <form action='#'>
              <div className='input__wrapper'>
                <div className='input'>
                  <div className='icon__wrapper'>
                    <IoPersonSharp className='icon' />
                  </div>
                  <input type='text' placeholder='Ваше имя' />
                </div>
                <div className='input'>
                  <div className='icon__wrapper'>
                    <FaPhone className='icon' />
                  </div>
                  <input type='tel' placeholder='+375 (29) 0000000' />
                </div>
              </div>
              <textarea>Комментарий</textarea>
              <button className="btn">Получить информацию</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
