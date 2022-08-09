import React from "react";
import "./featuredMovie.css";
import {
  BsFillPlayFill,
  BsInfoCircle,
  BsPause,
  BsStarHalf,
  BsPlusLg,
} from "react-icons/bs";
import moneyHeistTrailer from "../../assets/money-heist-trailer.mp4";
import moneyHeist2 from "../../assets/money-heist2.jpeg";

const FeaturedMovie = () => {
  const [isPlay, setIsPlay] = React.useState(false);
  const [isInfoOpen, setIsInfoOpen] = React.useState(false);
  const featuredMovieModalRef = React.useRef();

  const handlePlay = () => setIsPlay((played) => !played);

  React.useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (
        isInfoOpen &&
        featuredMovieModalRef.current &&
        !featuredMovieModalRef.current.contains(e.target)
      ) {
        setIsInfoOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickOutside);
    };
  }, [isInfoOpen]);

  const renderFeaturedMovieModal = () => {
    if (isInfoOpen)
      return (
        <div
          ref={featuredMovieModalRef}
          className="featuredMovie-modal__container"
        >
          <div className="featuredMovie-modal-img__container">
            <img src={moneyHeist2} alt="" />
          </div>
          <div className="featured-modal-content__container">
            <h1>money heist: korea-joint economic area</h1>
            <div>
              <div>
                <h5>action,adventure,crime,drama,mystery</h5>
                <h5>no. of episodes: 6</h5>
                <div className="featured-modal-ratings__container">
                  <p>2022</p>
                  <BsStarHalf />
                  <p>8.6</p>
                </div>
                <button className="featuredMovie-watchNow__btn">
                  Watch now!
                </button>
              </div>
              <button className="featuredMovie-modal-addToWatchlist__container">
                <BsPlusLg />
                <p>Watchlist</p>
              </button>
            </div>
            <p className="featuredMovie-content">
              The series, both a remake and spin-off/continuation of the Spanish
              TV drama, follows the storyline and characters of the original.
              "The Professor" (Yoo Ji-tae), a strategist criminal mastermind,
              plans to pull off a heist in the reunified Korean Peninsula
              inspired by those in Spain. The operation involves strategists and
              desperados with different characteristics and abilities, who have
              to face unusual situations. Thieves overtake the mint of a unified
              Korea. With hostages trapped inside, the police must stop them —
              as well as the shadowy mastermind behind it all.
            </p>
          </div>
        </div>
      );
  };

  return (
    <div className="featuredMovie__container">
      {isPlay && (
        <div className="featuredMovie-video__container ">
          <video autoPlay muted loop src={moneyHeistTrailer} type="video/mp4" />
        </div>
      )}
      {renderFeaturedMovieModal()}
      <div className="featuredMovie-content__container">
        <h1  className={isPlay && 'hide'}>Money Heist:Korea- Joint economic area</h1>
        <p className={isPlay && 'hide'}>
          Disguised under the shadow of a mask, a crew of desperados
          <br />
          band together under the leadership of a criminal mastermind known
          <br />
          only as "The professor" to pull off the biggest heist korean has ever
          seen
        </p>
        <div className="featuredMovie-btn__container">
          <button onClick={handlePlay} className="featuredMovie-play__btn">
            {isPlay ? (
              <BsPause className="featuredMovie-btn__icon" />
            ) : (
              <BsFillPlayFill className="featuredMovie-btn__icon" />
            )}
            <p>Play</p>
          </button>
          <button
            onClick={() => setIsInfoOpen(true)}
            className="featuredMovie-info__btn"
          >
            <BsInfoCircle className="featuredMovie-btn__icon2" />
            <p>info</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
