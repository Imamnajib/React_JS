export default function Album(){

    return(

        <>
            <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Best Seller Books</h1>
        <p className="lead text-body-secondary">Temukan koleksi buku terlaris pilihan yang wajib dibaca—ditulis oleh para penulis hebat dan disukai jutaan pembaca. Ringkas, kuat, dan penuh inspirasi; inilah buku-buku yang meninggalkan kesan mendalam..</p>
        <p>
          <a href="#" className="btn btn-primary my-2 m-2">View</a>
          <a href="#" className="btn btn-secondary my-2">Other Book</a>
        </p>
      </div>
    </div>
  </section>

  <div className="album py-5 bg-body-tertiary">
    <div className="container">

  <div className="col">
    <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"/>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em" > BUKU KARYA PIDI BAIQ</text>
      </svg>
      <div className="card-body">
        <p className="card-text">This is another card. It has a similar layout and features as the others.</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-body-secondary">12 mins</small>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"/>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">BUKU KARYA TERE LIYE</text>
      </svg>
      <div className="card-body">
        <p className="card-text">Another example card with longer supporting content to show alignment.</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-body-secondary">15 mins</small>
        </div>
      </div>
    </div>
  </div>

  </div>
  </div>
  

        
      
        </>
    )
}