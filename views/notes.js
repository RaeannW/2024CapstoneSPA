import html from "html-literal";
import { header } from "../components";
import themeButton from "../assets/img/sliders-solid.svg";
import unchecked from "../assets/img/unchecked.svg";
import checked from "../assets/img/checked.svg";

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
              <h2 class="date regText">day: ${
                state.date.toString().split(" ")[0]
              }</h2>
            </div>
            <div class="toDoList">
              <h2 class="toDoHeader">To Do List:</h2>
              <div class="toDoRow">
                <input type="text" id="input-box" placeholder="Add Your Text">
                <button class="toDoButtonOne" id="addTaskButton">+</button>
              </div>
              <ul id="todo-list-container">
                ${state.toDos
                  .map((todo, index) => {
                    return html`
                      <li id="${todo.id}">
                        ${todo.task}<button
                          class="delete"
                          data-id="${todo._id}"
                          data-index="${index}"
                          data-task="${todo.task}"
                        >
                          ×
                        </button>
                      </li>
                    `;
                  })
                  .join("")}
              </ul>
            </div>
          </div>
          <div class="contentTwo">
            <div class="weather">
              <h2 class="weatherText">${state.weather.temp}°F</h2>
              <p>${state.weather.city}</p>
              <p class="weatherText">${state.weather.description}</p>
            </div>

              <div class="goals">
                <h2 class="toDoHeader">Goals:</h2>
                <div class="goalsRow">
                  <input type="text" id="input-box-two" placeholder="Add Your Text">
                  <button class="goalsButton" id="addGoalsButton">+</button>
                  </div>
                  <ul id="goals-list-container">
                  </ul>
              </div>
  </div>
</section>
`;
