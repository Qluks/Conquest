function Tabela({ vetor, selecionar }) {

  const styleCard = {
    position: 'relative',
    width: '750px',
    marginTop: '25px',
    marginLeft: '40px',
    marginBottom: '25px',
  }

  return (
    <>
          {
            vetor.map((obj, indice) => (
                  <div class="card" key={indice} style={styleCard} >
                    <div class="card-header">
                      {"Conquista: " + (indice + 1)}
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{obj.titulov}</h5>
                      <p class="card-text">{obj.descricaov}</p>
                      <button onClick={() => { selecionar(indice) }}  className="btn btn-success">Editar</button>
                    </div>
                  </div>
            ))
          }
    </>
  );
}

export default Tabela;
