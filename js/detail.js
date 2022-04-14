const getIdDataMovie = () => {
  const idDataMovie = localStorage.getItem('infoMovie')
  const idDataObj = JSON.parse(idDataMovie)
  console.log(idDataObj)
  return (idDataObj)
}


const detailMovie = () => {
  const dataMovie = getIdDataMovie();
  const sectionDetailMovie = document.getElementById('movie-details')
  const dataStructure = `
  <section id="cards-detail" class="row text-white justify-content-center mt-5">        
    <div class="col-sm-6 col-md-6 col-lg-4">
      <img class="w-100 img-detail-movie" src="${dataMovie.image}" alt="${dataMovie.id}"> 
    </div>      
    <div class="col-sm-6 col-md-6 col-lg-4 text-style-movie"> 
      <div> 
        <h2 class="text-center fw-bold">${dataMovie.fullTitle}</h2>       
        <p>${dataMovie.plot}</p>
        <p><span class="fw-bold text-primary">Actores</span> : ${dataMovie.actorList[0].name} , ${dataMovie.actorList[1].name} ${dataMovie.actorList[2].name} ${dataMovie.actorList[3].name} , ${dataMovie.actorList[4].name} , ${dataMovie.actorList[5].name}</p>
        <p><span class="fw-bold text-primary">Director/es</span> : ${dataMovie.directors}  </p>   
        <p><span class="fw-bold text-primary">Escritores</span> : ${dataMovie.writers}  </p>       
        <p><span class="fw-bold text-primary">Genero</span> : ${dataMovie.genres}</p> 
               
      </div>      
    </div>
  </section>  
  `
  sectionDetailMovie.innerHTML = dataStructure;
}
detailMovie();


const getIdDataSerie = () => {
  const idDataSerie = localStorage.getItem("infoSerie");
  const idSerie = JSON.parse(idDataSerie);
  console.log(idSerie)
  return idSerie;
}
getIdDataSerie()

const detailSerie = () => {
  const dataSerie = getIdDataSerie();
  const sectionDetailSerie = document.getElementById('series-details')
  const dataStructure = `
  
  <section id="cards-detail" class="row text-white justify-content-center mt-5">        
    <div class="col-sm-12 col-md-5 col-lg-4">
      <img class="w-100 img-detail" src="${dataSerie.image.medium}" alt="${dataSerie.id}"> 
    </div>      
    <div class="col-md-5 col-lg-4 text-style">      
        <h2 class="text-center fw-bold">${dataSerie.name}</h2>       
        <p><span class="fw-bold text-primary"></span> ${dataSerie.summary}  </p>        
        <p><span class="fw-bold text-primary">Estrenada</span> : ${dataSerie.premiered}</p>
        <p><span class="fw-bold text-primary">Finalizada</span> : ${dataSerie.ended}</p>  
        <p><span class="fw-bold text-primary">Genero</span> : ${dataSerie.genres}</p>
        <p><span class="fw-bold text-primary">Rating</span> : ${dataSerie.rating.average}</p>        
      </div>      
    </div>
  </section>  
  `
  sectionDetailSerie.innerHTML = dataStructure;
}

detailSerie();