import html from "html-literal";
import { header } from "../components";
import themeButton from "../assets/img/sliders-solid.svg";

export default state => html`
  <section>
    <div class="row">
      <div class="side">
        ${header(state)}
      </div>
              <button id="themeButton">
                <img src="${themeButton}" alt="settings">
              </button>
            </div>
            <hr class="dotted"/>
            <div class="greetingDate">
              <h2 class="regText">hello name</h2>
              <h2 class="date regText">date</h2>
            </div>
          </div>
          <div class="contentTwo">
          <div class="weather">
              <h2 class="weatherText">${state.weather.temp}°F</h2>
              <p>${state.weather.city}</p>
              <p class="weatherText">${state.weather.description}</p>
            </div>
          </div>
          <div class="calendar-container">
            <div id="calendar"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="monthly-container">
    <div id="monthly"></div> -->

  </div>
  </div>
</section>
`;
