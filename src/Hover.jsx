import { StrictMode, useEffect, useState,useRef } from 'react'
import { createRoot } from 'react-dom/client'
import Avatar from 'src\\assets\\avatar.jpeg.jpg'
import Inception from 'src\assets\Inception.jpeg'
import IntoTheWild from 'src\\assets\\Intotheworld.jpeg'
import Lucy from 'src\\assets\\Lucy.jpeg'
import theAdamProject from 'src\\assets\\Theadamproject.jpeg'




export function Hover() {


    const [hoverMovie,setHoverMovie] = useState(false)

    const MOVIES = {
        avatar:{
            name:'Avatar',
            posterImage:Avatar,
            previewVideo:'src\\assets\\1 Minute Video - Doggie.mp4',
        },
        into_the_wild:{
            name:'Into The Wild',
            posterImage:IntoTheWild,
            previewVideo:'src\\assets\\1 Minute Video - Doggie.mp4',
        },
        inception:{
            name:'Inception',
            posterImage:Inception,
            previewVideo:'src\\assets\\1 Minute Video - Doggie.mp4'
        },
        lucy:{
            name:'Lucy',
            posterImage:Lucy,
            previewVideo:'src\\assets\\1 Minute Video - Doggie.mp4'
        },
        the_adam_project:{
            name:'The Adam Project',
            posterImage:theAdamProject,
            previewVideo:'src\\assets\\1 Minute Video - Doggie.mp4'
        }

    }

    const onHoverMovie = (movie)=>{
        setHoverMovie(movie)
    }

    const movies = Object.keys(MOVIES)
    return(
        <>
        {
            
            movies.map((movie,index)=>(
                <div className='poster-card' key={index} 
                onMouseEnter={()=>{
                    onHoverMovie(MOVIES[movie].name)
                }}
                onMouseLeave={()=>{
                    onHoverMovie(false)
                }}
                
                style={{width:'200px', height:'300px' ,border:'2px black solid',overflow:'hidden'}}
                >
                    <h1>{MOVIES[movie].name}</h1>
                    {!(hoverMovie==MOVIES[movie].name)?
                    <img src={MOVIES[movie].posterImage} alt="" style={{width:'100%', height:'100%' }} />:
                    <AutoPlayVideo previewVideo={MOVIES[movie].previewVideo}></AutoPlayVideo>}
                    
                </div>  
            ))
        }
        </>
    )
}


function AutoPlayVideo({previewVideo}) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Try to play video programmatically
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay failed. Make sure video is muted.", error);
        });
      }
    }
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      style={{width:'100%'}}
    >
      <source src={previewVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

