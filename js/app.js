const getDataMovie = async() => {
  const resp = await fetch('https://imdb-api.com/es/API/MostPopularMovies/k_gcfkdp58/')
  const json = await resp.json();
  console.log(json)
  return (json.items)
  
}



const useApiDataMovie = async() => {
  const data = await getDataMovie()
  console.log(data)
  const containerMovies = document.getElementById('cards-movies')
  const dataFilter = data.filter(infoMovie => infoMovie.rank <= 10 )
  console.log(dataFilter)
  const dataMap = dataFilter.map(movieData => `  
    <div class="swiper-slide img-transform"> <img onclick="setDetailDataMovie('${movieData.id}')" class="img-adapted"src="${movieData.image}" alt=""> </div> 

  `)


  containerMovies.innerHTML = dataMap;
}
useApiDataMovie();



const getDataSerie = async() => {
  const resp = await fetch('https://api.tvmaze.com/shows')
  const json = await resp.json();
  
  return (json)
}

const usarDataSerie = async() => {
  const data = await getDataSerie()
  
  const containerSeries = document.getElementById('series-cards')
  const dataFilter = data.filter(infoSerie => infoSerie.id <= 10 )
  console.log(dataFilter)
  
  const dataMap = dataFilter.map(serieData => `  
  <div class="swiper-slide img-transform"> 
  <img onclick="setDetailData(${serieData.id})" class="img-adapted"src="${serieData.image.medium}" alt="">  
  </div>`)
  
  console.log(dataMap)
  containerSeries.innerHTML = dataMap;
}
usarDataSerie();

const setDetailData = async(id) => {
  const resp = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const json = await resp.json()
  const newJson = JSON.stringify(json)
  
  localStorage.setItem("infoSerie" , newJson)
  
  window.location.href = "/detail.html"
} 

const setDetailDataMovie = async(id) => {
  const resp = await fetch(`https://imdb-api.com/en/API/Title/k_gcfkdp58/${id}`)
  const json = await resp.json()
  const newJson = JSON.stringify(json)
  
  localStorage.setItem("infoMovie" , newJson)
  
  window.location.href = "/detailMovies.html"
}