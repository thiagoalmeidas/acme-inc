import Title from '../title'

type Page = {
  title:string
  subtitle:string
};


function Header(props: Page) {

    return (
      <header className='mt-4 p-5' style={{
        backgroundColor: 'rgb(239 239 239)',
        borderRadius: '1rem'
      }}>
        <Title title={props.title} subtitle={props.subtitle} />
      </header>
    )
  }
  
  export default Header
  