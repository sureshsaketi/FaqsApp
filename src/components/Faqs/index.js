import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isSeen: true}

  render() {
    const {faqsList} = this.props
    const {isSeen} = this.state

    return (
      <>
        <div className="app-container">
          <div className="faqs-container">
            <h1>FAQs</h1>
            <ul>
              {faqsList.map(eachFaq => (
                <FaqItem key={eachFaq.id} faqsList={eachFaq} isSeen={isSeen} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Faqs
