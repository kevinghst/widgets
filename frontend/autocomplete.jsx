import React from 'react';

class AutoComplete extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: ""
    }
    this.subOfName = this.subOfName.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e){
    let text = e.currentTarget.value;
    this.setState({
      search: text
    });
  }

  subOfName(name){
    return name.toLowerCase().includes(this.state.search.toLowerCase());
  }

  render(){
    let filtered = this.props.names.filter(this.subOfName);

    return(
      <div className="autocomplete">
        <input className="searchBar"
          placeholder = "Search..."
          onChange = {this.updateSearch}
          value = {this.state.search}
        ></input>

        <ul>
          {
            filtered.map(function(name, key){
              return(
                <li key={key} className="name">
                  {name}
                </li>
              )
            })
          }
        </ul>

      </div>
    );
  }
}

export default AutoComplete;
