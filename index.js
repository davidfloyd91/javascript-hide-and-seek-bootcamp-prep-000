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
  .querySelector('div#grand-node');
  var next = current.querySelectorAll('div');
  var nextArray = [];
  for (let i = 0; i < next.length; i++) {
      nextArray.push(innerHTML.current.querySelector('div')[i]);
    }
  while (nextArray.length > 1) {
    nextArray.shift();
  }
    return innerHTML(nextArray[0]);
}
