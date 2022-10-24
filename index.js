
// Samuel Kiarie--Step 25: plus equal for count
let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);


function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1;
    countEl.textContent = count;
}

    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "

    function save() {
      let countStr = count + " - "
      saveEl.textContent += countStr;
      countEl.textContent = 0;
      count = 0;
  }
  
