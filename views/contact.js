import html from "html-literal";
import dogpic from "../assets/img/dog-with-flower.jpg";

export default () => html`
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
              <div class="titleSettings">
                <h1 class="mainTitle">Contact</h1>
              </div>
              <hr class="dotted">
            </div>
            <div class="contentTwo">
              <div class="heartStarCircleSection">
                <img class="heartStarCircle" src="images/heart.svg">
                <img class="heartStarCircle" src="images/star.svg">
                <img class="heartStarCircle" src="images/circle.svg">
              </div>
            </div>
          </div>
          <div class="contactLeft">
            <div class="contact">
              <h3 class="headingContact">Send Us A Message</h3>
              <form>
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname" value="First"><br>
                <label for="lname">Last name:</label><br>
                <input type="text" id="lname" name="lname" value="Last"><br>
                <label for="bday">Birthday:</label><br>
                <input type="date" id="bday" name="bday" value="Bday"><br>
                <label for="location">Location:</label><br>
                <input type="text" id="location" name="location" value="Location"><br>
                <input class="submitButton" type="submit" value="Submit">
              </form>
            </div>
            <div class="contactRight">
              <h3 class="headingContact">Contact Info</h3>
              <div class="subNavMain">
                <img class="socialIcon" src="images/mail.svg">
                <a href="index.html">
                  <h3 class="contactText"><b>Email:</b> rae@raeanncreativedesign.com</h3>
                </a>
              </div>
              <div class="subNavMain">
                <img class="socialIcon" src="images/phone.svg">
                <h3 class="contactText"><b>Phone:</b> 636-395-1977</h3>
              </div>
              <div class="subNavMain">
                <img class="socialIcon" src="images/link.svg">
                <h3 class="contactText"><b>Website:</b> raeanncreativedesign.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</section>
`;