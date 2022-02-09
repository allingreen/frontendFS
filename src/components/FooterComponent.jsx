import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <a href="https://t.me/artrimbaud"> <span className="text-muted">tg: @rimbaudart</span> </a>
                </footer>
            </div>
        )
    }
}

export default FooterComponent