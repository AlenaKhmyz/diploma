import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../const'
import './styles.css'
import { format, set } from 'date-fns'
import axios from 'axios'

import { PostContainer } from '../../components/postContainer'
import { PostPage } from '../../components/posts.js'

function MainPage() {
  const [postsNews, setPostsNews] = useState([]);
  const [comment, setComment] = useState('');
  
  const user = useSelector((state) => state.login.user) 

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                'http://localhost:3004/postsNews',
            );
            setPostsNews(result.data);
        };
        fetchData();
    }, []);

  const template = postsNews.map((item) => <PostContainer key = {item.id} item ={item} setPostsNews = {setPostsNews}/> )
  
  return (
    <div className="page">
      <div className="page-main">
        {template}
        <PostPage setPostsNews = {setPostsNews} postsNews = {postsNews} />
      </div>
    </div>
  
  )
}

  
export default MainPage;