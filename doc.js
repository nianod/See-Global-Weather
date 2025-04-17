


const countryIput = document.getElementById("countryInput")
const search = document.getElementById("search")
const outcomes = document.getElementById("container")

search.addEventListener("click", () => {
  let realCountry = "kenya";
  const mainAPI = (`https://restcountries.com/v3.1/name/${realCountry}?fullText=true`);

   fetch(mainAPI)
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0])
    console.log(data[0].capital[0])
    console.log(data[0].name.common)
    console.log(data[0].languages)
    console.log(data[0].flags.png)
    console.log(data[0].population)
    console.log(data[0].continents[0])
    console.log(Object.keys(data[0].currencies)[0])
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
    
 
    let flag = document.createElement("div")
    flag.innerHTML = ` <img src="${data[0].flags.png}">
      <h2>${data[0].name.common}</h2>
       <div class= "wrapper">
            capital:
          <h4>${data[0].capital[0]}</h4>
            languages:
          <b>${data[0].population}</b> 
           continent 
       
       </div>
      



     `
    outcomes.appendChild(flag)
    flag.style.marginTop = "20px"
   })
  
   .catch(error => {
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