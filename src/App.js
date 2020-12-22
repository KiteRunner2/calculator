import './App.css'
import { Add } from './redux/calc/actions'
import { connect } from 'react-redux'
import { getCurrentValue, resetValue } from './redux/calc/actions'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App(props) {
  function handleClick() {
    console.log('clicked')
    Add(Math.floor(Math.random() * 20))
  }
  function handleReset() {
    resetValue()
  }
  return (
    <div className="App">
      <h1 style={{fontSize: '40px', fontWeight: 'bold'}}>CALCULATOR</h1>
      <div style={{margin: '1rem'}}>{props.currentValue}</div>
      <ButtonGroup>
        <Button onClick={handleClick} colorScheme="blue">
          Click
        </Button>
        <Button onClick={handleReset} variant="outline" colorScheme="blue">
          Reset
        </Button>
      </ButtonGroup>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentValue: getCurrentValue(state),
  }
}

export default connect(mapStateToProps)(App)
