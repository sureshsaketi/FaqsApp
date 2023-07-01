import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleImage = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
    const imageAlt = isActive ? 'minus' : 'plus'
    return (
      <button type="button" onClick={this.onToggleImage}>
        <img src={imageUrl} alt={imageAlt} className="size-image" />
      </button>
    )
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqsList} = this.props
    const {answerText} = faqsList

    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqsList} = this.props
    const {questionText} = faqsList
    return (
      <li>
        <div className="faq-container">
          <h1 className="question-text">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
