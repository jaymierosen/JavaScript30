const inputs = document.querySelectorAll('.controls input');
// const inputsArr = Array.from(inputs);
// console.log(inputsArr);

// *** with nodelists, you don't need to convert to an array; you can use .forEach() *** //
function handleUpdate() {
  const suffix = this.dataset.sizing || ''; //px or nothing
  console.log(suffix); //object that returns to you all the data attributes in the html
  console.log(document.documentElement) //the html element
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
