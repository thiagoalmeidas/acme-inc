import { Link } from 'react-router-dom';
import Logotype from '../../assets/logotype-acme.svg'

function Logo() {

    return (
        <Link to="/" className='fs-4 text-decoration-none text-light' >            
            <img src={Logotype} alt="" width={120}/>
        </Link>
    )
}

export default Logo