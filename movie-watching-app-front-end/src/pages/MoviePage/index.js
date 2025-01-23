import styles from "./styles.module.css";
import Title_v2 from "../../components/components/Title_v2";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Movie from "../../components/components/Movie";
import { useParams } from "react-router-dom";
function MoviePage() {
  const [data, setData] = useState(null);
  const { movieName } = useParams();
  const [data_movie, setDataMovie] = useState(null);
  const movie_box_ref = useRef();
  useEffect(() => {
    fetch("http://localhost:5000/api/movie")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log("Success:", data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    if (data) {
      const movieFound = data.movies.find((movie) => movie.name === movieName);
      if (movieFound) {
        setDataMovie(movieFound);
        console.log("Found movie:", movieFound);
        // console.log("src:", movieFound.video);
        // console.log("banner:", movieFound.banner);
        // console.log("category:", movieFound.category);
      }
    }
  }, [data, movieName]);

  useEffect(() => {
    if (!movie_box_ref.current) return;

    const movie_box = movie_box_ref.current;
    let count = 0;

    movie_box.style.transition = "transform 0.5s ease-in-out";

    const interval = setInterval(() => {
      const numberOfMovies = movie_box.children.length;
      if (numberOfMovies === 0) return;

      if (numberOfMovies - count <= 4) {
        count = 0;
      }

      movie_box.style.transform = `translateX(calc(${count} * (-25% - 11px)))`;
      count++;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const videoRef = useRef();
  const rangeInputRef = useRef();
  const totalTimeRef = useRef();
  const curTimeRef = useRef();
  const curTimeRef_dialog = useRef();
  const background_imgRef = useRef();
  const menuContainerRef = useRef();
  const plr_control_ref = useRef();
  const favourite_box_ref = useRef();
  const [isSpeedRate, setIsSpeedRate] = useState("Normal");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const mouseMoveTimeoutRef = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  const handleAudioVideo = () => {
    const video = videoRef.current;
    if (isMuted) {
      video.muted = true;
    } else {
      video.muted = false;
    }
  };

  const handleMutedInput = (e) => {
    const video = videoRef.current;
    const event = e.nativeEvent;
    video.volume = parseFloat(event.target.value) / 100;
    document.documentElement.style.setProperty(
      "--value_volume",
      `calc(${event.target.value}%)`
    );
    if (event.target.value === "0") {
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

  function formatTime(value) {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = Math.floor(value % 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  function convertToSeconds(time) {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    return totalSeconds;
  }

  const handelMouseMove = (e) => {
    const event = e.nativeEvent;
    const totalTime = convertToSeconds(totalTimeRef.current.textContent);
    const curTimeDialog = curTimeRef_dialog.current;
    curTimeDialog.classList.remove(styles.hidden);

    const rangeWidth = event.target.offsetWidth;
    const position = (event.offsetX / rangeWidth) * 100;
    let value = (position / 100) * totalTime;
    if (value > totalTime) {
      value = totalTime;
    }
    if (value < 0) {
      value = 0;
    }

    curTimeDialog.style.left = `${position}%`;
    curTimeDialog.textContent = formatTime(value);
  };
  const handelMouseOut = () => {
    const curTimeDialog = curTimeRef_dialog.current;
    curTimeDialog.classList.add(styles.hidden);
  };
  const handleMouseProgress = (e) => {
    const event = e.nativeEvent;
    const video = videoRef.current;
    video.currentTime = (event.target.value * video.duration) / 100;
    document.documentElement.style.setProperty(
      "--value",
      `calc(${event.target.value}%)`
    );
  };
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const curTime = curTimeRef.current;
    const rangeInput = rangeInputRef.current;
    const currentTime = video.currentTime;
    curTime.textContent = formatTime(currentTime);

    const rangeValue = (currentTime / video.duration) * 100;
    rangeInput.value = rangeValue;
    document.documentElement.style.setProperty(
      "--value",
      `calc(${rangeValue}%)`
    );
  };
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    handleOffBackground();
    const video = videoRef.current;
    video.style.opacity = 1;
  };
  const handleEnded = () => {
    setIsPlaying(false);
  };
  const handleOffBackground = () => {
    const bgr = background_imgRef.current;
    bgr.style.opacity = 0;
  };
  useEffect(() => {
    const video = videoRef.current;
    video.onloadedmetadata = () => {
      curTimeRef.current.textContent = "00:00:00";
      totalTimeRef.current.textContent = formatTime(video.duration);
    };

    video.ontimeupdate = handleTimeUpdate;
    video.onended = handleEnded;
    return () => {
      video.onloadedmetadata = null;
      video.ontimeupdate = null;
      video.onended = null;
    };
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    const plr_control = plr_control_ref.current;

    clearTimeout(mouseMoveTimeoutRef.current); // Clear any previous timeout

    if (isPlaying) {
      video.play();

      // Use mouseMoveTimeoutRef to store the timeout reference
      mouseMoveTimeoutRef.current = setTimeout(() => {
        if (!plr_control.classList.contains(styles.isPlaying)) {
          plr_control.classList.add(styles.isPlaying);
        }
      }, 2000);
    } else {
      clearTimeout(mouseMoveTimeoutRef.current); // Clear the timeout when paused
      video.pause();
      if (plr_control.classList.contains(styles.isPlaying)) {
        plr_control.classList.remove(styles.isPlaying);
      }
    }

    // Cleanup function to clear timeout on unmount or dependency change
    return () => {
      clearTimeout(mouseMoveTimeoutRef.current);
    };
  }, [isPlaying]);

  const setPlaybackSpeed = (e) => {
    const video = videoRef.current;
    const event = e.nativeEvent;
    if (event.target.textContent === "Normal") {
      video.playbackRate = 1;
    } else {
      video.playbackRate = parseFloat(
        event.target.textContent.replace("x", "").trim()
      );
    }
  };
  const handleClickMenu = (e) => {
    const event = e.nativeEvent;
    const menu = menuContainerRef.current;
    const menu_plr_setting = menu.querySelectorAll(`.${styles.plr_setting}`);
    if (event.target.classList.contains(styles.checked)) {
      event.target.classList.remove(styles.checked);
      return;
    }
    menu_plr_setting.forEach((ele) => {
      if (ele.textContent === event.target.textContent) {
        ele.classList.add(styles.checked);
        setIsSpeedRate(ele.textContent);
      } else {
        ele.classList.remove(styles.checked);
      }
    });
    setPlaybackSpeed(e);
  };
  const handleMenu = () => {
    const menu = menuContainerRef.current;
    const menu_box = menu.querySelector(`.${styles.menu_box}`);
    if (menu.style.top === "-271%") {
      menu.style.top = "-146%";
      menu.style.overflowY = "hidden";
    } else {
      menu.style.top = "-271%";
      menu.style.overflowY = "scroll";
    }
    menu_box.classList.toggle(styles.focus);
  };
  const handleToggleMenu = (e) => {
    const event = e.nativeEvent;
    if (event.target.tagName === "BUTTON") {
      const setting_box = event.target.parentElement;
      setting_box.classList.toggle(styles.hidden_after);
    } else {
      const setting_box = event.target.parentElement.parentElement;
      setting_box.classList.toggle(styles.hidden_after);
    }
    const menu = menuContainerRef.current;
    if (menu.style.display === "block") {
      menu.style.top = "-47px";
      menu.style.overflowY = "hidden";
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
    const menu_box = menu.querySelector(`.${styles.menu_box}`);
    menu_box.classList.remove(styles.focus);
  };
  const handlePip = (e) => {
    const video = videoRef.current;
    const pipButton = e.nativeEvent.target;
    if (isPlaying) {
      pipButton.addEventListener("click", async () => {
        if (document.pictureInPictureEnabled) {
          try {
            if (document.pictureInPictureElement) {
              // Nếu video đang ở chế độ PiP, thoát khỏi PiP
              await document.exitPictureInPicture();
            } else {
              // Nếu video chưa ở chế độ PiP, kích hoạt PiP
              await video.requestPictureInPicture();
            }
          } catch (error) {
            console.error("Failed to toggle Picture-in-Picture mode:", error);
          }
        } else {
          alert("Picture-in-Picture is not supported by your browser.");
        }
      });
    }
  };
  const toggleFullScreen = () => {
    const video_container = document.getElementById("video");
    if (!document.fullscreenElement) {
      // Nếu không đang ở chế độ toàn màn hình
      video_container.requestFullscreen();
    } else {
      // Nếu đang ở chế độ toàn màn hình, thoát ra
      document.exitFullscreen();
    }
  };
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleMovePlrControl = (e) => {
    const event = e.nativeEvent;
    const currentPosition = { x: event.clientX, y: event.clientY };
    const plr_control = plr_control_ref.current;
    const lastPosition = lastPositionRef.current;
    const mouseMoveTimeout = mouseMoveTimeoutRef.current;
    if (isPlaying) {
      if (
        currentPosition.x !== lastPosition.x ||
        currentPosition.y !== lastPosition.y
      ) {
        lastPositionRef.current = currentPosition;

        if (plr_control.classList.contains(styles.isPlaying)) {
          plr_control.classList.remove(styles.isPlaying);
        }

        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeoutRef.current = setTimeout(() => {
          if (
            plr_control &&
            !plr_control.classList.contains(styles.isPlaying)
          ) {
            plr_control.classList.add(styles.isPlaying);
          }
        }, 2000);
      }
    } else {
      clearTimeout(mouseMoveTimeout);
      if (plr_control.classList.contains(styles.isPlaying)) {
        plr_control.classList.remove(styles.isPlaying);
      }
    }
  };

  const handleOutPlrControl = () => {
    const plr_control = plr_control_ref.current;
    if (isPlaying) {
      clearTimeout(mouseMoveTimeoutRef.current);
      mouseMoveTimeoutRef.current = setTimeout(() => {
        if (!plr_control.classList.contains(styles.isPlaying)) {
          plr_control.classList.add(styles.isPlaying);
        }
      }, 2000);
    } else {
      clearTimeout(mouseMoveTimeoutRef.current);
      if (plr_control.classList.contains(styles.isPlaying)) {
        plr_control.classList.remove(styles.isPlaying);
      }
    }
  };
  const handleLike = (e) => {
    let eventTarget = e.nativeEvent.target;

    if (eventTarget.tagName !== "BUTTON") {
      eventTarget = eventTarget.closest("button");
    }

    if (!eventTarget) return;

    const favourite_box = favourite_box_ref.current;
    const like_button = favourite_box.querySelectorAll("button");

    like_button.forEach((button) => {
      console.log(button);
      if (button === eventTarget) {
        button.classList.toggle(styles.active);
      } else {
        button.classList.remove(styles.active);
      }
    });
  };

  return (
    <div className={styles.moviePage_container}>
      <div className={styles.title_box}>
        <Title_v2
          name={data_movie ? data_movie.name : ""}
          duration={data_movie ? data_movie.duration : ""}
          releaseDate={data_movie ? data_movie.releaseDate : ""}
          category={data_movie ? data_movie.category : ""}
          ageRating={data_movie ? data_movie.ageRating : ""}
        />
      </div>
      <div className={styles.main}>
        <div id="video" className={clsx(isFullscreen ? styles.fullScreen : "")}>
          <div
            className={clsx(
              styles.play_control,
              isFullscreen ? styles.fullScreen : ""
            )}
            ref={plr_control_ref}
            onMouseMove={handleMovePlrControl}
          >
            <div className={styles.play_box}>
              <button
                className={clsx(styles.play, isPlaying ? styles.hidden : "")}
                onClick={handlePlayPause}
              >
                <i className="zmdi zmdi-play"></i>
              </button>
              <button
                className={clsx(styles.pause, isPlaying ? "" : styles.hidden)}
                onClick={handlePlayPause}
              >
                <i className="zmdi zmdi-pause"></i>
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
                defaultValue="0"
                onInput={handleMouseProgress}
              />
              <span className={styles.hidden} ref={curTimeRef_dialog}></span>
            </div>
            <div className={styles.time}>
              <span className={styles.curTime} ref={curTimeRef}></span>
              <span>-</span>
              <span className={styles.totalTime} ref={totalTimeRef}></span>
            </div>
            <div className={styles.volume_box}>
              <div className={styles.volume}>
                <button
                  className={clsx(isMuted ? styles.hidden : "")}
                  onClick={handleMutedClick}
                >
                  <i className="zmdi zmdi-volume-up"></i>
                </button>
                <button
                  className={clsx(isMuted ? "" : styles.hidden)}
                  onClick={handleMutedClick}
                >
                  <i className="zmdi zmdi-volume-off"></i>
                </button>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                defaultValue="50"
                onInput={handleMutedInput}
              />
            </div>
            <div className={clsx(styles.setting_box, styles.hidden_after)}>
              <button
                className={styles.setting_icon}
                onClick={handleToggleMenu}
              >
                <i className="zmdi zmdi-settings"></i>
              </button>
              <div
                className={clsx(styles.menu_container)}
                ref={menuContainerRef}
              >
                <div className={styles.menu_box}>
                  <button onClick={handleMenu}>
                    <span>
                      <i className="zmdi zmdi-chevron-left"></i>
                    </span>
                    <span>Speed</span>
                    <span>{isSpeedRate}</span>
                    <span>
                      <i className="zmdi zmdi-chevron-right"></i>
                    </span>
                  </button>
                  <div role="menu">
                    <div
                      className={styles.plr_setting}
                      onClick={handleClickMenu}
                    >
                      <span>
                        0.5<small>x</small>
                      </span>
                    </div>
                    <div
                      className={clsx(styles.plr_setting, styles.checked)}
                      onClick={handleClickMenu}
                    >
                      <span>Normal</span>
                    </div>
                    <div
                      className={styles.plr_setting}
                      onClick={handleClickMenu}
                    >
                      <span>
                        1.5<small>x</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pip_box} onClick={handlePip}>
              <button>
                <i className="zmdi zmdi-open-in-new"></i>
              </button>
              <span className={styles.pip}></span>
            </div>
            <div className={styles.fullScreen_box}>
              <button
                onClick={toggleFullScreen}
                className={isFullscreen ? styles.hidden : ""}
              >
                <i className="zmdi zmdi-fullscreen"></i>
              </button>
              <button
                className={isFullscreen ? "" : styles.hidden}
                onClick={toggleFullScreen}
              >
                <i className="zmdi zmdi-fullscreen-exit"></i>
              </button>
            </div>
          </div>
          <div
            className={clsx(
              styles.videoWrapper,
              isFullscreen ? styles.fullScreen : ""
            )}
          >
            <video
              src={
                data_movie && data_movie.video
                  ? "/Hustlang Robber - King Vamp ft. Hổ (Official Lyric Video).mp4"
                  : "/Hustlang Robber - King Vamp ft. Hổ (Official Lyric Video).mp4"
              }
              // src="/Hustlang Robber - King Vamp ft. Hổ (Official Lyric Video).mp4"
              ref={videoRef}
              onPlay={() => {
                setIsPlaying(true);
              }}
              onPause={() => {
                setIsPlaying(false);
              }}
              loop
            ></video>
            <div
              className={styles.background_img}
              style={{
                backgroundImage: `url(${data_movie ? data_movie.banner : ""})`,
              }}
              ref={background_imgRef}
              onClick={() => {
                handleOffBackground();
                handlePlayPause();
              }}
              onMouseMove={handleMovePlrControl}
              onMouseOut={handleOutPlrControl}
            ></div>
            <button
              onClick={handlePlayPause}
              className={isPlaying ? styles.focus : ""}
            >
              <i className="zmdi zmdi-play"></i>
            </button>
          </div>
        </div>
        <div className={styles.content_box}>
          <div className={styles.direc}>
            <p>
              <span className={styles.highlight}>Director : </span>{" "}
              {data_movie ? data_movie.director : ""}
            </p>
            <p>
              <span className={styles.highlight}>Starring : </span>{" "}
              {data_movie ? data_movie.stars.join(" - ") : ""}
            </p>
          </div>
          <p>{data_movie ? data_movie.description : ""}</p>

          <div className={styles.nav}>
            <div>
              <span className={styles.highlight}>Share : </span>
              <div className={styles.iconBox}>
                <button>
                  <i className="zmdi zmdi-facebook"></i>
                </button>
                <button>
                  <i className="zmdi zmdi-instagram"></i>
                </button>
                <button>
                  <i className="zmdi zmdi-linkedin-box"></i>
                </button>
              </div>
            </div>
            <div ref={favourite_box_ref}>
              <button onClick={handleLike}>
                <i className="zmdi zmdi-thumb-up"></i>
              </button>
              <button onClick={handleLike}>
                <i className="zmdi zmdi-thumb-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.movie_container}>
            <div className={styles.movie_box} ref={movie_box_ref}>
              {data
                ? data.movies
                    .filter((movie) => {
                      // Kiểm tra thể loại trùng và tên phim không trùng với data_movie
                      return (
                        movie.category.some(
                          (cat) =>
                            data_movie && data_movie.category.includes(cat)
                        ) && movie.name !== data_movie.name
                      );
                    })
                    .map((movie, idx) => (
                      <Movie
                        id={movie._id}
                        key={idx}
                        name={movie.name}
                        img_src={movie.banner}
                      />
                    ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
