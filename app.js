const textInput = document.getElementById('textInput');
const userInput = document.getElementById('userInput')

textInput.addEventListener('keyup', runEvent)

function runEvent(e) {
  console.log(e.target.value)
  userInput.innerHTML = `${e.target.value}...`
}

var buttonShort = document.getElementsByClassName('short')[0]

var buttonGen = document.getElementsByClassName('generate')[0]

var buttonLong = document.getElementsByClassName('long')[0]

// buttonShort.addEventListener('click', shortClick)

buttonGen.addEventListener('click', genClick)

// buttonLong.addEventListener('click', longClick)


document.getElementById('proust').style.visibility = 'hidden'

const lstm = ml5.LSTMGenerator('models/proust2/', modelLoaded);

function modelLoaded() {
  console.log('Model Loaded!');
}

function gotData(err, results) {
  console.log(results);
  document.getElementById('proust').innerHTML = '';
  //   // document.getElementById('loading').style.visibility = 'hidden'
  //   document.getElementById('loading').remove()
    document.getElementById('proust').style.visibility = 'visible'
  //   // console.log(results);
    document.getElementById('proust').innerHTML = results;
}

// function shortClick() {
//   let data = {
//     seed: 'Go to sleep. ',
//     temperature: 0.6,
//     length: 200
//   }
//   lstm.generate(data, gotData)
// }

function genClick() {
  let data = {
    seed: 'For a long time I would',
    temperature: 0.6,
    length: 400
  }
  lstm.generate(data, gotData)
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
  