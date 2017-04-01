import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import AutoComplete from './autocomplete';
import Tabs from './tabs';

const names = [
  "Abba", "Barney", "Barbara", "Jeff", "Jenny", "Sarah", "Sally", "Xander"
]

const tabs = {
  "one": "first tab",
  "two": "second tab",
  "three": "third tab"
}

class Root extends React.Component {
  render(){
    return (
      <div className="widgets">
        <Clock/>

        <AutoComplete
          names = {names}
        />

        <Tabs
          tabs = {tabs}
        />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/> , root);
});
