function getFirstSelector(selector) {
    return document
    .querySelector(selector);
}

function nestedTarget() {
    return document
    .querySelector('#nested')
    .querySelector('.target');
}

function increaseRankBy(n) {
  var getIt = document
  .querySelectorAll('.ranked-list');
  for (let i = 0; i < getIt.length; i++) {
    getIt[i].innerHTML = parseInt(getIt[i].innerHTML) + 1;
  }
}

function deepestChild() {
  var current = document
  .querySelectorAll('div#grand-node');
  var next = [];
  if Array.isArray(current) {
    for (let i = 0; i < current.length; i++) {
      next.push(current[i]);
    }
  }
  current = next.shift(); 
}
