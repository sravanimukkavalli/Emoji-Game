import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlay} = props
  const onClickBtn = () => {
    onClickPlay()
  }

  const wonGame = score === 12
  const imageUrl = wonGame
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const paragraphText = wonGame ? 'Best Score' : 'Score'
  const result = wonGame ? 'You Won' : 'You Lose'

  return (
    <div className="result-container">
      <img src={imageUrl} alt="win or lose" className="result-img" />
      <div>
        <h1 className="result">{result}</h1>
        <p className="result-score-heading">{paragraphText}</p>
        <p className="score">{score}/12</p>
        <button type="button" onClick={onClickBtn} className="play-again-btn">
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
