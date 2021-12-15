//
//
function handleClick(event) {
  const pageNum = event.target.dataset.pageNumber;
  console.log(pageNum);
}

document.querySelectorAll('.pagination__page').forEach(el => {
  el.addEventListener('click', handleClick);
});
