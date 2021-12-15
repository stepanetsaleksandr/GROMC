export function squaredNumbers() {
  const numArr = Array.from(document.querySelectorAll('.number'));
  numArr.map(el => {
    return el.setAttribute('data-squared-number', el.dataset.number ** 2);
  });
}
