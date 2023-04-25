// Team 5 Project index js

// jQuery(document).ready(function () {
//   setInterval(function () {
//     $('.slide_body').delay(1000);
//     $('.slide_body').animate({ marginLeft: "-100%" });
//     $('.slide_body').delay(2000);
//     $('.slide_body').animate({ marginLeft: "-200%" });
//     $('.slide_body').delay(2000);
//     $('.slide_body').animate({ marginLeft: "-300%" });
//     $('.slide_body').delay(2000);
//     $('.slide_body').animate({ marginLeft: 0 });
//     $('.slide_body').delay(1000);
//   }, 3000);
// });

// 현재 상영작 ajax 시작 ------------------------------------
(function(){
  const now_movieURL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=c8509b8f85db6c465df670fd3eb60def&language=ko-KR&region=KR";
  
  $.ajax({
  type: "GET",
  url: now_movieURL, // 선언한 주소 변수
  dataType: "json",
  async: false,
  success: function (data) {
    const results = data.results;
  
    for (const result of results) {
      let imgURL = "https://image.tmdb.org/t/p/w500" + result.poster_path;
  
  
      $(".now__body").append(
        `<li class="now_list">
        <h6 class="now-title">${result.title}</h6>
        <a href="./detail.html?id=${result.id}"><img class="now-img" src="${imgURL}">
        </li>`
      );
    }  
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  }
  });
})();
//현재상영작 ajax 끝----------------------------------

//영화랭킹 ajax 시작 ---------------------------------
(function(){
  const rank_movieURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c8509b8f85db6c465df670fd3eb60def&language=ko-KR";
  
  $.ajax({
  type: "GET",
  url: rank_movieURL, // 선언한 주소 변수
  dataType: "json",
  async: false,
  success: function (data) {
    const results = data.results;
  
    let i = 1;
    for (const result of results) {
      if (i <= 10) {
        $(".table_content").append(`
        <li class="c_ranking">"i"</li>
        <li class="c_movie_title">${result.title}</li>
        <li class="c_movie_share">${}</li>
        <li class="c_movie_audience">${}</li>`);
      }
      i++;
    }

      // let i = result.title;
      // let title = result[i].title;
      // console.log("영화제목: ", title);
  
      // $(".r_movie_title").append(`${result.title}`);

    
     
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  }
  });
})();
//영화랭킹 ajax 끝----------------------------------
