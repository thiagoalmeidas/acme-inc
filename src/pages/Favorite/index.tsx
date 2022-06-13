import Header from "../../components/header"
import Footer from "../../components/footer"
import Nav from "../../components/nav"
import { useState } from "react"


function Favorite() {

 const storageData = JSON.parse(localStorage.getItem('favorite')|| '')
 const [data, setData] = useState(storageData)
 storageData.shift()

  return (
    <>
      <Nav />
      <div className="container">
        <Header title='Lista de Favoritos' subtitle='Produtos Favoritos selecionados!' />
        <div className="row pb-4 px-1">
          <section>
            <table className="table table-hover mt-4">
              <thead>
                <tr>
                  <th scope="col">Id#</th>
                  <th scope="col">Imagem</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Preco</th>                  
                </tr>
              </thead>
              

              {/* {data.map(({ produtoId, verbo, adjetivo, price, description, img }) => {
                return ()
              })} */}
                  <tbody >
                    <tr>
                      <th scope="row">{data.produtoId}</th>
                      <td><img src={data.img} width={100} alt=''/></td>
                      <td>{data.verbo} - {data.adjetivo}</td>
                      <td>R${data.price}</td>
                    </tr>                
                  </tbody>
                


            </table>
          </section>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Favorite