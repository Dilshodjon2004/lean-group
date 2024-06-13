import {Component} from "react";
import "./Tab.scss";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.tabs[0].label,
    };
  }

  handleTabClick = (label) => {
    this.setState({activeTab: label});
  };

  render() {
    const {tabs} = this.props;
    const {activeTab} = this.state;

    return (
      <div className='tabs-container'>
        <div className='tabs-header'>
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`tab-button ${
                activeTab === tab.label ? "active" : ""
              }`}
              onClick={() => this.handleTabClick(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='tabs-content'>
          {tabs.map(
            (tab) =>
              activeTab === tab.label && (
                <div key={tab.label} className='tab-content'>
                  {tab.content.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt='img' />
                    </div>
                  ))}
                </div>
              ),
          )}
        </div>
      </div>
    );
  }
}

export default Tab;
