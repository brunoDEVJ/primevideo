import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})


export default api



// key b51076cf0ec17be73fc521ffdeeee229
// baseurl = https://api.themoviedb.org/3/
//  https://api.themoviedb.org/3/movie/now_playing?api_key=b51076cf0ec17be73fc521ffdeeee229