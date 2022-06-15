import { MdDelete } from 'react-icons/md';

function AdicionarCart() {
    

    return (
            <button className="d-flex justify-content-center align-items-center btn btn-outline-dark" 
                style={{
                         border: '1px solid #444',
                         borderRadius: '3rem',
                       }}>
                <MdDelete size={20} color="#888" className='m-2' />                
            </button>
            
    )
}

export default AdicionarCart