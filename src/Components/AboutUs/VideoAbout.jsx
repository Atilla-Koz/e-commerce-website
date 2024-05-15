import { useState } from 'react';
import nor from '../../assets/AboutUS/norway.mp4';
import button from '../../assets/AboutUS/buttonS.svg';

export default function VideoAbout() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = document.getElementById('norwayVideo');
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="flex justify-center w-full pb-16 relative">
      <video
        id="norwayVideo"
        className="w-[306px] h-[316px] rounded-lg object-cover"
        src={nor}
        autoPlay
        loop
        muted
        onClick={handleVideoClick}
      />
      {!isPlaying && (
        <img
          src={button}
          alt="Play Button"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleVideoClick}
        />
      )}
    </section>
  );
}
