import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom'
import axios from 'axios';
import './style.css'


export const PostContainer = ({item, setPostsNews}) => {
    const user = useSelector((state) => state.login.user) 
    const [redirect, setRedirect] = useState(false);

    const history = useHistory()
  
    const redirectOnSignIn= () => {
      setRedirect(true) 
      console.log(user);
    }

    useEffect( () => {
      console.log('hello');
      console.log(user);
      if (!user) {
        redirectOnSignIn()
      } else {
        setRedirect(false)
      }
    }, [user])

    const addComment = async (item) => {
        const comments = [...item.comments, {
          id:  item.comments.length + 1 ,
          author:{
            first: user.name.first,
            last: user.name.last
          },
          body: comment,
          postId: 1
        }]

        const response = await axios.patch(
            `http://localhost:3004/postsNews/${item.id}`,
            {
              comments
            }
          )
          
    
          const result = await axios.get(
            'http://localhost:3004/postsNews',
          );
    
          setPostsNews(result.data);

          
    }
    
    const [comment, setComment] = useState('');

    return (<div className="news" key={item.id}>
      <div className="post">
        <h2 className="post__title">{item.title}</h2>
          <p className="post__text">{item.body}</p>
      </div>
   
    <div className="comments">
      {item.comments.map(element => (
        <div className="comment" key={element.id}>
          <h3 className="comment__author">{`${element.author.first} ${element.author.last}`}</h3>
          <p className="comment__body">{element.body}</p>
        </div>
      ))}
    </div>
    <div className="comments__form">
      <input type="text" placeholder="Comment..." className="comment__text" value={comment} onChange={(event) => setComment(event.target.value)}></input>
      <button className="comment__btn" onClick={() => {
        addComment(item);
        setComment('');
        }}>Send</button>
    </div>
    {redirect && <Redirect to = "/sign-in"/>}
  </div>)
}