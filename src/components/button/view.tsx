import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ViewProduct() {

    return (
            <Link to="/Product" className="d-flex align-items-center btn btn-outline-dark" 
                style={{
                         border: '1px solid #444',
                         borderRadius: '3rem',
                       }}>
                <FaCartArrowDown size={20} color="#888" className='m-2' />
                Ver Produto
            </Link>
            
    )
}

export default ViewProduct