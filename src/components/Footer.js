import React from 'react';
import { Row, Col, Label } from 'react-bootstrap';
import classNames from 'classnames';

export default class Footer extends React.Component {
  render() {
    const fs = {
      'backgroundColor' : '#f5f5f5',
      'bottom' : '0',
      'paddingTop' : '20px'
    };
    const s = { 'textAlign' : 'center' };
    return(
        <footer style={fs}>
          <div className='footer' style={s}>
            <p>DAEA Compnay CRM Program. v0.1.1 <Label bsStyle="success">ALPHA</Label></p>
            <p>Copyright© 다애컴퍼니. Development by <a href="mailto:uyu423@gmail.com">Yowu</a></p>
          </div>
        </footer>
    )
  }
}
