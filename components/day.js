import html from "html-literal";

export default () => {
  const date = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const dayString = weekDays[date.getDay()];
  return html`
    <h2 class="date regText">
      <span class="greetingText">day:</span> ${dayString}
    </h2>
  `;
};
