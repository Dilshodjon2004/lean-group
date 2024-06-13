import {Component} from "react";
import "./News.scss";
import img from "../../assets/images/news_1.png";
import {news} from "../../data/news-db";
export class News extends Component {
  render() {
    return (
      <section className='news'>
        <div className='container'>
          <h2 className='section-heading'>Новости</h2>
          <div className='news__wrapper'>
            {news.map((item, index) => (
              <div key={index} className='news__item'>
                <img src={item.image} alt='image' />
                <p className='date'>{item.date}</p>
                <p className='description'>{item.description}</p>
              </div>
            ))}
          </div>
          <div className='btn outline'>Все новости</div>
        </div>
      </section>
    );
  }
}

export default News;
