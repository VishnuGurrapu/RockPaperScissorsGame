import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Card from '../Card'
import Result from '../Result'
import './index.css'

class PlayingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      gameOver: false,
      oppositionCard: null,
      selectedCard: null,
      result: null,
    }
  }

  playAgain = () => {
    this.setState({
      gameOver: false,
      oppositionCard: null,
      selectedCard: null,
      result: null,
    })
  }

  generateOppositionCard = choicesList => {
    const random = Math.floor(Math.random() * choicesList.length)
    return choicesList[random].id
  }

  onclickCard = id => {
    const {choicesList} = this.props
    const randomCard = this.generateOppositionCard(choicesList)
    const {score} = this.state

    let newScore = score
    let result = 'DRAW'

    if (
      (id === 'ROCK' && randomCard === 'SCISSORS') ||
      (id === 'SCISSORS' && randomCard === 'PAPER') ||
      (id === 'PAPER' && randomCard === 'ROCK')
    ) {
      result = 'WON'
      newScore += 1
    } else if (
      (id === 'SCISSORS' && randomCard === 'ROCK') ||
      (id === 'PAPER' && randomCard === 'SCISSORS') ||
      (id === 'ROCK' && randomCard === 'PAPER')
    ) {
      result = 'LOSE'
      newScore -= 1
    }

    this.setState({
      gameOver: true,
      selectedCard: id,
      result,
      score: newScore,
      oppositionCard: randomCard,
    })
  }

  render() {
    const {choicesList} = this.props
    const {score, oppositionCard, selectedCard, result, gameOver} = this.state

    return (
      <div className="bgContainer">
        <div className="navbar">
          <h1 className="navHeading">
            Rock <br />
            Paper <br />
            Scissors
          </h1>
          <div className="scoreCard">
            <p className="scorePara">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>

        <div className="gameContainer">
          {gameOver ? (
            <Result
              result={result}
              choicesList={choicesList}
              playAgain={this.playAgain}
              oppositionCard={oppositionCard}
              selectedCard={selectedCard}
            />
          ) : (
            <ul className="cardContainer">
              {choicesList.map(each => (
                <Card
                  key={each.id}
                  choiceDetails={each}
                  onclickCard={this.onclickCard}
                />
              ))}
            </ul>
          )}

          <div className="rulesContainer">
            <Popup
              modal
              trigger={<button className="rulesBtn">Rules</button>}
              className="popup-content"
            >
              {close => (
                <div className="popupContainer">
                  <button type="button" className="closeBtn" onClick={close}>
                    <RiCloseLine size={20} />
                  </button>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rulesImage"
                  />
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayingView
