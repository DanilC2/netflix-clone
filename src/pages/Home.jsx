import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../assets/Avatar.jpeg.jpeg';
import IntoTheWild from '../assets/Intotheworld.jpeg';
import Inception from '../assets/Inception.jpeg';
import Lucy from '../assets/Lucy.jpeg';
import Theadamproject from '../assets/Theadamproject.jpeg';
import Armyofthieves from '../assets/Armyofthieves.jpeg';
import skyscraper from '../assets/skyscraper.jpeg';
import Theguilty from '../assets/Theguilty.jpeg';
import Thesilence from '../assets/Thesilence.jpeg';
import Triplefrontier from '../assets/Triplefrontier.jpeg';
import previewVideoDog from '../assets/1 Minute Video - Doggie.mp4';
import './Home.css';

export default function Home() {
  const [hoverMovie, setHoverMovie] = useState(false);
  const navigate = useNavigate();

  const MOVIES = {
    avatar: {
      name: 'Avatar',
      posterImage: Avatar,
      previewVideo: previewVideoDog,
      fullVideo: previewVideoDog
    },
    into_the_wild: {
      name: 'Into The Wild',
      posterImage: IntoTheWild,
      previewVideo: previewVideoDog,
      fullVideo: previewVideoDog
    },
    inception: {
      name: 'Inception',
      posterImage: Inception,
      previewVideo: previewVideoDog,
      fullVideo: previewVideoDog
    },
    lucy: {
      name: 'Lucy',
      posterImage: Lucy,
      previewVideo: previewVideoDog,
      fullVideo: previewVideoDog
    },
    army_of_thieves: {
      name: 'Army of Thieves',
      posterImage: Armyofthieves,
      previewVideo: previewVideoDog,
      fullVideo: previewVideoDog
    },
    skyscraper: {
      name: 'Skyscraper',
      posterImage: skyscraper,
      previewVideo: previewVideoDog,
      fullVideo: previewVideoDog
    },
    the_guilty: {
      name: 'The Guilty',
      posterImage: Theguilty,
      previewVideo: previewVideoDog,
      fullVideo: previewVideoDog
    },
    the_silence: {
      name: 'The Silence',
      posterImage: Thesilence, previewVideo:
        previewVideoDog, fullVideo:
        previewVideoDog
    },
    triple_frontier: {
      name: 'Triple Frontier',
      posterImage: Triplefrontier,
      previewVideo: previewVideoDog,
      fullVideo: previewVideoDog
    },
  };

  const onHoverMovie = (movie) => setHoverMovie(movie);

  const movies = Object.keys(MOVIES);

  return (
    <div className="posters">
      {movies.map((movie) =>
        hoverMovie === MOVIES[movie].name ? (
          <AutoPlayVideo
            key={movie}
            previewVideo={MOVIES[movie].previewVideo}
            onMouseLeave={() => onHoverMovie(false)}
            onClick={() =>
              navigate(`/video/${movie}`, { state: { video: MOVIES[movie].fullVideo } })
            }
          />
        ) : (
          <img
            key={movie}
            src={MOVIES[movie].posterImage}
            alt={MOVIES[movie].name}
            onMouseEnter={() => onHoverMovie(MOVIES[movie].name)}
            onClick={() =>
              navigate(`/video/${movie}`, { state: { video: MOVIES[movie].fullVideo } })
            }
          />
        )
      )}
    </div>
  );
}
function AutoPlayVideo({ previewVideo, onMouseLeave, onClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay failed. Make sure video is muted.', error);
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
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="hover-video"
    >
      <source src={previewVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
