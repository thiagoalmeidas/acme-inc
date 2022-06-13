import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';


function Menu() {

    return (
        <div className='d-flex align-items-center'>
            <FaRegStar size={20} color="#FFF" className='m-1' />
            <Link to="/favorite" className='text-decoration-none text-light mr-2'>Favoritos</Link>
            <FaCartArrowDown size={20} color="#FFF" />
            <Link to="/cart" className='text-decoration-none text-light m-1'>Carrinho</Link>
        </div>
    )
}

export default Menu