import React from 'react'

class Spinner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spin: true,
    }
  }

  componentDidUpdate(prevProps) {
    const { duration, done } = this.props
    if (done !== prevProps.done) {
      this.showSpinner(duration, done);
    }
  }

  showSpinner(duration, done) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({ spin: done === false ? true : false })
        document.body.classList.remove('no-overflow')
        resolve()
      }, duration)
    })
  }

  render() {
    const { spin } = this.state
    return (
      <div className={`spinner-container ${spin && 'show'}`} id="spinner">
        <div className="spinner">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="dot"></div>
        </div>
      </div>
    )
  }
}

export default Spinner
