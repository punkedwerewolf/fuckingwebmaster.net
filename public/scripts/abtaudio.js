      let mySongs = ["/tunes/onhigh.mp3", ];

         let x = Math.floor(Math.random() * mySongs.length);
  var element = document.getElementById('myAudio');

function songChooser(mySongs){
  return mySongs[x];
}

window.addEventListener('load', (event) => {
  let createAudio = `
<audio id="myAudio" autoplay controls>
<source src="${songChooser(mySongs)}">
        `;
    myDiv.innerHTML = createAudio;
});