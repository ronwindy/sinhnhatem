import "./Gift.scss";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Fireworks } from "fireworks/lib/react";

function Gift() {
  useEffect(() => {
    const script = document.createElement("script");

    script.innerHTML = `
      var merrywrap = document.getElementById("merrywrap");
      var box = merrywrap.getElementsByClassName("giftbox")[0];
      var trendyButtonContainer = document.getElementsByClassName(
        "trendy-btn-container"
      )[0];
      trendyButtonContainer.style.visibility = "hidden";
      var step = 1;
      var stepMinutes = [2000, 2000, 1000, 1000];
      function init() {
        box.addEventListener("click", openBox, false);
      }
      function stepClass(step) {
        merrywrap.className = "merrywrap";
        merrywrap.className = "merrywrap step-" + step;
      }
      function openBox() {
        if (step === 1) {
          box.removeEventListener("click", openBox, false);
        }
        stepClass(step);
        if (step === 2) {
          let audio = new Audio("music/happy-birthday.mp3");
          audio.play();
        }

        if (step === 3) {
        }
        if (step === 4) {
          trendyButtonContainer.style.visibility = "visible";
          trendyButtonContainer.style.zIndex = 1;
          trendyButtonContainer.style.opacity = 0;
          trendyButtonContainer.style.animation = "fadein 2s";
          trendyButtonContainer.style.animationDelay = "10s";
          trendyButtonContainer.style.animationFillMode = "forwards";
          return;
        }
        setTimeout(openBox, stepMinutes[step - 1]);
        step++;
      }

      init();
    `;

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  let fxProps = {
    count: 3,
    interval: 200,
    bubbleSizeMaximum: 1,
    bubbleSpeedMaximum: 10,
    colors: ["#FE8F8F", "#FCD2D1", "#FFEDD3"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };

  return (
    <div className="gift-container">
      <Fireworks {...fxProps} />
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
            <span>🎈</span>
            <span>E</span>
            <span>m</span>
            <span className="letter">&nbsp;</span>
            <span>Y</span>
            <span>ê</span>
            <span>u</span>
            <span className="letter">&nbsp;</span>
            <span>🎈</span>
            <span>🎉</span>
          </div>
        </div>
        <div className="trendy-btn-container">
          <Link
            className="trendy_btn button_two radius shadow"
            to="/slideshow"
            title="Button Two"
          >
            <span className="txt">Click đây nào</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gift;
