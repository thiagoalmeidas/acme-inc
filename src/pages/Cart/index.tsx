import Header from "../../components/header"
import Footer from "../../components/footer"
import Nav from "../../components/nav"
import { produtos } from '../../Data/produtos.json'
import { useState } from "react"


function Cart() {
  
  // const dataLocal = JSON.parse(localStorage.getItem('produtoStorage')|| '')
  
  const [data, setData] = useState(produtos)
  
    let sum = 0
  
    for (let i = 0; i < produtos.length; i++) {
        sum += Number(data[i].price)
    }
    
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
                    <th scope="col">Exluir</th>                   
                  </tr>
                </thead>
                
  
                {data.map((data: any) => {
                  return (
                    <tbody key={data.produtoId}>
                      <tr >
                        <th>{data.produtoId}</th>
                        <td><img src={data.img} width={70} alt={data.verbo}style={{borderRadius: '1rem'}}/></td>
                        <td>{data.verbo} - {data.adjetivo}</td>
                        <td>R$ {data.price}</td>
                        <td>
                          <button 
                          className="d-flex justify-content-center align-items-center btn btn-outline-danger" 
                          style={{borderRadius: '1rem'}}
                          >Excluir</button>
                          
                          </td>
                      </tr>                
                    </tbody>
                  )
                })}
              </table>
              <div className="col-md-4 text-center mx-2 py-4 bg-light shadow-sm row flex-content-center align-items-center h-100 justify-content-center"  
              style={{borderRadius: '1rem'}}>
                <h2>{data.length} Produtos</h2>
                <p><b>SubTotal</b></p>
                <b className="fs-3" style={{color: 'rgb(112, 45, 253)'}}>RS {sum}</b> 
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