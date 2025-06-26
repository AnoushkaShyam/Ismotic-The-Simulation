function simulateOsmosis() {
    const solution = document.getElementById("solution").value;
    const cell = document.getElementById("cell");
    const result = document.getElementById("result");
  
    if (solution === "isotonic") {
      cell.style.width = "100px";
      cell.style.height = "100px";
      result.textContent = "Isotonic: Water movement is balanced. Cell size remains the same.";
    } else if (solution === "hypotonic") {
      cell.style.width = "130px";
      cell.style.height = "130px";
      result.textContent = "Hypotonic: Water enters the cell. Cell swells (risk of lysis).";
    } else if (solution === "hypertonic") {
      cell.style.width = "70px";
      cell.style.height = "70px";
      result.textContent = "Hypertonic: Water exits the cell. Cell shrinks (crenation).";
    }
  }
  
  function updateConcentration(value) {
    document.getElementById("concentrationValue").textContent = value + "%";
    const cell = document.getElementById("cell");
    const result = document.getElementById("result");
  
    if (value == 0.9) {
      cell.style.width = "100px";
      cell.style.height = "100px";
      result.textContent = "Isotonic: Water movement is balanced. Cell size remains the same.";
    } else if (value < 0.9) {
      const size = 100 + (0.9 - value) * 40;
      cell.style.width = size + "px";
      cell.style.height = size + "px";
      result.textContent = `Hypotonic (${value}% NaCl): Water enters the cell. Swelling observed.`;
    } else {
      const size = 100 - (value - 0.9) * 40;
      cell.style.width = size + "px";
      cell.style.height = size + "px";
      result.textContent = `Hypertonic (${value}% NaCl): Water exits the cell. Shrinking observed.`;
    }
  }
  