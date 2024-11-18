// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}
  getRandomNumber = () => Math.ceil(Math.random() * 100)
  onClickButton = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prev => ({count: !prev.count + randomNumber}))
  }
  render() {
    const {count} = this.state
    const distext = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <div className="text-container">
            <h1 className="heading">Count {count}</h1>
            <p className="para">Count is {distext}</p>
            <button className="btn" type="button" onClick={this.onClickButton}>
              Increment
            </button>
            <p>*Increase By Random Number Between 0 to 100 </p>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
