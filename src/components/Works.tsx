import { useState } from "react";

function Works() {
  const [hidden1, setHidden1] = useState<boolean>(true);
  const [hidden2, setHidden2] = useState<boolean>(true);
  const [hidden3, setHidden3] = useState<boolean>(true);
  const [hidden4, setHidden4] = useState<boolean>(true);
  const [hidden5, setHidden5] = useState<boolean>(true);

  function triggerHidden1() {
    setHidden1(false);
    setHidden2(true);
    setHidden3(true);
    setHidden4(true);
    setHidden5(true);
  }

  function triggerHidden2() {
    setHidden2(false);
    setHidden1(true);
    setHidden3(true);
    setHidden4(true);
    setHidden5(true);
  }
  function triggerHidden3() {
    setHidden3(false);
    setHidden1(true);
    setHidden2(true);
    setHidden4(true);
    setHidden5(true);
  }
  function triggerHidden4() {
    setHidden4(false);
    setHidden1(true);
    setHidden2(true);
    setHidden3(true);
    setHidden5(true);
  }

  function triggerHidden5() {
    setHidden5(false);
    setHidden1(true);
    setHidden2(true);
    setHidden3(true);
    setHidden4(true);
  }
  return (
    <div className="Works">
      <div className="work-container" onClick={triggerHidden1}>
        <img src="icecream.jpg" alt="" className="works-img" />
        <article>
          <p className="work-paragraph">
            <a href="">Code</a> | <a href="">Live</a>
          </p>
          <h4 className="work-title">Coffee, Cream and Cookies!</h4>
          {hidden1 ? null : (
            <p>
              Coffee,Cream and Cookies was my first hand-in for Grand Circus. It
              tested our ability in HTML and CSS by looking at a picture and
              remaking it.
            </p>
          )}
        </article>
      </div>
      <div className="work-container" onClick={triggerHidden4}>
        <div className="work-image-container">
          <img src="Socialposts.jpg" alt="" className="works-img" />
        </div>
        <article>
          <p className="work-paragraph">
            <a href="">Code</a> | <a href="">Live</a>
          </p>
          <h4 className="work-title">Social Posts</h4>
          {hidden4 ? null : (
            <p>
              Social posts was our first hand-in with React. We learned how to
              add posts to a message board and delete them. Also, where we
              learned about modals!
            </p>
          )}
        </article>
      </div>
      <div className="work-container" onClick={triggerHidden2}>
        <img src="Giphyapp.jpg" alt="" className="works-img" />
        <article>
          <p className="work-paragraph">
            <a href="">Code</a> | <a href="">Live</a>
          </p>
          <h4 className="work-title">Giphy App!</h4>
          {hidden2 ? null : (
            <p>
              The Giphy App was our first big hand-in working within React and
              pulling in data from a third-party API. (This project was my
              favorite)
            </p>
          )}
        </article>
      </div>
      <div className="work-container" onClick={triggerHidden3}>
        <div className="work-image-container">
          <img src="Disneywork.jpg" alt="" className="works-img" />
        </div>
        <article>
          <p className="work-paragraph">
            <a href="">Code</a> | <a href="">Live</a>
          </p>
          <h4 className="work-title">Better than Disney App!</h4>
          {hidden3 ? null : (
            <p>
              Better than Disney was our first group project within React. We
              pulled from TMD API for movie data.
            </p>
          )}
        </article>
      </div>
      <div className="work-container" onClick={triggerHidden5}>
        <div className="work-image-container">
          <img src="socialspark.jpg" alt="" className="works-img" />
        </div>
        <article>
          <p className="work-paragraph">
            <a href="">Code</a> | <a href="">Live</a>
          </p>
          <h4 className="work-title">Social Spark App!</h4>
          {hidden5 ? null : (
            <p>
              Social Spark was our final project. We created this app to help
              those that struggle in social situations so it's packed with
              trivia questions, jokes, and icebreakers.
            </p>
          )}
        </article>
      </div>
    </div>
  );
}

export default Works;
