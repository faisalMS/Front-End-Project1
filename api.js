$(document).ready(function () {
    $("#moviesearch").submit(function (event) {
      let apikey = "1e7a31b6";
      const audio = new Audio("theme.m4a")

      event.preventDefault();
      audio.play();
      let moviename = $("#movieName").val();
      let result = "";
      let url =
        "https://www.omdbapi.com/?apikey=" + apikey + "&t=" + moviename;
      $.ajax({
        method: "GET",
        url: url,
        
        success: function (data) {
          console.log(data);

          result = `
                    <img id="movieimg" style="float:right; margin-right:50px; margin-bottom:20px;" class="img-thumnail" width="300" height="300"  src="${data.Poster}" />
                    <h1 class="mb-1 mr-5">${"Title:-"+data.Title}</h1>
                    <h3 class="mb-1 mr-5">${"Rating:-"+data.imdbRating}</h3>
                    <h3 class="mb-1 mr-5">${"Genre:-"+data.Genre}</h3>
                    <h3 class="mb-1 mr-5">${"Language:-"+data.Language}</h3>
                    <h3 class="mb-1 mr-5">${"Released:-"+data.Released}</h3>
                    <h3 class="mb-1 mr-5">${"Director:-"+data.Director}</h3>
                    <h3 class="mb-1 mr-5">${"Actors:-"+data.Actors}</h3>
                   `;
          $("#displayresult").html(result);

          // Web storage API
          localStorage.setItem("myLocalStore", JSON.stringify(moviename))
          const storeLength = localStorage.length;
          const myLocalData = JSON.parse (localStorage.getItem("myLocalStore"));
          console.log(storeLength);
          console.log(myLocalData);

          sessionStorage.setItem("mySessionStore", JSON.stringify(moviename))
          const storeLength2 = sessionStorage.length;
          const mysessionData = JSON.parse (sessionStorage.getItem("mySessionStore"));
          console.log(storeLength2);
          console.log(mysessionData);

        },
      });
    });
  });