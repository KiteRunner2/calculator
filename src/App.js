import './App.css'
import { Add } from './redux/calc/actions'
import { connect } from 'react-redux'
import { getCurrentValue, resetValue } from './redux/calc/actions'


function App(props) {
  function handleClick() {
    console.log('clicked')
    Add(Math.floor(Math.random()*20))
  }
  function handleReset(){
    resetValue()
  }
  return (
    <div className="App">
      <h1>
        CALCULATOR WITH REACT
      </h1>
      <h2>
        {props.currentValue}
      </h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentValue: getCurrentValue(state)
  }
  
}

export default connect(mapStateToProps)(App);
