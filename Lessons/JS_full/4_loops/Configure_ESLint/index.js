/* eslint-disable no-undef */
function run() {
  // eslint-disable-next-line no-var
  var a = 0;

  // eslint-disable-next-line eqeqeq
  if (a == 1) {
    // eslint-disable-next-line no-undef
    return c;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 10; i++) {
    console.log(i);
  }

  // eslint-disable-next-line no-return-assign
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-return-assign
  return (d = a);
}

run();
