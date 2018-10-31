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
  var nextArray = [];
  nextArray.push(querySelectorAll());
  for (let i = 0; i < nextArray.length; i++) {
      current = document
      .querySelector()[i];
    }
    return innerHTML(current);
  }
}
