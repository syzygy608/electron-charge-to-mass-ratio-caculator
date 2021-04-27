const calculate = e => {
  e.preventDefault();
  const num = document.getElementById('num_of_turns').value;
  const radius1 = document.getElementById('radius1').value;
  const current = document.getElementById('current').value; 
  const volt = document.getElementById('volt').value; 
  const radius2 = document.getElementById('radius2').value; 
  const mag = ((8 * 4 * 0.0000001 * 3.14 * num * current)/(radius1 * 11.18));
  const e_and_m = ((2 * volt)/(mag * mag * radius2 * radius2))
  document.getElementById('results').innerHTML = `<h3 style = "color: white;">Result:</h3><p style = "color: white;">磁場(π = 3.14):${mag.toFixed(5)}</p><p style = "margin-top: 5px;"></p><p style = "color: white;">荷質比(e/m, π = 3.14):${e_and_m.toFixed(5)}</p>`
}

