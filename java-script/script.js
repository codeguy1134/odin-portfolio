// this script is just for learning js



// still starting on line 6. fight me.
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}", bitch.`;

});