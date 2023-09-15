import React from "react";
import Fade from "react-reveal/Fade";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Fade bottom>
          <p class="footer-heart">
            Made with{" "}
            <g-emoji
              class="g-emoji"
              alias="heart"
              fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
            >
              <img
                class="emoji"
                alt="heart"
                height="20"
                width="20"
                src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
              />
            </g-emoji>{" "}
            by <a href="https://17h4ck3r11.github.io/" target="#" style={{ textDecoration:"none", textShadow: "0px 0px 0px transparent", fontWeight:600}}>Amit Kumar Gupta</a>
          </p>
        </Fade>
      </div>
    );
  }
}

export default Footer;
