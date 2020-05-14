const form = document.getElementById("form");
const boy = document.getElementById("boy");
const girl = document.getElementById("girl");

function showOutput(love) {
  document.getElementById(
    "result"
  ).innerHTML = `<div class="container text-center">
    <h1 class="display-1 font-weight-bolder"> 
      <span class="badge badge-danger rounded-lg">${love.percentage}</span>
    </h1>
    <h5>
      <span class="badge badge-secondary">${love.result}</span>
    </h5>
  </div>`;
}

function checkPercentage(boy, girl) {
  //   console.log(boy.value, girl.value);
  axios
    .get(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${boy.value}&sname=${girl.value}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "3555113daemshbaad102dc94a687p19e228jsne4b89fb8d0ff",
        },
      }
    )
    .then((res) => {
      const love = res.data;
      //   console.log(love);
      showOutput(love);
    })
    .catch((err) => {
      console.log(err);
    });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkPercentage(boy, girl);
});
