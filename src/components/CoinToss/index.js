// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {count: 0, headsCount: 0, tailsCount: 0, result: true}

  tossACoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({count: prevState.count + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        result: true,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        result: false,
      }))
    }
  }

  render() {
    const {count, result, headsCount, tailsCount} = this.state
    return (
      <div className="bg-container">
        <div className="coin-toss-game">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="game-sub-heading">Heads (or) Tails</p>
          {result && (
            <img
              className="toss-image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          )}
          {!result && (
            <img
              className="toss-image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button type="button" className="button" onClick={this.tossACoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {count}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
