import React, {Component} from 'react';
import '../App/App.css';

class Gallery extends Component{
  playAudio(previewUrl){
    let audio = new Audio(previewUrl);
    audio.play();
  }
  render(){
    const {tracks} = this.props;
    return (
      <div>
        {tracks.map((track, key)=>{
          const trackImg = track.album.images[0].url;
          return(
            <div 
              key={key}
              className="track"
              onClick={() => this.playAudio(track.previewUrl)}>
              <img 
                src={trackImg} 
                className="track-img"
                alt="track"/>
              <p className="track-text"></p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery;