function updateScore(id) {

  let scores = [
    "RCB: 140/4 (17 overs)",
    "RCB: 155/5 (18 overs)",
    "RCB: 170/6 (19 overs)",
    "RCB: 185/7 (20 overs)"
  ];

  let random = Math.floor(Math.random() * scores.length);

  document.getElementById(id).innerText = scores[random];
}
