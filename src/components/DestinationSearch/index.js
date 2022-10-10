import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searching = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const destinationsListValues = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <h1>Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            className="search"
            placeholder="search"
            value={searchInput}
            onChange={this.searching}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="cards-container">
          {destinationsListValues.map(each => (
            <DestinationItem key={each.name} placeDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
