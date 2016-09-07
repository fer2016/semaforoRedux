import expect from 'expect';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';


const Counter = ({ value }) => {
    var red;  
    var yellow;
    var green;

    if(value === 0){
      red = <div class="red light"></div>;
    }
    else{
      red = <div class="red light off"></div>;
    }

    if(value === 1){
      yellow = <div class="yellow light"></div>;
    }
    else{
      yellow = <div class="yellow light off"></div>;
    }   

    if(value === 2){
      green = <div class="green light"></div>;
    }
    else{
      green = <div class="green light off"></div>;
    }

    // return for multiline
    return(

      <div>
        <div class="traffic-light">
              { red }
              { yellow }
              { green }     
        </div>

        <button onClick={ () => store.dispatch({ type: 'CHANGE_STATE' }) }> Change </button>
      </div>
    );
    
}


// Reducer
const reducer = (state = 0, action) => {

  switch(action.type){

    case 'CHANGE_STATE':
      if(state===0){
        return 1 ;
      }
      else if(state===1){
        return 2;
      }
      else if(state===2){
        return 0;
      }
      return state;

    default:
      return state;
  }
}

// createStore: reducer --> store
const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Counter value={ store.getState() } />,
    document.getElementById('root')
  )
}

store.subscribe(render);
render();