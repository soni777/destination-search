import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {placeDetails} = this.props
    const {name, imgUrl} = placeDetails
    return (
      <li className="image-container">
        <img className="image" src={imgUrl} alt={name} />
        <p className="image-title">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
