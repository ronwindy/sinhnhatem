import { useEffect } from "react";
import "./Gift.scss";

function Gift() {
  useEffect(() => {
    let audio = new Audio("music/happy-birthday.mp3");
    audio.play();
  }, []);

  return (
    <div className="gift-container">
      <div id="merrywrap" className="merrywrap">
        <canvas id="snowfall"></canvas>
        <div className="giftbox">
          <div className="cover">
            <div></div>
          </div>
          <div className="box"></div>
        </div>
        <div className="icons">
          <div className="row">
            <span className="letter">H</span>
            <span className="letter">a</span>
            <span className="letter">p</span>
            <span className="letter">p</span>
            <span className="letter">y</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">B</span>
            <span className="letter">i</span>
            <span className="letter">r</span>
            <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">d</span>
            <span className="letter">a</span>
            <span className="letter">y</span>
          </div>
          <div className="row">
            <span>E</span>
            <span>m</span>
            <span className="letter">&nbsp;</span>
            <span>Y</span>
            <span>ê</span>
            <span>u</span>
            <span className="letter">&nbsp;</span>
            <span>!</span>
            <span>!</span>
            <span>!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
