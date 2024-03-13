/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isWon: false,
    clickedEmojisIds: [],
  }

  onClickEmojis = id => {
    const {clickedEmojisIds, score, topScore} = this.state
    const {emojisList} = this.props
    const emojiObj = emojisList.filter(each => each.id === id)
    const isPresent = clickedEmojisIds.includes(emojiObj[0].id)
    if (!isPresent && clickedEmojisIds.length === 11) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedEmojisIds: [...prevState.clickedEmojisIds, id],
        isWon: !prevState.isWon,
        topScore: 12,
      }))
    } else if (!isPresent) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedEmojisIds: [...prevState.clickedEmojisIds, id],
      }))
    } else {
      this.setState(prevState => ({isWon: !prevState.isWon}))
      if (score > topScore) {
        this.setState({topScore: score})
      }
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickPlay = () => {
    this.setState({
      score: 0,
      isWon: false,
      clickedEmojisIds: [],
    })
  }

  render() {
    const {score, topScore, isWon} = this.state
    const displayEmojis = this.shuffledEmojisList()
    console.log(displayEmojis)
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isWon={isWon} />
        {isWon ? (
          <div className="win-lose-container">
            <WinOrLoseCard
              isWon={isWon}
              score={score}
              onClickPlay={this.onClickPlay}
            />
          </div>
        ) : (
          <ul className="emojis-list-container">
            {displayEmojis.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                onClickEmojis={this.onClickEmojis}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default EmojiGame
