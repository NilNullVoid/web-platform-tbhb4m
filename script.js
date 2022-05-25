let multiplier = 0;
let clicks = 0;
let cookies = 0;
let body = document.body;

document.getElementById('clicker').addEventListener('click', () => {
  clicks++;
  if (clicks > multiplier * 10 + 9) {
    multiplier++;
  }
});

function strobelights() {
  document.body.id == 'blue'
    ? (document.body.id = '')
    : (document.body.id = 'blue');
}

function dansucks() {
  document.getElementById('count').innerText = cookies += multiplier;
}

setInterval(dansucks, 1000);
setInterval(strobelights, 1000 - clicks);
