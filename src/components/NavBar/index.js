import './index.css'

const NavBar = props => {
  const {score, topScore, isWon} = props
  return (
    <div className="navbar-container">
      <div className="img-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-img"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      <div className="score-container">
        {!isWon && <p className="emoji-game">Score: {score}</p>}
        {!isWon && <p className="emoji-game">Top Score: {topScore}</p>}
      </div>
    </div>
  )
}
export default NavBar
