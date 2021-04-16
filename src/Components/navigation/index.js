import React from 'react'
var scrollToElement = require('scroll-to-element')


class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            sections: [
                {
                    id: 0,
                    name: "Home",
                    show: true,
                },
                {
                    id: 1,
                    name: "About",
                    show: false,
                },
                {
                    id: 2,
                    name: "Contact",
                    show: false,
                }
            ]
        }
    }

    componentDidUpdate(prevProps) {
        const { sections } = this.state

        if(this.props.changeId !== prevProps.changeId){
            const el = sections.filter((key) => this.props.changeId === key.id)[0];
            this.navScroll(el.name.toLowerCase())
        }
    }

    changeSection(id) {
        console.log(id);
    }

    navScroll(id, v) {
        const { sections } = this.state
        this.setState({ show: false })
        const el = document.getElementById(id)

        sections.filter((key) => {
            if (id === key.name.toLowerCase()) {
                key.show = true
            } else {
                key.show = false
            }
        });

        this.setState({ sections })

        scrollToElement(el, {
            offset: 0,
            ease: 'in-out-expo',
            duration: 2000
        })
    }


    render() {
        return (
            <nav id="nav-wrap">
                <ul id="nav" className="nav">
                    {this.items()}
                </ul>
            </nav>
        )
    }

    items() {
        const { sections } = this.state
        return sections.map((value, index) => {
            return (
                <li key={index} className={value.show ? "current" : ""}>
                    <button onClick={() => this.navScroll(value.name.toLowerCase(), index)}>{value.name}</button>
                </li>
            )
        })
    }
}
export default Navigation