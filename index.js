var firstSelector = document.querySelector(`${selector}`);
function getFirstSelector(selector) {
    return first selector;
}

function nestedTarget(nested, target) {
    document
    .querySelector(`#${nested}`)
    .querySelector(`.${target}`);
}

function increaseRankBy(n) {
  var getIt = document
  .querySelectorAll('.ranked-list');
  for (let i = 0; i < getIt.length; i++) {
    getIt[i].innerHTML = parseInt(getIt[i].innerHTML) + 1;
  }
}
