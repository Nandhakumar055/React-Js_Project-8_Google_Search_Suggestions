import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, updateSearchInput} = props
  const {suggestion} = suggestionsDetails

  const onClickArrowIcon = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestionList">
      <p className="suggestion"> {suggestion} </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon-image"
        onClick={onClickArrowIcon}
      />
    </li>
  )
}
export default SuggestionItem
