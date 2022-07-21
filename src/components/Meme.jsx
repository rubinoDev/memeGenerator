import { useEffect, useState } from 'react';


export function Meme(){
  const [allMemeImages,setAllMemeImages] = useState([])
  
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
  },[])
  
  console.log(allMemeImages)

  const [meme,setMeme] = useState({
    topText:"",
    bottomText:"", 
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })
  
  
  function handleClick(){
    const memeItem = allMemeImages
    const randomMeme = memeItem[Math.floor(Math.random() * memeItem.length)];
    setMeme(prevState=>({
      ...prevState,
      topText:"",
      bottomText:"",  
      randomImage: randomMeme.url
    }))
  }

  function handleChange(event){
    event.preventDefault()
    setMeme(prevState =>({
      ...prevState,
      [event.target.name] : event.target.value
    }))
  }

  return(
    <div className="form">
      <div className="form__inputs-container">
        <input 
        className="form__input" 
        type="text" 
        placeholder="Top text" 
        name='topText'
        value={meme.topText}
        onChange={handleChange}
        >

        </input>
        <input 
        className="form__input" 
        type="text" 
        placeholder="Bottom text"
        name='bottomText'
        value={meme.bottomText}
        onChange={handleChange}

        >

        </input>
      </div>

      <button 
      className="form__button" 
      type="submit"
      onClick={handleClick}
      >
      Get a new meme image  🖼
      </button>
      <div className='meme'>
        <img 
        src={meme.randomImage}
        className="meme__img" 
        />

        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>

      </div>
    </div>
  )
}