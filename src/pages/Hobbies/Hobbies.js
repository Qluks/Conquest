import { useState, useEffect } from "react";
import Formulario from "../../components/Hobbies/formulario-hobbies/formulario"
import Tabela from "../../components/Hobbies/card-hobbies/tabela"
import HeaderCarreira from "../../components/Voluntario/header-carreira/headercarreira";

export default function Carreira() {

  // Objeto produto
  const produtoh = {
    id: 0,
    tituloh: '',
    descricaoh: ''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtosh, setProdutosh] = useState([]);
  const [objProdutoh, setObjProdutoh] = useState(produtoh);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar/hobbies")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutosh(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProdutoh({ ...objProdutoh, [e.target.name]: e.target.value });
  }

  // Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar/hobbies', {
      method: 'post',
      body: JSON.stringify(objProdutoh),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        console.log(retorno_convertido);

        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setProdutosh([...produtosh, retorno_convertido]);
          limparFormulário();
        }
      })
  }

  // Alterar produto
  const alterar = () => {
    fetch('http://localhost:8080/alterar/hobbies', {
      method: 'put',
      body: JSON.stringify(objProdutoh),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        console.log(retorno_convertido);

        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {

          // Mensagem
          alert('Produto alterado com sucesso!');

          // Cópia do vetor de produtos
          let vetorTemp = [...produtosh];

          // Índice
          let indice = vetorTemp.findIndex((p) => {
            return p.id === objProdutoh.id;
          });

          // Alterar produto do vetorTemp
          vetorTemp[indice] = objProdutoh;

          // Atualizar o vetor de produtos
          setProdutosh(vetorTemp);

          // Limpar o formulário
          limparFormulário();
        }
      })
  }

  // Remover produto
  const remover = () => {
    fetch('http://localhost:8080/remover/hobbies/' + objProdutoh.id, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {

        // Mensagem
        alert(retorno_convertido.mensagem);

        // Cópia do vetor de produtos
        let vetorTemp = [...produtosh];

        // Índice
        let indice = vetorTemp.findIndex((p) => {
          return p.id === objProdutoh.id;
        });

        // Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        // Atualizar o vetor de produtos
        setProdutosh(vetorTemp);

        // Limpar fomulário
        limparFormulário();

      })
  }

  // Limpar formulário
  const limparFormulário = () => {
    setObjProdutoh(produtoh);
    setBtnCadastrar(true);
  }

  // Selecionar produto
  const selecionarProduto = (indice) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setObjProdutoh(produtosh[indice]);
    setBtnCadastrar(false)
  }

    return (
        <>
            <HeaderCarreira />
            <div className="formInputs" >
                <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProdutoh} cancelar={limparFormulário} remover={remover} alterar={alterar} />
            </div>
            <Tabela vetor={produtosh} selecionar={selecionarProduto} />
        </>
    )
}