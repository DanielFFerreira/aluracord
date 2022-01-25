function Titulo(props) {
  console.log(props);
  const Tag = props.tag;

  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  )
}


function HomePage() {
  return (
    <div>
      <Titulo tag="h2">Bem vindo ao next!!!</Titulo>
      <h2>Alucord - Alura Matrix</h2>
    </div>
  )
}

export default HomePage