import React from 'react';
import LoadingCircle from 'react-loading';

export default class Loading extends React.Component {
  render() {
    return(
      <LoadingCircle type='spinning-bubbles' color='#e3e3e3' />
    );
  }
}
