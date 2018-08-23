import React, { PureComponent } from 'react';
 
class Life extends PureComponent {
    // I. get default props

    // II. set default state

    state = {
        title:'Life cycles'
    }


    // V. after JSX

    // componentDidMount() {
    //     console.log('V. after RENDER');
    //     document.querySelector('h3').style.color = 'red'
    //  }

    // // III. refore render

    // componentsWillMount(){
    //     console.log('III. refore render');
    // }

    // componentWillUpdate(){
    //     console.log('BEFORE UPDATE')
    // }

    // componentDidUpdate(){
    //     console.log('AFTER UPDATE')
    // }


    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log(this.state.title)
    //     // console.log(nextState.title)
    //     if (nextState.title === this.state.title){
    //         return false
    //     }

    //     return true;    
    // }


    // // componentWillReceiveProps(){
    // //     console.log('BEFORE RECEIVE PROPS')
    // // }


    // componentWillUnmount(){
    //     console.log('UNMOUNT')
    // }

    // // IV. render jxs

    render () {

        console.log('RENDER')
        //console.log(this.props)
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=> this.setState({
                        title:'something else'
                    })
                }>CLICK TO CHANGE</div>
            </div>
        ) 
    }
}

export default Life;