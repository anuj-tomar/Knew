import React, { Component } from 'react';
import '../style/screen.scss';
import '../style/home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }


  render() {
    return (
      <React.Fragment>
        <div className='home'>
          <img src='./images/bg1.jpg' className='bgImage' alt='Background Images' />
          Home 1
        </div>
        <div className='home2'>Home 2</div>
      </React.Fragment>
    );
  }
}
export default Home;
