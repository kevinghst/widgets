import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      currentTab: "one"
    }

    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(e){
    let newTab = e.currentTarget.className;
    this.setState({
      currentTab: newTab
    })
  }

  render(){
    let tabContent = (
      <div className="tabContent">
        {this.props.tabs[this.state.currentTab]}
      </div>
    )

    return(
      <div className="tabs">
        <div className="tabs-header">
          Tabs
        </div>

        <div className="tabs-titles">
          <div className="one" onClick={this.switchTab}>one</div>
          <div className="two" onClick={this.switchTab}>two</div>
          <div className="three" onClick={this.switchTab}>three</div>
        </div>

        {tabContent}
      </div>
    );
  }
}

export default Tabs;
