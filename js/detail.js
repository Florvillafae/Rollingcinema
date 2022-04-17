
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
    <div class="col-md-6 col-lg-4 text-style">      
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