import { Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';


function Menu() {

    return (
        <div className='d-flex align-items-center'>
            <FaRegStar size={20} color="#FFF" className='mr-1' />
            <Link to="/favorite" className='text-decoration-none text-white'>Favoritos</Link> 
            <span className='text-light opacity-25 mx-2'>|</span>
            <FaCartArrowDown size={20} color="#FFF" className='mr-1'/>
            <Link to="/cart" className='text-decoration-none text-white'>Carrinho</Link>
        </div>
    )
}

export default Menu