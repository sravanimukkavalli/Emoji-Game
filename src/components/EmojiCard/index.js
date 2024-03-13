import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmojis} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  const onClickBtn = () => {
    onClickEmojis(id)
  }
  return (
    <li className="each-emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickBtn}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
