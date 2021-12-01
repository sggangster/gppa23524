import React from 'react';
import classes from './Myposts.module.css'
import Post from './Post/Post';

const Myposts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>

        </div>
        <div className={classes.posts}>
            <Post message='Hi, what are you doing?' like='20' />
            <Post message='Its my first post' like='30' />
           
        </div>
    </div>

}

export default Myposts;