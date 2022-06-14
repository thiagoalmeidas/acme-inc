import Menu from '../menu'
import Logo from '../logo'


function Nav() {

    return (
        <div className="flex-fill bg-info bg-dark" style={{ background: 'linear-gradient(13deg, rgb(53 83 220) 0%, rgb(112 45 253) 95%)'}}>
            <nav className="container p-3 d-flex justify-content-between align-items-center">
                <Logo />
                <Menu />
            </nav>
        </div> 
    )
  }
  
  export default Nav