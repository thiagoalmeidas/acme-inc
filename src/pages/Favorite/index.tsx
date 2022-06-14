import Header from "../../components/header"
import Footer from "../../components/footer"
import Nav from "../../components/nav"
import { useState } from "react"
import { produtos } from '../../Data/produtos.json'


function Favorite() {

// const storageData = JSON.parse(localStorage.getItem('favorite')|| '')
const [data, setData] = useState(produtos)

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
              

              {data.map(({ produtoId, verbo, adjetivo, price, description, img }) => {
                return (
                  <tbody key={produtoId}>
                    <tr>
                      <th scope="row">{produtoId}</th>
                      <td><img src={img} width={100} alt=''/></td>
                      <td>{verbo} - {adjetivo}</td>
                      <td>R${price}</td>
                    </tr>                
                  </tbody>
                )
              })}


            </table>
          </section>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Favorite