import "./Slideshow.scss";

import { Link } from "react-router-dom";

function Slideshow() {
  return (
    <div className="slideshow-container">
      <iframe
        src="https://www.youtube.com/embed/5lVlhbEcAv0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="trendy-btn-container">
        <Link
          className="trendy_btn button_two radius shadow"
          to="/letter"
          title="Button Two"
        >
          <span className="txt">Xem xong click đây nghen 😘</span>
        </Link>
      </div>
    </div>
  );
}

export default Slideshow;
