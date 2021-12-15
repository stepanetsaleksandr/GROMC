function getTitle() {
  const title = document.querySelector(`.title`);
  return title.textContent;
}
function getDescription() {
  const descr = document.querySelector(`.about`);
  return descr.innerText;
}
function getPlans() {
  const plans = document.querySelector(`.plans`);
  return plans.innerHTML;
}
function getGoal() {
  const goal = document.querySelector(`.goal`);
  return goal.outerHTML;
}
