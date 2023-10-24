import React from 'react';

function MusicVideo() {
  return (
    <div>
      <h1>Music</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=6POZlJAZsok"
        frameborder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default MusicVideo;

onload = () =>{
        document.body.classList.remove("container");
};
