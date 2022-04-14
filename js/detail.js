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

const getDetailData = () => {
  const detailData = localStorage.getItem("infoSerie");
  const getDetailDataObj = JSON.parse(detailData);

  console.log(getDetailDataObj);
  const serieDetail = document.getElementById("series-details");
  const sectionDetail = `<section class="d-flex justify-content-center container">
      <div>
        <img class="w-100" src="${getDetailDataObj.image.original}" />
        <br>
        <h2 class="p-2 d-flex justify-content-center">Nombre de la serie: "${getDetailDataObj.name}"</h2>
        <br>
        <p class="text-align-center">${getDetailDataObj.summary}</p>
        <br>
        <h6> ${getDetailDataObj.genres}</h6>
        <h6> ${getDetailDataObj.network.country.name} </h6>
        <h6> ${getDetailDataObj.schedule.days} - ${getDetailDataObj.schedule.time} -  ${getDetailDataObj.network.name} </h6>

        <a href="index.html">Return to Series</a href="index.html">
      </div>
    </section>`;
  serieDetail.innerHTML = sectionDetail;
};
getDetailData();
