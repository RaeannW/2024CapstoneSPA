import html from "html-literal";
import heart from "../assets/img/heart.svg";
import star from "../assets/img/star.svg";
import circle from "../assets/img/circle.svg";

export default () => html`
  <section>
  <div class="outer">
      <div class="row">
        <div class="side">
          <!-- <nav>
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
      </nav> -->
      </div>
      <div class="content">
        <div class="row">
          <div class="contentOne">
            <div class="titleSettings">
              <h1 class="mainTitle">About</h1>
            </div>
            <hr class="dotted">
          </div>
          <div class="contentTwo">
              <div class="heartStarCircleSection">
                <img class="heartStarCircle" src="${heart}" alt="heart">
                <img class="heartStarCircle" src="${star}" alt="star">
                <img class="heartStarCircle" src="${circle}" alt="star">
              </div>
          </div>
        </div>
        <div class="rowAbout">
          <div class="about">
            <h3 class="headingOne">Heading Two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Ullamcorper
              malesuada proin libero nunc consequat interdum varius sit. Dictum fusce ut placerat orci nulla
              pellentesque dignissim. Non diam phasellus vestibulum lorem. Fringilla phasellus faucibus scelerisque
              eleifend donec pretium.</p>
          </div>
          <div class="aboutImg">
            <img class="aboutImgOne" src="images/cupcakes.jpeg">
          </div>
        </div>
        <div class="rowAboutTwo">
          <div>
            <img class="aboutTwoImg" src="images/cupcakes.jpeg">
          </div>
          <div class="about">
            <h3 class="headingTwo">Heading Two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Ullamcorper
              malesuada proin libero nunc consequat interdum varius sit. Dictum fusce ut placerat orci nulla
              pellentesque dignissim. Non diam phasellus vestibulum lorem. Fringilla phasellus faucibus scelerisque
              eleifend donec pretium. </p>
            <button class="generalButton">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;