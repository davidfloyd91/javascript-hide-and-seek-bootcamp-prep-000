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
  var lis = document
  .querySelector('#grand-node')
  .querySelectorAll('div');
  var child;
  for (let i = 0; i < lis.length - 1; i++) {
    child = lis[i].querySelector('div');
    }
  return count;
}
