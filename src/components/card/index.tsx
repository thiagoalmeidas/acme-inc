import { FaCartArrowDown, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BtnViewProduct from '../button/view'
import BtnFavorite from '../button/favorite'


type CatProd = {
    produtoId: Number
    verbo: String
    adjetivo: String
    description: String
    price: Number
    img: String
};

function Card(props: CatProd) {
    
    function btnFavorite() {
       alert('Clicando na Estrela de Favorito')
    }
    
    return (
        <div className="col">
            <div className="card h-100" style={{
                borderRadius: '1rem',
            }}>
                <img src={String(props.img)} alt={String(props.verbo)} style={{ borderRadius: '1rem' }} />
                <button onClick={btnFavorite} className='position-absolute m-2 btn top-0 end-0'>
                    <FaRegStar size={25} color="#fff" />
                </button>
                <div className="card-body">
                    <h5 className="card-title">{props.verbo} -
                        <small style={{color: '#888'}}> 
                        {props.adjetivo}
                        </small>
                    </h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text fw-bold">R$ {props.price.toFixed(2)}</p>
                    <div className="d-flex align-items-center justify-content-center">
                        <Link to="/Product" className="d-flex align-items-center btn btn-outline-dark"
                            style={{
                                border: '1px solid #444',
                                borderRadius: '3rem',
                            }}>
                            <FaCartArrowDown size={20} color="#888" className='m-2' />
                            Ver Produto
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Card