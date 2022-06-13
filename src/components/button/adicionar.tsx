import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AdicionarCart() {

    return (
            <Link to="/Cart" className="d-flex justify-content-center align-items-center btn btn-outline-dark" 
                style={{
                         border: '1px solid #444',
                         borderRadius: '3rem',
                       }}>
                <FaCartArrowDown size={20} color="#888" className='m-2' />
                Adicionar
            </Link>
            
    )
}

export default AdicionarCart