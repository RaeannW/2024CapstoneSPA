import html from "html-literal";
import heart from "../assets/img/heart.svg";
import star from "../assets/img/star.svg";
import circle from "../assets/img/circle.svg";

export default state => html`

       
<div class="heartStarCircleSection">
          <img class="heartStarCircle" src="${heart}" alt="heart" />
          <img class="heartStarCircle" src="${star}" alt="star" />
          <img class="heartStarCircle" src="${circle}" alt="star" />
        </div>
`;