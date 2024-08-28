import { header, main, nav} from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/"); //creates new Navigo object

function render(state = store.notes) {
  document.querySelector("#root").innerHTML = `
      ${main(state)}
    `;

  router.updatePageLinks();
}
//invoke render inside router method (after router is set up)




router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "notes";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      // New Case for the Home View
      case "notes":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
          )
          .then((response) => {
            // Create an object to be stored in the Home state from the response
            // Round Temp = Math.round();
            store.notes.weather = {
              city: response.data.name,
              temp: Math.round(response.data.main.temp),
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main,
            };
            done();
            
            //Where to add notes functionality??
            const inputBox = document.getElementById("input-box");
            const listContainer = document.getElementById("list-container");

            function addTask() {
              if (inputBox.value === "") {
                alert("You Must Write Something");
              } else {
                let li = document.createElement("li");
                li.innerHTML = inputBox.value;
                listContainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
              }
              inputBox.value = "";

              //getting message that says addTask is not defined - tried to invoke function with store.notes but that did not work
              addTask(store.notes);

              //saveData function called to recall data
              saveData();
            }
            
            listContainer.addEventListener(
              "click",
              function(e) {
                if (e.target.tagName === "LI") {
                  e.target.classList.toggle("checked");
                  //saveData function
                  saveData();
                } else if (e.target.tagName === "SPAN") {
                  e.target.parentElement.remove();
                  //saveData function
                  saveData();
                }
              },
              false
            );
            
            //save data
            function saveData(){
              localStorage.setItem("data", listContainer.innerHTML);
            }
            function showTask(){
              listContainer.innerHTML = localStorage.getItem("data");
            }
            showTask();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;


      case "calendar":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
          )
          .then((response) => {
            // Create an object to be stored in the Home state from the response
            // Round Temp = Math.round();
            store.calendar.weather = {
              city: response.data.name,
              temp: Math.round(response.data.main.temp),
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main,
            };
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;
      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
      // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "notes";
    render(state.view);
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "notes";

    router.updatePageLinks();

    if (view === "calendar") {
      const calendarEl = document.getElementById("calendar");
      calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        },
        buttonText: {
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "List"
        },
        height: "100%",
        dayMaxEventRows: true,
        navLinks: true,
        editable: true,
        selectable: true,
        eventClick: function(info) {
          // change the border color just for fun
          info.el.style.borderColor = "red";
        },
        eventDrop: function(info) {
          handleEventDragResize(info);
        },
        eventResize: function(info) {
          handleEventDragResize(info);
        },
        select: info => {
          const title = prompt("Please enter a title");
  
          // if (title) {
          //   const requestData = {
          //     title: title,
          //     start: info.start.toJSON(),
          //     end: info.end.toJSON(),
          //     allDay: info.view.type === "dayGridMonth"
          //   };
  
          //   axios
          //     .post(`${process.env.API_URL}/appointments`, requestData)
          //     .then(response => {
          //       // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          //       response.data.title = response.data.title;
          //       response.data.url = `/appointments/${response.data._id}`;
          //       store.Appointments.appointments.push(response.data);
          //       console.log(
          //         `Event '${response.data.title}' (${response.data._id}) has been created.`
          //       );
          //       calendar.addEvent(response.data);
          //       calendar.unselect();
          //     })
          //     .catch(error => {
          //       console.log("It puked", error);
          //     });
          // } else {
          //   calendar.unselect();
          // }
        },
        events: state.appointments || []
      });
      calendar.render();
    }

    // add menu toggle to bars icon in nav bar
    // document.querySelector(".fa-bars").addEventListener("click", () => {
    //   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    // });
  },
});



router
  .on({
    "/": () => render(),
    // Use object destructuring assignment to store the data and (query)params from the Navigo match parameter
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    // This reduces the number of checks that need to be performed
    ":view": (match) => {
      // Change the :view data element to camel case and remove any dashes (support for multi-word views)
      const view = match?.data?.view ? camelCase(match.data.view) : "notes";
      // Determine if the view name key exists in the store object
      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();
//without resolve you get an infinite loop
