import React from "react";

const Card = ({data}) => {
    console.log(data.image?.original)
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          src={data.image?.original ? data.image?.original: 'http://static.tvmaze.com/uploads/images/original_untouched/57/142889.jpg'}
          alt="episode"
        />
      </div>
      <div className="card-content">
       <p className="episode-name">{data.name}</p>
        <div className="movie-info">
          <p>Season: {data.season}</p>
          <p>Episode: {data.number}</p>
          <p>Duration: {data.runtime} mins</p>
        </div>
        <div className="summary" dangerouslySetInnerHTML={{__html: data.summary}}>
        </div>
      </div>
    </div>
  );
};

export default Card;
