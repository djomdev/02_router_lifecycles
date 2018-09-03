import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../hoc/card';

const Profile = (props) => {

    const redir = () => {
        //props.history.push('/')
    }
    return (
        <Card>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>take me to /profile/posts</Link>

            {redir()}
        </Card>
    )
}

export default Profile;