import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    const fs = {
      'position' : 'absolute',
      'bottom' : 0,
      'width' : '100%',
      'heigth' : '60px',
      'backgroundColor' : '#f5f5f5',
      'paddingTop' : '15px',
      'paddingBottom' : '15px'
    };
    const s = { 'textAlign' : 'center' };
    return(
        <footer style={fs}>
          <div className="container" style={s}>
            <p>DAEA Compnay CRM Program. v0.1.0</p>
            <p>Copyright© 다애컴퍼니. Development by <a href="mailto:uyu423@gmail.com">Yowu</a></p>
          </div>
        </footer>
    )
  }
}
