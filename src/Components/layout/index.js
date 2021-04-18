import React from 'react'
import ScrollLock from 'react-scrolllock'
import Header from '../Header'
import Navigation from '../navigation'
var scrollToElement = require('scroll-to-element')

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      mobile: false,
      scrolllock: 0,
      width: 0,
      sections: [
        'home',
        'about',
        'contact',
      ]
    }


    this.section_id = 0
    this.scrolling = false
    this.changeSection = this.changeSection.bind(this)
  }

  updateDimensions = () => {
    if (this.state.width !== window.innerWidth) {
      window.location.reload()
    }
    this.setState({ height: window.innerHeight, width: window.innerWidth })
    if (window.innerWidth < 1025) {
      this.setState({ scrolllock: false })
      if (window.innerWidth < 992) {
        this.setState({ mobile: true })
      }
    } else {
      this.setState({ mobile: false, scrolllock: true })
    }
  }

  setDefaults() {
    this.setState({
      height: window.innerWidth < 992 ? 'auto' : window.innerHeight,
      mobile: window.innerWidth < 992 ? true : false,
      scrolllock: window.innerWidth < 1025 ? false : true,
      width: window.innerWidth,
    })
  }

  componentDidMount() {
    this.setDefaults()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  changeSection(id) {
    this.section_id = id
  }

  wheel(e) {
    const { sections } = this.state
    if (!this.scrolling && !this.state.mobile) {
      this.scrolling = true
      if (e.deltaY < 0) {
        if (
          sections[
          (this.section_id + sections.length - 1) % sections.length
          ] !== sections[sections.length - 1]
        )
          this.section_id =
            (this.section_id + sections.length - 1) % sections.length
      } else {
        if (this.section_id !== sections.length - 1)
          this.section_id = (this.section_id + 1) % sections.length
      }
      const el = document.getElementById(sections[this.section_id])

      this.changeSection(this.section_id)
      this.setState({ go: false })

      scrollToElement(el, {
        offset: 0,
        ease: 'in-out-expo',
        duration: 2000,
      }).on('end', () => {
        this.scrolling = false
      })
    }
  }

  render() {
    const { children } = this.props
    return (
      <div value={{ height: this.state.mobile ? 'auto' : this.state.height }}>
        <header id={this.props.id}>
          <Navigation changeId={this.section_id} change={this.changeSection} />
        </header>
        <div onWheel={e => this.wheel(e)}>{children}</div>
        <ScrollLock isActive={this.state.scrolllock} />
      </div>
    )
  }
}

export default Layout
