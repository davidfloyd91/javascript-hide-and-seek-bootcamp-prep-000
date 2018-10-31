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
  var total = document
  .querySelector('#grand-node')
  .querySelectorAll('div');
  var totalArray = [];
  for (let i = 0; i < total.length; i++) {
      var child = total.querySelector('div')[i].innerHTML;
      totalArray.unshift(child);
    }
    return childArray[0];
}
