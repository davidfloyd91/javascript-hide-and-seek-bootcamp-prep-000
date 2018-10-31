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
  .querySelector('#grand-node')
  .querySelector('div');
  var next = current
    .querySelectorAll('div');
  var childArray = [];
  for (let i = 0; i < next.length; i++) {
      var child = current.querySelector('div')[i].innerHTML;
      childArray.unshift(child);
    }
    return childArray[0];
}
