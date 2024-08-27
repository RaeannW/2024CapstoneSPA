import html from "html-literal";
import { header, heartStarCircle } from "../components";
import email from "../assets/img/mail.svg";
import phone from "../assets/img/phone.svg";
import website from "../assets/img/link.svg";

export default state => html`
  <section>
    <div class="row">
      <div class="side">
        ${header(state)}
        <hr class="dotted" />
      </div>
      <div class="contentTwo">
        ${heartStarCircle()}
      </div>
    </div>
          <div class="contactLeft">
            <div class="contact">
              <h3 class="headingContact">Send Us A Message</h3>
              <form>
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname" placeholder="First"><br>
                <label for="lname">Last name:</label><br>
                <input type="text" id="lname" name="lname" placeholder="Last"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" placeholder="Email"><br>
                <label for="location">Message:</label><br>
                <textarea id="message" name="message" placeholder="Enter Your Message"></textarea><br>
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
</section>
`;
