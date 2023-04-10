import React from 'react'
import EastIcon from '@mui/icons-material/East';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AnimeCard = ({el}) => {
   
  return (
    <section className='content-box' key={el.mal_id}>
    <div className='content-box--img'>
      <img src={el.images.jpg.image_url} alt="" />
    </div>
    <div className='content-box--names'>
      <div className='content-box--names-inside'>
        <div className= "content-box--names-name">
        <p>{el.name}</p>
        <p><span><FavoriteIcon className='heart'/></span><span>{new Intl.NumberFormat('en-US').format(el.favorites)}</span></p>
        
        </div>
         
        <div className="content-box--names-nicknames">{
          el.nicknames.map((nick)=>{
         return <span className='nickname'>{nick}</span>
          })
        }
        </div>
      </div>
    </div>
    <a href={`/animedetails/${el.mal_id}`}>
    <div className='content-box--btn'>
    <EastIcon className='arrow'/>
    </div>
    </a>
  </section>
  )
}

export default AnimeCard