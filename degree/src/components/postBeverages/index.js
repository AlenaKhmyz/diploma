import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom'
import axios from 'axios';
import './style.css'

export const PostBeverages = ({item, setPostsBeverages}) => {
    const user = useSelector((state) => state.login.user)
    const [redirect, setRedirect] = useState(false);

    const history = useHistory()
  
    const redirectOnSignIn= () => {
      setRedirect(true) 
    }

    useEffect( () => {
      if (!user) {
        redirectOnSignIn()
      } else {
        setRedirect(false)
      }
    }, [user]) 

    const addComment = async (item) => {
        const commentsText = [...item.comments, {
          id:  item.comments.length + 1 ,
          author:{
            first: user.name.first,
            last: user.name.last
          },
          body: comment,
          postId: 1
        }]
        const test = {
          ...item,
          comments: commentsText
        };
        console.log('test');
        console.log(test);
        const response = await axios.patch(
            `http://localhost:3004/postsBeverages/${item.id}`,
            {
              ...item,
              comments: commentsText
            }
          )
          
    
          const result = await axios.get(
            'http://localhost:3004/postsBeverages',
          );
          console.log('res');
          console.log(result);
          setPostsBeverages(result.data);
    }

    const [comment, setComment] = useState('');

    return (<div className="beverages" key={item.id}>
      <div className="post">
          <h2 className="post__title">{item.title}</h2>
          <p>{item.body}</p>
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