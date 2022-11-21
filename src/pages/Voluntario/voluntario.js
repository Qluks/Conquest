import { useState, useEffect } from "react";
import Formulario from "../../components/Voluntario/formulario-voluntario/formulario"
import Tabela from "../../components/Voluntario/card-voluntario/tabela"
import HeaderCarreira from "../../components/Voluntario/header-carreira/headercarreira";

export default function Carreira() {

  // Objeto produto
  const produtov = {
    id: 0,
    titulov: '',
    descricaov: ''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtosv, setProdutosv] = useState([]);
  const [objProdutov, setObjProdutov] = useState(produtov);

  // UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar/voluntario")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutosv(retorno_convertido));
  }, []);

  // Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProdutov({ ...objProdutov, [e.target.name]: e.target.value });
  }

  // Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar/voluntario', {
      method: 'post',
      body: JSON.stringify(objProdutov),
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
          setProdutosv([...produtosv, retorno_convertido]);
          limparFormulário();
        }
      })
  }

  // Alterar produto
  const alterar = () => {
    fetch('http://localhost:8080/alterar/voluntario', {
      method: 'put',
      body: JSON.stringify(objProdutov),
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
          let vetorTemp = [...produtosv];

          // Índice
          let indice = vetorTemp.findIndex((p) => {
            return p.id === objProdutov.id;
          });

          // Alterar produto do vetorTemp
          vetorTemp[indice] = objProdutov;

          // Atualizar o vetor de produtos
          setProdutosv(vetorTemp);

          // Limpar o formulário
          limparFormulário();
        }
      })
  }

  // Remover produto
  const remover = () => {
    fetch('http://localhost:8080/remover/voluntario/' + objProdutov.id, {
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
        let vetorTemp = [...produtosv];

        // Índice
        let indice = vetorTemp.findIndex((p) => {
          return p.id === objProdutov.id;
        });

        // Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        // Atualizar o vetor de produtos
        setProdutosv(vetorTemp);

        // Limpar fomulário
        limparFormulário();

      })
  }

  // Limpar formulário
  const limparFormulário = () => {
    setObjProdutov(produtov);
    setBtnCadastrar(true);
  }

  // Selecionar produto
  const selecionarProduto = (indice) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setObjProdutov(produtosv[indice]);
    setBtnCadastrar(false)
  }

    return (
        <>
            <HeaderCarreira />
            <div className="formInputs" >
                <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProdutov} cancelar={limparFormulário} remover={remover} alterar={alterar} />
            </div>
            <Tabela vetor={produtosv} selecionar={selecionarProduto} />
        </>
    )
}