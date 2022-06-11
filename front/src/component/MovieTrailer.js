import React from "react";

const MovieTrailer = (props) => {
  return (
    <>
      <div className="video-responsive" 
  style={{position: "relative", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)"}}>
    <iframe 
    width="100%" 
    height="650" 
    src={props.src} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
    </>
  )
  
};

export default MovieTrailer;
