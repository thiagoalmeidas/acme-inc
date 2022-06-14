import Menu from '../menu'
import Logo from '../logo'


function Nav() {

    return (
        <div className="flex-fill bg-info bg-dark" style={{ background: 'linear-gradient(13deg, #dc3545 0%, rgb(253 45 150) 95%)'}}>
            <nav className="container p-3 d-flex justify-content-between align-items-center">
                <Logo />
                <Menu />
            </nav>
        </div> 
    )
  }
  
  export default Nav