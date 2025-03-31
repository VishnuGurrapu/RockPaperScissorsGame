import './index.css'

const Card = props => {
  const { choiceDetails, onclickCard } = props
  const { id, imageUrl } = choiceDetails

  const testId = `${id.toLowerCase()}Button` // Ensuring correct test id

  return (
    <li className="card">
      <button type="button" onClick={() => onclickCard(id)} className="cardBtn" data-testid={testId}>
        <img className="cardimg" alt={id} src={imageUrl} />
      </button>
    </li>
  )
}

export default Card
