import { DisplayForm, Form } from "./styles";

function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {

  const styleForm = {
    position: 'absolute',
  }

  const styleTextarea = {
    height: '130px',
  }

  return (
    <>
      <DisplayForm class="display-2">Registrar Conquista</DisplayForm>
      <Form style={ styleForm } >
        <input type="text" value={obj.tituloh} onChange={eventoTeclado} name='tituloh' placeholder="Titulo" className="form-control" />
        <textarea class="form-control" value={obj.descricaoh} onChange={eventoTeclado} name='descricaoh' placeholder="Descrição" id="floatingTextarea2" style={ styleTextarea } ></textarea>

        {botao ? (
          <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" />
        ) : (
          <div>
            <input type="button" value="Alterar" onClick={alterar} className="btn btn-warning" />
            <input type="button" value="Remover" onClick={remover} className="btn btn-danger" />
            <input type="button" value="Cancelar" onClick={cancelar} className="btn btn-secondary" />
          </div>
        )}
      </Form>
    </>
  );
}

export default Formulario;
