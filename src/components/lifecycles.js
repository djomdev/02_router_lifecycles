import React, { Component } from 'react';

class Life extends Component {
    // I. get default props

    // II. set default state

    state = {
        title:'Life cycles'
    }


    // V. after JSX

    componentDidMount() {
        console.log('V. after JSX');
        document.querySelector('h3').style.color = 'red'
    }

    // III. refore render

    componentsWillMount(){
        console.log('III. refore render');
    }

    // IV. render jxs

    render () {
        //console.log(this.props)
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }

}

export default Life;