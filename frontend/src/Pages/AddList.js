import React from 'react'

function AddList() {

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];


  return (
    <>
     <header>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand navbar_brand_mobile" href="index.html"> <span>CastSite</span> </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <Link to="/App" className="navbar-brand"><span>CastSite</span> </Link>
              </div>
            </nav>
          </div>
        </div>
    </header>


   

    <table class="table">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
           
         {products.map((product) => (
            <tr>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.id}</td>
              </tr>
           ))}
        </tbody>
    </table>

    <button className="btns align-self-end" onClick={Handler}>Submit</button>
    </>
  )
}

export default AddList