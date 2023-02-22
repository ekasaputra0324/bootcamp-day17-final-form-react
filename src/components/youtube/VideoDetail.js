import React from "react";

// membuat function vidio detail
const VideoDetail = ({video}) => {
    // eror henling jika vidio tidak ada
    if (!video) 
    {
        return <div>
            <p>Loading Video</p>
        </div>    
    }
    // membuat src vidio dengan mengunakan link embed yang di sesidakan oleh yt
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    console.log(typeof(video));

    // function ini  mengembalikan tampilan detail vidio yang akan di putar
    return (
        <div>
        <div className="ui embed">
            <iframe src={videoSrc} allowFullScreen title="Video Player"  />
        </div>
        <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        </div>  
        </div>
    )
}

export default VideoDetail;