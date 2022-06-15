import Header from "../../components/header"
import Footer from "../../components/footer"
import Nav from "../../components/nav"
import BtnAddCart from "../../components/button/adicionar"
import { useState } from "react"
import { produtos } from '../../Data/produtos.json'
import BtnDelete from "../../components/button/excluir"


function Favorite() {

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
                  <th scope="col">Preço</th>
                               
                </tr>
              </thead>
              

              {data.map((data:any) => {
                return (
                  <tbody key={data.produtoId}>
                    <tr>
                      <th scope="row">{data.produtoId}</th>
                      <td><img src={data.img} width={70} alt={data.verbo} style={{borderRadius: '1rem'}}/></td>
                      <td>{data.verbo} - {data.adjetivo}</td>
                      <td>R${data.price}</td>
                  
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