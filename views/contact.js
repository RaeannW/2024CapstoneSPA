import html from "html-literal";
import heart from "../assets/img/heart.svg";
import star from "../assets/img/star.svg";
import circle from "../assets/img/circle.svg";
import email from "../assets/img/mail.svg";
import phone from "../assets/img/phone.svg";
import website from "../assets/img/link.svg";

export default () => html`
  <section>
  <!-- <div class="outer"> -->
        <div class="row">
          <div class="side">
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
                <img class="heartStarCircle" src="${heart}" alt="heart">
                <img class="heartStarCircle" src="${star}" alt="star">
                <img class="heartStarCircle" src="${circle}" alt="star">
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
                <img class="socialIcon" src="${email}" alt="email">
                <a href="index.html">
                  <h3 class="contactText"><b>Email:</b> rae@raeanncreativedesign.com</h3>
                </a>
              </div>
              <div class="subNavMain">
              <img class="socialIcon" src="${phone}" alt="phone">
                <h3 class="contactText"><b>Phone:</b> 636-395-1977</h3>
              </div>
              <div class="subNavMain">
              <img class="socialIcon" src="${website}" alt="website">
                <h3 class="contactText"><b>Website:</b> raeanncreativedesign.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
</section>
`;