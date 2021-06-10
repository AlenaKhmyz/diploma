import React, {useEffect, useState} from 'react';
import {useSelector, filter} from 'react-redux';
import axios from 'axios'
import './styles.css'

import { PostBeverages } from '../../components/postBeverages'

function BeveragesPage() {
    const [postsBeverages, setPostsBeverages] = useState([]);
    const [comment, setComment] = useState('')
    const [term, setTerm] = useState('')
    const [filterBeverages, setFilterBeverages] = useState([])

    const user = useSelector((state) => state.login.user)
    

    const search = () => {
      if (term === '') {
        setFilterBeverages(postsBeverages)
        return
      }
      
     const result = postsBeverages.filter(function(item){
        const containsIngredient = item.items.some((ingredient)=> {
          return ingredient === term.toLowerCase()
        })
         return containsIngredient 
      });

      setFilterBeverages(result) 
  } 

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                'http://localhost:3004/postsBeverages',
            );
            setPostsBeverages(result.data);
            setFilterBeverages(result.data)
        };
        fetchData();
    }, []);


     

  const template = filterBeverages.map((item) =>  <PostBeverages key = {item.id} item ={item} setPostsBeverages = {setFilterBeverages}/>)
  

  console.log(postsBeverages);
  return (
    <div className="page">
      <div className="page-beverages">
        <div className="search">
          <input className="search__beverages" type="text" placeholder="Search" value={term} onChange={(event) => setTerm(event.target.value)}></input>
          <button className="search__button" onClick={() => search()}>Click</button>
        </div>
          {filterBeverages && template}
      </div>
    </div>
  
  )
}


export default BeveragesPage