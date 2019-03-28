const textInput = document.getElementById('textInput');
const userInput = document.getElementById('userInput')


// Retrieve user input and print to screen followed by "..."
textInput.addEventListener('keyup', runEvent)
function runEvent(e) {
  console.log(e.target.value)
  userInput.innerHTML = `${e.target.value}...`
}

// Retrieve button and initialize generation
const buttonGen = document.querySelector('.generate')
buttonGen.addEventListener('click', genClick)

// Loads model and saves it to variable for use elsewhere
const lstm = ml5.LSTMGenerator('models/proust2/', modelLoaded);
function modelLoaded() {
  console.log('Model Loaded!');
}

// Upon click, initializes generation instructions and calls generate function
function genClick() {
  let data = {
    seed: userInput,
    temperature: 0.55,
    length: 400
  }
  lstm.generate(data, gotData)
  buttonGen.innerHTML = "Add sequence"
}

// Begin generation of text
var output = '';
function gotData(err, results) {
  console.log(results);
  output += results;
  var proust = document.getElementById('proust');
  
  proust.innerHTML = output;
}

// Clears the generated text
const startOverButt = document.querySelector(".start-over")
startOverButt.addEventListener('click', startOver)

function startOver(){
  console.log("Bah!");
  proust.innerHTML = ''
  buttonGen.innerHTML = "Generate!"
}































// function longClick() {
//   let data = {
//     seed: 'For a long time I would',
//     temperature: 0.6,
//     length: 600
//   }
//   lstm.generate(data, gotData)
// }


// ========================


// function shortClick() {
//   let data = {
//     seed: 'For a long time I would',
//     temperature: 0.6,
//     length: 200
//   }
//   lstm.generate(data, function(err, results){
//     document.getElementById('proust').innerHTML = '';
//     // document.getElementById('loading').style.visibility = 'hidden'
//     document.getElementById('loading').remove()
//     document.getElementById('proust').style.visibility = 'visible'
//     // console.log(results);
//     document.getElementById('proust').innerHTML = results;
//   });
// }

// function medClick() {
//   let data = {
//     seed: 'For a long time I would',
//     temperature: 0.6,
//     length: 400
//   }
//   lstm.generate(data, function(err, results){
//     document.getElementById('proust').innerHTML = '';
//     // document.getElementById('loading').style.visibility = 'hidden'
//     document.getElementById('loading').remove()
//     document.getElementById('proust').style.visibility = 'visible'
//     // console.log(results);
//     document.getElementById('proust').innerHTML = results;
//   });
// }

// function longClick() {
//   let data = {
//     seed: 'For a long time I would',
//     temperature: 0.6,
//     length: 600
//   }
//   lstm.generate(data, function(err, results){
//     document.getElementById('proust').innerHTML = '';
//     // document.getElementById('loading').style.visibility = 'hidden'
//     document.getElementById('loading').remove()
//     document.getElementById('proust').style.visibility = 'visible'
//     // console.log(results);
//     document.getElementById('proust').innerHTML = results;
//   });
// }
  
// lstm.generate(data, function(err, results){
//     // document.getElementById('loading').style.visibility = 'hidden'
//     document.getElementById('loading').remove()
//     document.getElementById('proust').style.visibility = 'visible'
//     // console.log(results);
//     document.getElementById('proust').innerHTML = results;
//   });
  