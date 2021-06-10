import { useState } from 'react';
import axios from 'axios';
import './styles.css'

export const PostPage = ({ setPostsNews, postsNews}) => { 

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const addPosts = async (postsNews) => {
    
        await axios.post(
        `http://localhost:3004/postsNews/`,
        {
            title: title,
            body: text,
            comments: [],
            time: 'smth',
            id: postsNews.length + 1
        }
        )

        const getPosts = await axios.get(
        'http://localhost:3004/postsNews'
        )

        console.log(getPosts);

        setPostsNews(getPosts.data)
    } 

    return (<div>
        <div className="add-posts">
            <input type="text" className="add-posts-title" placeholder="Title..."  value={title} onChange={(event) => setTitle(event.target.value)}></input>
            <textarea type="text" className="add-posts-body" placeholder="Text..." value={text} onChange={(event) => setText(event.target.value)}></textarea>
            <button className="add-posts-btn" onClick={() => {
                    addPosts(postsNews);
                    setTitle('');
                    setText('');
                    }}>Add post</button>
        </div>
      </div>
    )
}