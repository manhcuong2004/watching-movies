import styles from "./styles.module.css";
import Title_v2 from "../../components/components/Title_v2";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
function MoviePage() {
  const videoRef = useRef();
  const volumeRef = useRef();
  const [dataPoster, setDataPoster] = useState(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const videoSrc = video.getAttribute("data_poster");
      setDataPoster(videoSrc);
    }
  }, []);
  const [isPlay, setIsPlay] = useState(false);
  const handlePlay = () => {
    setIsPlay(!isPlay);
  };
  const [isMuted, setIsMuted] = useState(false);
  const handleAudioVideo = () => {
    const video = videoRef.current;
    const volume = volumeRef.current;
    if (isMuted) {
      video.muted = true;
    } else {
      video.muted = false;
      video.volume = parseFloat(volume.value) / 100;
    }
  };
  const handleMutedInput = () => {
    const volume = volumeRef.current;
    if (volume.value === "0") {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };
  const handleMutedClick = () => {
    setIsMuted(!isMuted);
  };
  useEffect(() => {
    handleAudioVideo();
  }, [isMuted]);
  const rangeInputRef = useRef();
  const totalTimeRef = useRef();
  const curTimeRef = useRef();
  function formatTime(value) {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = Math.floor(value % 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  function convertToSeconds(time) {
    const [hours, minutes, seconds] = time.split(":").map(Number); 
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    return totalSeconds; 
  }
    
  const handelMouseMove = (e) => {
    const nativeEvent = e.nativeEvent;
    const rangeInput = rangeInputRef.current;
    const totalTime = convertToSeconds(totalTimeRef.current.textContent);
    const curTime = curTimeRef.current;
    curTime.classList.remove(styles.hidden)

    const rangeWidth = rangeInput.offsetWidth;
    const max = totalTime;
    const min = 0;
    const position = (nativeEvent.offsetX / rangeWidth) * 100;
    const value = (position / 100) * (max - min);
    curTime.style.left = `${position}%`;
    curTime.textContent = formatTime(value);
  };
  const handelMouseOut =()=>{
    const curTime = curTimeRef.current;
    curTime.classList.add(styles.hidden)
  }
  return (
    <div className={styles.moviePage_container}>
      <div className={styles.title_box}>
        <Title_v2 />
      </div>
      <div className={styles.main}>
        <div className={styles.play_control}>
          <div className={styles.play_box}>
            <button
              className={clsx(styles.play, isPlay ? styles.hidden : "")}
              onClick={handlePlay}
            >
              <i class="zmdi zmdi-play"></i>
            </button>
            <button
              className={clsx(styles.pause, isPlay ? "" : styles.hidden)}
              onClick={handlePlay}
            >
              <i class="zmdi zmdi-pause"></i>
            </button>
          </div>
          <div className={styles.progress}>
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              ref={rangeInputRef}
              onMouseMove={handelMouseMove}
              onMouseOut={handelMouseOut}
            />
            <span className={styles.hidden} ref={curTimeRef}></span>
          </div>
          <div className={styles.time}>
            <span className={styles.curTime}></span>
            <span>-</span>
            <span className={styles.totalTime} ref={totalTimeRef}>
              00:00:14
            </span>
          </div>
          <div className={styles.volume_box}>
            <div className={styles.volume}>
              <button
                className={clsx(isMuted ? styles.hidden : "")}
                onClick={handleMutedClick}
              >
                <i class="zmdi zmdi-volume-up"></i>
              </button>
              <button
                className={clsx(isMuted ? "" : styles.hidden)}
                onClick={handleMutedClick}
              >
                <i class="zmdi zmdi-volume-off"></i>
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              ref={volumeRef}
              onInput={handleMutedInput}
            />
          </div>
          <div className={styles.setting_box}>
            <button className={styles.setting_icon}>
              <i class="zmdi zmdi-settings"></i>
            </button>
            <div className={clsx(styles.menu_container, styles.hidden)}>
              <div className={styles.plr_setting}>
                <span>Speed</span>
                <span>Normal</span>
                <span>
                  <i class="zmdi zmdi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.pip_box}>
            <button>
              <i class="zmdi zmdi-open-in-new"></i>
            </button>
            <span className={styles.pip}></span>
          </div>
          <div className={styles.fullScreen_box}>
            <button>
              <i class="zmdi zmdi-fullscreen"></i>
            </button>
            <button className={styles.hidden}>
              <i class="zmdi zmdi-fullscreen-exit"></i>
            </button>
          </div>
        </div>
        <div className={styles.videoWrapper}>
          <video
            src="https://streamo.vuejstemplate.com/video/video.mp4"
            data_poster="https://streamo.vuejstemplate.com/images/slider/slider-hm4-2.jpg"
            ref={videoRef}
          ></video>
          <div
            className={styles.background_img}
            style={{ backgroundImage: `url(${dataPoster})` }}
          ></div>
          <button>
            <i class="zmdi zmdi-play"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
