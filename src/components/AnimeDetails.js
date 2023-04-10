import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../scss/AnimeDetails.scss'

export const AnimeDetails = () => {
    const [anime , setAnime] = useState()
    const {id} = useParams();
    console.log(id)
    useEffect(()=>{
        const fetchSingleAnime = async () => {
            try{
                const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
                setAnime(res.data.data);
                console.log(res.data.data)
                // console.log(res)
            }catch(err){
                console.log(err.data)
            }
        }
        fetchSingleAnime();
    },[id])

  return (
   <>
    <section className='anime-details'>
    <p>{`Anime id is ${id}`}</p>
        {/* <div>
            <img src={anime.images.jpg.image_url} alt="" />
        </div>
        <div>
            <p>{`id : ${anime.mal_id}`}</p>
            <p>{`title : ${anime.title}`}</p>
            <p>{`score : ${anime.score}`}</p>
            <p>{`popularity : ${anime.popularity}`}</p>
            <p>{`favorites : ${anime.favorites}`}</p>
        </div> */}
    </section>
   </>
  )
}
