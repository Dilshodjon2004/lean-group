import {Component} from "react";
import "./Group.scss";

import img from "../../assets/images/person_1.png";
import {group} from "../../data/group-db";
export class Group extends Component {
  render() {
    return (
      <section className='group'>
        <div className='container'>
          <h2 className='section-heading'>
            Наша <span className='highlighted-text'>команда</span>
          </h2>
          <div className='group__items'>
            {group.map((item, index) => (
              <div key={index} className='goup__item'>
                <img src={item.image} alt='logo' />
                <h4>{item.name}</h4>
                <p className='position'>{item.position}</p>
                {item.phoneNumbers.map((el, id) => (
                  <p key={id} className='phone'>
                    {el}
                  </p>
                ))}
                {item.email && <p className='email'>{item.email}</p>}
              </div>
            ))}
          </div>
          <div className='btn outline'>Наша команда</div>
        </div>
      </section>
    );
  }
}

export default Group;
