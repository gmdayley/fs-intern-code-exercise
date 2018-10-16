import { buildArrayOfNums } from "./buildArray";

function createAndDisplayArray() {
  const input = parseInt(document.getElementById("userInput").value);
  var arr = buildArrayOfNums(input);
  document.getElementById("output").innerText = arr;
}

// Attach event listener
document.getElementById("mybtn").onclick = createAndDisplayArray;
