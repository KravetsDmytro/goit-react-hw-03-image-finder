import React from "react";
import axios from "axios";

class FetchGalleryImg extends React.Component{
  state={
    searchQuery:"red",
  images: [],


  }
      async  componentDidMount() {
      try {

        const API_KEY = '35566012-73194189fcef75c31768f8916';
        const URL = `https://pixabay.com/api/`;
        const PerPage = 5;

      const {data}=await axios.get(`${URL}?q=${this.state.searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PerPage}&page=${this.state.page}`);
console.log(data)
      this.state.images= data.hits;
console.log(data.hits)

      } catch (error) {
      console.error(error)
      }

  }

render() {return <div> hello <img src={this.state.images} alt="" /> </div>}
}

export default FetchGalleryImg;





// const API_KEY = '35566012-73194189fcef75c31768f8916';
// const URL = `https://pixabay.com/api/`;
// const PerPage = 12;

// export function fetchGalleryImg(searchQuery, page) {
//   return fetch(
//     `${URL}?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PerPage}&page=${page}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
