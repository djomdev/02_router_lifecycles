import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// COMPONENTS

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
// import Life from './components/lifecycles';
// import Conditional from './components/conditional';


// myawesomeapp.com/posts
// myawesomeapp.com/profile/posts


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">Home</Link><br/>
                    <Link to="/posts">Posts</Link><br/>
                    <Link to={{
                        pathname:'profile',
                        // hash: '#francis',
                        // search: '?profile=true'
                    }}>Profile</Link>
                    <hr/>
                </header>
                <Route path="/" exact component={Home}/>
                <Route path="/posts" component={Posts} />
                <Route path="/profile" component={Profile} />
                {/* <Route path="/lifecycles" component={Life} />
                <Route path="/conditional" component={Conditional} /> */}
            </div>
        </BrowserRouter>
    )
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)