
var loginAccount;
if (localStorage.getItem("loginAccount") != null) {
  loginAccount = JSON.parse(localStorage.getItem("loginAccount"));
  WellcomeMessage.innerHTML="Hi " + loginAccount.name

} else {
    loginAccount = {};
}
// getPosts();
// function getPosts(){
//     fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&api_key=c6ffe40f8eef66005f60a89f16e20959')
//     .then(response => {
//       if (response.ok) {
//         return response.json(); // Parse the response data as JSON
//       } else {
//         throw new Error('API request failed');
//       }
//     })
//     .then(data => {
//       // Process the response data here
//       console.log(data); // Example: Logging the data to the console
//       var trs = ""
//       for(i = 0 ; i < data.results.length ; i++){
//          trs += `<tr>
//          <td>${data.results[i].id}</td>
//          <td>${data.results[i].original_title}</td>
//          <td>
//          <img src="${data.results[i].poster_path}" width="100" height="100">
//          </td>
//          </tr>`
//       }
//       document.getElementById("tBody").innerHTML = trs
//     })
//     .catch(error => {
//       // Handle any errors here
//       console.error(error); // Example: Logging the error to the console
//     });
// }
var myMovies = []
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open('GET', 'https://moviesverse1.p.rapidapi.com/movies/year/2023/1');
xhr.setRequestHeader('X-RapidAPI-Key', '6450f3857fmsh945b51c823e7023p182e0cjsnb3da99dc55ed');
xhr.setRequestHeader('X-RapidAPI-Host', 'moviesverse1.p.rapidapi.com');

xhr.send(data);
xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		 myMovies = JSON.parse(xhr.response).movies
     displaymovies()
     console.log(xhr.response);
	}
});



function displaymovies(){
  var movies = ``
  for(var i = 0; i<myMovies.length;i++){
      movies +=`<div class="col-md-2 g-2">
      <div class="item">
      <img src="${myMovies[i].img}" alt="" class="w-100"> 
      <p class = "p-2 text-white">${myMovies[i].text}</p>
      <a class ="text-decoration-none pb-0" href="${myMovies[i].link}" target="_blank">see more</a>
      </div>
  </div>
  }`
  document.getElementById("mov").innerHTML= movies
}}