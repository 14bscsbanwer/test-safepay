import React,{ PureComponent } from 'react';
import SafepayButton from './safepay-button';

export default class App extends PureComponent {
  render() {
    return (
        <div className="demo">
          <div className="sp-button">
            <SafepayButton />
          </div>
        </div>  
    )
  }
 }