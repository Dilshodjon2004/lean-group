import {Component} from "react";
import "./About.scss";
import image from "../../assets/images/video.png";
export class About extends Component {
  render() {
    return (
      <section className='about section'>
        <div className='container'>
          <h2 className='section-heading'>
            О компании <span className='highlighted-text'>LEANGROUP</span>
          </h2>
          <div className='about__info'>
            <div className='about__info__image'>
              <img src={image} alt='video image' />
            </div>
            <div className='about__info__text'>
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
              </p>
              <p>
                Имея две технологии – для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </p>
              <p>
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
