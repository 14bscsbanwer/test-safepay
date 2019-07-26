import React,{ PureComponent } from 'react';
import SafepayCheckout from './safepay-button';

export default class App extends PureComponent {
  render() {
    return (
        <div className="demo">
          <div className="sp-button">
            <SafepayCheckout />
          </div>
        </div>  
    )
  }
 }