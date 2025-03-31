import './index.css'

const Result = props => {
  const {choicesList, playAgain, result, oppositionCard, selectedCard} = props

  const findChoiceById = selectedId =>
    choicesList.find(choice => choice.id === selectedId)

  const playAgainBtn = () => {
    playAgain()
  }

  const selectedCardDetails = findChoiceById(selectedCard)
  const oppositionCardDetails = findChoiceById(oppositionCard)

  const resultMessage = result => {
    if (result === 'LOSE') {
      return <p className="resultMsg">YOU LOSE</p>
    } else if (result === 'WON') {
      return <p className="resultMsg">YOU WON</p>
    }
    return <p className="resultMsg">IT IS DRAW</p>
  }

  return (
    <>
      <ul className="cardContainer2">
        <li className="card">
          <p className="person">YOU</p>
          <div className="cardBtn">
            <img
              className="cardimg"
              alt="your choice"
              src={selectedCardDetails.imageUrl}
            />
          </div>
        </li>
        <li className="card">
          <p className="person">OPPONENT</p>
          <div className="cardBtn">
            <img
              className="cardimg"
              alt="opponent choice"
              src={oppositionCardDetails.imageUrl}
            />
          </div>
        </li>
      </ul>
      <div className="resultContainer">
        {resultMessage(result)}
        <button className="playAgainBtn" onClick={playAgainBtn}>
          PLAY AGAIN
        </button>
      </div>
    </>
  )
}

export default Result
