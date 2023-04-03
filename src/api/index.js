import axios from "axios";


function searchApiMovie(title){
    const param = { query : title};
    return axios.get("http://localhost:8083/movie/search", { params: param });
}

function saveMovie(movieData){

    // return axios.post("http://localhost:8083/movie", { movieData });
    return axios.post("http://localhost:8083/movie", { 
        title : movieData.title,
        thumbnail : movieData.thumbnail,
        totalSeat : movieData.totalSeat,
        zenre : movieData.zenre,
        openingDate: movieData.openingDate
     });
} 

function searchListMovie(searchCondition){
    return axios.get("http://localhost:8083/movie", {
        params: searchCondition
    });
}

// function searchListMovie(){
//         const param = { title : "인터스텔라"};
//         return axios.get("http://localhost:8083/movie", {
//             params: param
//         });
// }


function deleteMovie(deleteId) {
    // axios.delete(`"http://localhost:8083/movie/${deleteId}"); 
    return axios.put("http://localhost:8083/movie/" + `${deleteId}` + "/delete"); 
}

function updateMovie(movieData){

    // return axios.post("http://localhost:8083/movie", { movieData });
    return axios.put("http://localhost:8083/movie/" + `${movieData.movieId}`, { 
        title : movieData.title,
        thumbnail : movieData.thumbnail,
        totalSeat : movieData.totalSeat,
        zenre : movieData.zenre,
        openingDate: movieData.openingDate
    });
}

function saveTicket(movieId){
    return axios.post("http://localhost:8083/movie/" + `${movieId}` + "/ticket", {
        userId : 1
    });
}


function saveScore(movieId, score){
    return axios.post("http://localhost:8083/movie/" + `${movieId}` + "/score", {
        userId : 1,
        point : score
    });
}


// function

export 
{   
    searchApiMovie,
    saveMovie,
    searchListMovie,
    deleteMovie,
    updateMovie,
    saveTicket,
    saveScore,
};







// import axios from 'axios';
// import { setInterceptors } from './common/interceptors';

// function createInstance() {
//   return axios.create({
//     baseURL: process.env.VUE_APP_API_URL,
//   });
// }

// // 액시오스 초기화 함수
// function createInstanceWithAuth(url) {
//   const instance = axios.create({
//     baseURL: `${process.env.VUE_APP_API_URL}${url}`,
//   });
//   return setInterceptors(instance);
// }

// export const instance = createInstance();
// export const posts = createInstanceWithAuth('movie'); 

// CREATE - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}


    // return axios.post("http://localhost:8083/movie", { 
    //     title : movieData.title,
    //     thumbnail : movieData.thumbnail,
    //     totalSeat : movieData.totalSeat,
    //     zenre : movieData.zenre,
    //     openingDate: movieData.openingDate
    //  })
    //  .then(function (response) {
    //     console.log(response);
    //  })
    //  .catch(function (error){
    //     console.log(error);
    //  });

    // console.log("id value" , movieData.movieId);
    // console.log(movieData.title);
    // console.log(movieData.thumbnail);
    // console.log(movieData.totalSeat);
    // console.log(movieData.zenre);
    // console.log(movieData.openingDate);