import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {arr} from './quoteArr.js';

const QuotePresenter = (props) => {
let linesQ= arr[props.quoteNum].length;
let quoteP=[];
for (let i=0;i<linesQ;i++){
if (i===linesQ-1){
quoteP.push(<p id="author"> {arr[props.quoteNum][i]}</p>)
}
else if (i===0){
quoteP.push(<p id="text"> {arr[props.quoteNum][i]}</p>)
}
else{
quoteP.push(<p > {arr[props.quoteNum][i]}</p>)
}

}
  return (
     <div id="quoteDiv">
     {quoteP}
    </div> );
};

class RandomGenerator extends React.Component {
render() {
return <button id="new-quote" onClick = {this.props.randomGen}>> generate new quote < /button>}
};

class Tweeter extends React.Component {
render(){
let tweet = arr[this.props.quoteNum].join("\n");
let tweetURL="https://twitter.com/intent/tweet?hashtags=ham_generator&text=" +
encodeURIComponent(tweet);
return <a
href={tweetURL} target="_blank" id="tweet-quote">> tweet this quote < /a>
}
}

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quoteNum: 24};
      this.randomGen = this.randomGen.bind(this);
    };

randomGen() {
let i = Math.floor(Math.random()*arr.length);
this.setState({quoteNum: i})}
render() {return (
< div >
<QuotePresenter quoteNum = {this.state.quoteNum}/>
<div id="btnDiv">
<RandomGenerator randomGen={this.randomGen}/ >
<Tweeter quoteNum = {this.state.quoteNum}/>
</div>
</div>)}};


ReactDOM.render( <
          App / > ,
          document.getElementById('quote-box')
        );
