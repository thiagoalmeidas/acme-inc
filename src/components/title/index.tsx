
type Title = {
    title:string
    subtitle:string
};

function PageTitle(props: Title) {

    return (

      <header>
        <h4><b>{props.title}</b></h4>
        <p className="m-0">{props.subtitle}</p>
      </header>
    )
  }

export default PageTitle