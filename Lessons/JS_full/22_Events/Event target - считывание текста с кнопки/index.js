//
//
function handleClick(event) {
  const text = event.target.textContent;
  console.log(text);
}

const allBtns = document.querySelectorAll(`.btn`).forEach(elBtn => {
  elBtn.addEventListener(`click`, handleClick);
});
