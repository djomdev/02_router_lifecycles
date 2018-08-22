import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// COMPONENTS

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';



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
                <Route path="/posts" exact component={Posts} />
                <Route path="/posts/:id/:username" component={PostItem} />
                <Route path="/profile" component={Profile} />    
            </div>
        </BrowserRouter>
    )
}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)