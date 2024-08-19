import html from "html-literal";

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
              <h1 class="mainTitle">Daily Planner</h1>
              <button id="themeButton">
                <img src="images/sliders-solid.svg">
              </button>
            </div>
            <hr class="dotted">
            <div class="greetingDate">
              <h2 class="regText">hello name</h2>
              <h2 class="date regText">date</h2>
            </div>
            <div class="toDoList">
              <h2>To Do List:</h2>
              <p>Text Input</p>
            </div>
          </div>
          <div class="contentTwo">
            <div class="weather">
              <h2 class="weatherText">68°F</h2>
              <p>St. Louis, MO</p>
              <p class="weatherText">Sunny</p>
            </div>
            <div class="goals">
              <h2 class="noteHeader">Goals:</h2>
              <p>Example Text Here</p>
            </div>
            <div class="notes">
              <h2 class="noteHeader">Notes:</h2>
              <p>Example Text Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
