import Header from "../../components/header"
import Footer from "../../components/footer"
import Nav from "../../components/nav"
import { produtos } from '../../Data/produtos.json'
import BtnAddCart from "../../components/button/adicionar"
import BtnFavorite from "../../components/button/favorite"




function singleProduct() {

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row my-4 pb-4 px-1">
          <section>
            <div className="row">
              <div className="col-lg-6">
                <img 
                    src={produtos[0].img} 
                    className="w-100 mb-3" 
                    alt={produtos[0].verbo} 
                    style={{borderRadius: '1rem'}}
                />
                <BtnFavorite />
              </div>
              <div className="col-lg-6">
                <div className=' p-5' style={{backgroundColor: 'rgb(239 239 239)',borderRadius: '1rem'}}>
                  <h1>{produtos[0].verbo}</h1>
                  <p>{produtos[0].description}</p>
                  <p>{produtos[0].description}</p>
                  <b className='fs-4'>R${produtos[0].price}</b>
                  <div className="col-sm-6">
                    <p className='mt-4'><BtnAddCart /></p>
                  </div>
              </div>          
              
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default singleProduct