import {Component} from "react";
import Tab from "../Tab/Tab";
import {tabs} from "../../data/tab-db";

import "./Products.scss";
export class Products extends Component {
  render() {
    return (
      <section className='products'>
        <div className='container'>
          <h2 className='section-heading'>
            Наша <span className='highlighted-text'>продукция</span>
          </h2>
          <Tab tabs={tabs} />
          <button className="btn outline">Перейти в каталог</button>
        </div>
      </section>
    );
  }
}

export default Products;
