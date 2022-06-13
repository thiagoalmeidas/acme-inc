import Header from "../../components/header"
import Footer from "../../components/footer"
import Nav from "../../components/nav"
import { produtos } from '../../Data/produtos.json'


function Cart() {
const soma = produtos.map(({ produtoId, verbo, adjetivo, price, description, img }) => {
  return ( 
    price)
})
  return (
    <>
      <Nav />
      <div className="container">
        <Header title='Carrinho de Compras' subtitle='Produtos Favoritos selecionados!' />
        <div className="pb-4 px-1">
          <section>
            <div className="row mt-4">
            <table className="table col table-hover ">
              <thead>
                <tr>
                  <th scope="col">Id#</th>
                  <th scope="col">Imagem</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Preco</th>                  
                </tr>
              </thead>
              

              {produtos.map(({ produtoId, verbo, adjetivo, price, description, img }) => {
                return (
                  <tbody >
                    <tr>
                      <th>{produtoId}</th>
                      <td><img src={img} width={100} alt=''/></td>
                      <td>{verbo} - {adjetivo}</td>
                      <td>R${price}</td>
                    </tr>                
                  </tbody>
                )
              })}
            </table>
            <div className="col-md-4 text-center mx-2 p-2 bg-light shadow-sm row flex-content-center align-items-center h-100 justify-content-center"  
            style={{borderRadius: '1rem'}}>
              <h2>{produtos.length} Produtos</h2>
              {soma} soma<br/>
            </div>
            </div>
          </section>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Cart