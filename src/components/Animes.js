import { useEffect, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import '../components/Animes';
import axios from 'axios';
import '../scss/Animes.scss'
import AnimeCard from './AnimeCard';

function Animes() {
  const [search , setSearch] = useState();
  const [query, setQuery] = useState([]);
  const [top, setTop] = useState([]);
  const [pages ,setPages] = useState(0)
  const [length,setLength] = useState(0)

  console.log(query.length)

  const fetchData = async () =>{
    try{
      const res = await axios.get(`https://api.jikan.moe/v4/characters?page=${pages}&limit=15&q=${search}&order_by=favorites&sort=desc`)
      const anime = res.data.data
      setQuery(anime)
   

      const len = await axios.get(`https://api.jikan.moe/v4/characters?q=${search}&order_by=favorites&sort=desc`)
      const top = await axios.get(`https://api.jikan.moe/v4/characters?order_by=favorites&sort=desc`)
      setTop(top.data.data)
      if(search){
        console.log(setLength(len.data.data.length))
      }
      else{
        setQuery([])
        setLength(15)
        setSearch("")
      }

    }catch(err){
      
    }finally{
      // SPINNER
      // <p>....Loding</p>
    }
}
  useEffect(()=>{
    let debounce = setTimeout(() => {
        fetchData();
    }, 1000);
    return ()=> clearTimeout(debounce)
  },[search,pages]);

const pageHandlerInc = (e)=>{
  if(pages >=0){
    setPages(pages+1)
  }
  
}
const pageHandlerDec = (e)=>{
if(pages >= 1){
  setPages(pages-1)
}
else{
  setPages(0)
}
}

  return (
    <>
    <section className="header ">
      <p className='head'>  Search Anime Characters</p>
       <div className="search-bar">
        <input type="text" placeholder='search anime character' name="search" className="inputEl" onChange={event => setSearch(event.target.value)}  value={search}/>
        <button type="submit">
       <SearchOutlinedIcon className='btn'style={{fontSize:40,color:"white"}}/> 
        </button>
      </div>
      <p className='arrLength'>{`Total ${length} matching anime characters found`}</p>
    </section>
    <section className='content'>{
        query.length ?
           search && query.map((el)=>{
            return<>
            <AnimeCard el={el}/>
              </>
          }): top.map((el)=>{
            return<>
              <AnimeCard el={el}/>
              </>
          })
    }
    </section>

    <section className='button-box'>{
        search && <>
            <button className='button-box--btn' onClick={pageHandlerDec}>Back</button>
            <button className='button-box--btn' onClick={pageHandlerInc}>Next</button>
        </>
    }
    </section>


    </>
  );
}

export default Animes;
