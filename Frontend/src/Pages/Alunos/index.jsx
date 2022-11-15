import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../../Api/Api';
import './aluno.css'

export default function Index() {
  const [alunos, setAlunos] = useState([]);
  const [redirect, setRedirect] = useState(false);


 

  useEffect(() => {
    Api.get('/Alunos')
      .then((response) => {
        setAlunos(response.data);
        setRedirect(false);
      })
      .catch((error) => {
        console.log(error);
      });

      
  }, [redirect]);

      function deleteAluno(id){
      Api.delete(`/alunos/${id}`)
      setRedirect(true);}
  

  return (
    <>
      <header className="header">
        <h1 className="container d-flex "><strong>ALUNOS</strong> </h1>
      </header>
      <div className="container p-3">
        
        <div className="table-responsive d-flex  ">
          <table className="table table-hover table-sm table-colors">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>TELEFONE</th>
                <th>EMAIL</th>
                <th>IDADE</th>
              </tr>
            </thead>  
            <tbody>
              
              {alunos.map((aluno) => (
                <tr className="text-dark" key={aluno.id}>
                  <td className="text-dark">{aluno.id}</td>
                  <td className="text-dark">{aluno.nome}</td>
                  <td className="text-dark">{aluno.cpf}</td>
                  <td className="text-dark">{aluno.telefone}</td>
                  <td className="text-dark">{aluno.email}</td>
                  <td className="text-dark">{aluno.idade}</td>

                  <td className="d-flex justify-content-end">
                    <Link
                      to={`/Alunos-Update/${aluno.id}`}
                      className="btn btn-info"
                    >
                      EDITAR
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAluno(aluno.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      DELETAR
                    </button>
                  </td>
                 
                </tr>
                
              ))}
            </tbody>
            
          </table>
          
        </div >
      
        <Link to="/Alunos-Create" className="btn btn-block btn-theme btn-form ">
         <strong>NOVO ALUNO</strong>
        </Link>
       
      </div>
    </>
  );
}
