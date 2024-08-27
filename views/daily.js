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
            <div class="toDoList">
              <h2>To Do List:</h2>
              <p>Text Input</p>
            </div>
          </div>
          <div class="contentTwo">
            <div class="weather">
              <h2 class="weatherText">${state.weather.temp}°F</h2>
              <p>${state.weather.city}</p>
              <p class="weatherText">${state.weather.description}</p>
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
