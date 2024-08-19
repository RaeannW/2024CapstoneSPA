import html from "html-literal";
import * as views from "../views";

export default (state) =>
  html`
 <section>
  <div class="outer">
  <div class="row">
          <div class="side">
            <nav>
              <i class="fas fa-bars"></i>
              <div class="hidden--mobile nav-links">
            <img id="logo" src="images/planPalLogo.png">
            <div class="navMain">
              <div class="subNavMain">
                <span class="dot"></span>
                <h3 class="navText">name</h3>
              </div>
              <div class="subNavMain">
                <span class="dot"></span>
                <a href="index.html">
                  <h3 class="navText">daily</h3>
                </a>
              </div>
              <div class="subNavMain">
                <span class="dot"></span>
                <h3 class="navText">weekly</h3>
              </div>
              <div class="subNavMain">
                <span class="dot"></span>
                <h3 class="navText">monthly</h3>
              </div>
            </div>
            <hr class="dotted-nav">
            <a href="about.html">
              <h4 class="navTextBottom">about</h4>
            </a>
            <a href="contact.html">
              <h4 class="navTextBottom">contact</h4>
            </a>
            <h4 class="navTextBottom">follow us:</h4>
            <img class="socialIcon" src="images/Instagram.svg">
            <img class="socialIcon" src="images/LinkedIn.svg">
            <img class="socialIcon" src="images/GitHub.svg">
            <img class="socialIcon" src="images/Pinterest.svg">
            <h4 class="navTextBottom">Planpal app © 2024</h4>
        </nav>
        </div>
        <div class="content">
        <div class="row">
          <div class="contentOne">
    ${views[state.view](state)}
    </div>
    </div>
    </div>
</div>
<section>
  `;
