const sort_parent = document.querySelector(".sort-dec");
let sort_input = document.querySelector(".sort-input");
let sort_output = document.querySelector(".sort-output");
let time_taken = document.querySelector("#time-output");





sort_parent.addEventListener("click", (e) => {
  target = e.target.value;
  


  let value = sort_input.value;
  value = Array.from(value);

  switch (target) {
    case "sort":
      sort_output.textContent = "hi you are either ascending or descending";
      break;

    case "asc":
      let output1 = value.sort();
      sort_output.textContent = output1;
      time_taken.textContent ='time taken =' + ' ' + ' ' + new Date().getMilliseconds() / 1000
    
      break;

    case "desc":
      let output2 = value.sort().reverse();
      sort_output.textContent = output2;
      time_taken.textContent ='time taken =' + ' ' + ' ' + new Date().getMilliseconds() / 1000
      break;

    default:
      location.reload();
      break;
  }
});
