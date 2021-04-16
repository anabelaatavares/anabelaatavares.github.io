import React, { Component } from 'react'
import CountUp from 'react-countup'

class Progress_Animation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            inViewport: false,
            animation_complete: false
        }
    }

    componentDidMount() {
        this.showProgress()
    }

    componentDidUpdate() {
        if (this.state.inViewport !== this.props.inViewport && !this.state.animation_complete) {
            this.setState({ inViewport: this.props.inViewport })
            this.setState({ animation_complete: true })
            this.showProgress()
        }
    }

    showProgress() {
        setTimeout(() => {
            this.setState({ value: this.props.value })
        }, this.props.delay);
    }

    render() {
        const { name } = this.props
        return (
            <div ref={(el) => this.yourElement = el} className="progress-container">
                <span className="name">{name}</span>
                <span className="value"><CountUp start={0} end={this.state.value} />%</span>
                <div className="progress" style={{ width: `${this.state.value}%` }}></div>
            </div>
        )
    }
}

export default Progress_Animation