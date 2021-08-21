import React from 'react';
import './Main.css';
import { ReactSVG } from 'react-svg'

export default class Main extends React.Component {

  state = {
    currentFloor: 2,
    choiceFloorHead: 'Выберите желаемый этаж',
    showApartments: 'Смотреть квартиры на этаже'
  }

  changeFloorUp = () => {
    if (this.state.currentFloor == 18) return; 
    this.setState({currentFloor: this.state.currentFloor + 1})
  }

  changeFloorDown = () => {
    if (this.state.currentFloor == 2) return; 
    this.setState({currentFloor: this.state.currentFloor - 1})
  }

  render() {
    return(
      <main className='main-content'>
        <div className='home-image'>
          <ReactSVG src='home.svg' />
        </div>
        <div className="choice-floor">
          <h3 className="choice-floor-head">{this.state.choiceFloorHead}</h3>
          <div className="manage-floor">
            <button 
              type="button" 
              className='manage-floor-button manage-floor-button_up'
              onClick={this.changeFloorUp}></button>
            <span className='current-floor'>{this.state.currentFloor}</span>
            <button 
              type="button" 
              className='manage-floor-button manage-floor-button_down'
              onClick={this.changeFloorDown}></button>
          </div>
          <button type='button' className='show-popup'>{this.state.showApartments}</button>
        </div>
      </main>
    )
  }
}