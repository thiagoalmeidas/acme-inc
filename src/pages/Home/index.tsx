import { useState } from 'react';

import Card from '../../components/card'
import Header from '../../components/header'
import Nav from '../../components/nav'
import Footer from '../../components/footer'



function Home() {

  let prods = [
    {
      produtoId: 1,
      verbo: 'React',
      adjetivo: 'Bondoso',
      description: 'Lectus quam id leo in vitae turpis massa sed. Varius morbi enim nunc faucibus.',
      price: 0,
      img: 'https://picsum.photos/id/101/200/200'
    }
  ]


  const verbos = ["Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia",
    "Tamborim", "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro",
    "Desentupidor", "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário",
    "Lancheira", "Cofre", "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador",
    "Grampo", "Bucha", "Catraca", "Alfinete", "Caneca", "Fita", "Moeda", "Gel",
    "Maquete", "Interfone", "Gaveta", "Helicóptero", "Vela de cera", "Quimono",
    "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte", "Canga", ]


  const adjetivos = ["prepotente", "valioso", "legítimo", "desleixado", "Natural", "inteligente",
    "disciplinado", "louvável", "amargurado", "honesto", "odioso", "vergonhoso", "horroroso",
    "magnífico", "gordo", "romântico", "sublime", "mesquinho", "injusto", "medroso", "otário",
    "quente", "intenso", "Sábio", "zeloso", "desapegado", "faceiro", "companheiro", "empenhado",
    "espantoso", "traidor", "perfeccionista", "Qualificado", "feio", "tolerante", "orgulhoso",
    "ignorante", "lutador", "desejado", "exigente", "nostálgico", "próspero", "compreensivo",
    "excelente", "estourado", "malvado", "windsurfista", "falso", "melhor", "terno"]

  const description = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lectus quam id leo in vitae turpis massa sed. Varius morbi enim nunc faucibus.",
    "Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor.",
    "Ac tortor dignissim convallis aenean et tortor at risus. Sagittis orci a scelerisque purus semper eget duis."
  ]

  function randomList(a: number, b: number) {
    let randomFilter = Math.floor(Math.random() * (a - b + 1)) + b;
    return randomFilter
  }


  while (prods.length < verbos.length) {

    const prodId = randomList(2, 999)
    const prodVerbo = verbos[randomList(0, verbos.length)]
    const prodNAdjetivo = adjetivos[randomList(0, adjetivos.length)]
    const prodDesc = description[randomList(0, description.length)]

    let descrLength = prodVerbo.length
    let verboLength = prodNAdjetivo.length
    let priceTotal = -(10 + verboLength * ((500 - descrLength) / (3 -
      verboLength)))     

    const image = "https://picsum.photos/id/" + randomList(10, 100) + "/200/200"

    const searchProd = [{
      produtoId: prodId,
      verbo: prodVerbo,
      adjetivo: prodNAdjetivo,
      description: prodDesc,
      price: priceTotal,
      img: image

    }]
    

    const existsVerbo = prods.some(list => list.verbo === searchProd[0].verbo)
    const existsAdjetivo = prods.some(list => list.adjetivo === searchProd[0].adjetivo)
    const existsImg = prods.some(list => list.img === searchProd[0].img)
    const existsId = prods.some(list => list.produtoId === searchProd[0].produtoId)

    if (!existsVerbo && !existsAdjetivo && !existsImg && !existsId) {
      prods.push(searchProd[0])
      localStorage.setItem('prods', JSON.stringify(prods))      
    }    
  }

    
  const jsonProds = JSON.parse(localStorage.getItem('prods')|| '') 

  const [data, setData] = useState(jsonProds)

  jsonProds.shift()
 
  return (
    <>
      <Nav />
      <div className="container">
        <Header title='Produtos Gerais' subtitle='Ideal para o seu dia a dia!' />
        <div className="row pb-4">
          <section>
            <div className="row row-cols-2 pt-4 row-cols-md-4 g-4">
              {data.map(({ produtoId, verbo, adjetivo, price, description, img }) => {
                return (
                  <Card
                    key={produtoId}
                    verbo={verbo}
                    adjetivo={adjetivo}
                    description={description}
                    price={price}
                    img={img} 
                    produtoId={produtoId}
                  />
                )
              })}
              
            </div>
          </section>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Home