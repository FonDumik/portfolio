import React from 'react';
import './Main.css';
import { ReactSVG } from 'react-svg'

export default class Main extends React.Component {

  state = {
    
  }

  render() {
    return(
      <main className='main-content'>
        <div className='home-image'>
          <ReactSVG src='home.svg' />
        </div>
      </main>
    )
  }
}