


const countryIput = document.getElementById("countryInput")
const search = document.getElementById("search")

search.addEventListener("click", () => {
  let realCountry = "kenya";
  const mainAPI = (`https://restcountries.com/v3.1/name/${realCountry}?fullText=true`);

   fetch(mainAPI)
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0])
    console.log(data[0].capital[0])
    console.log(data[0].languages)
    console.log(data[0].flags.png)
    console.log(data[0].population)
    console.log(data[0].continents[0])
 
    
    
  }).catch(error => {
    let showerror = document.createElement9("p")
    showerror.textContent = "network failure";
    document.body.appendChild(showerror)
  })
  
})







































 
// const mainTin = document.getElementById("di");
// const butJok = document.getElementById("click")
// const stopCam = document.getElementById("stop");

// butJok.addEventListener("click", () => {
//     navigator.mediaDevices.getUserMedia({ video: true })
//     .then(stream => {
//       activestraem = stream

//       let displayVideo = document.createElement("video")
//       displayVideo.autoplay = true
//       displayVideo.width = 300
//       displayVideo.srcObject = stream
//       document.body.appendChild(displayVideo)
//     }).catch(error => {
//       let deny = document.createElement("p")
//       deny.innerText = "permission denied";
//       document.body.appendChild(deny)
//     })
// })

// stopCam.addEventListener("click", () => {
//   if(activestraem) {
//     activestraem.getTracks().forEach(track => track.stop())
//     activestraem = null;
//   }
// })