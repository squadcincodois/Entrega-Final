import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
	const [nome, setNome] = useState('')
	const [cpf, setCpf] = useState('')
	const [telefone, setTelefone] = useState('')
	const [email, setEmail] = useState('')
	const [idade, setIdade] = useState('')
	
	
	const { id } = useParams()
	const navigate = useNavigate()

	const criarOuEditarAluno = (e) => {
		e.preventDefault()

		const aluno = {id, nome, cpf, telefone, email, idade }
 
		if (id) {
			Api.put('/alunos/' + id, aluno).then((response) => {
				navigate('/Alunos')
			})
		} else {
			Api.post('/alunos/', aluno).then((response) => {
				navigate('/Alunos')
			})
		}
	}

	useEffect(() => {
		function getAlunoById() {
			if (id) {
				Api.get(`/Alunos/${id}`)
					.then((response) => {
						setNome(response.data.nome)
						setCpf(response.data.cpf)
						setTelefone(response,data.setTelefone)
						setEmail(response.data.email)
						setIdade(response.data.idade)
						
						
						
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}
		getAlunoById()
	}, [id])

	return (
		<div className="container py-o">
			<form>
				<fieldset>
					<legend>
						<h2 className="text-center">{id ? 'Editar' : 'Cadastro'}</h2>
					</legend>
					<div className="mb-3">
						<div className="align">
							<label><strong>NOME</strong></label>
							<input
								type="text"
								id="Nome"
								className="form-control s"
								placeholder="Nome"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
							/>
						</div>
					</div>

					<div className="mb-3">
							<div className="align">

							<label><strong>CPF</strong></label>
							<input
								type="text"
								id="Cpf"
								className="form-control s"
								placeholder="Cpf"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
							/>
							</div>
							</div>
					<div className="mb-3">


						<div className="align">
						<label><strong>TELEFONE</strong></label>
							<input
								type="text"
								id="Telefone"
								className="form-control s"
								placeholder="Telefone"
								value={telefone}
								onChange={(e) => setTelefone(e.target.value)}
							/>
							</div>
							</div>
							<div className="mb-3">
							<div className="align">
						<label><strong>EMAIL</strong></label>
							<input
								type="text"
								id="Email"
								className="form-control s"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							</div>
							</div>

							<div className="mb-3">
							  <div className="align">
							  <label><strong>IDADE</strong></label>
							   <input
								type="text"
								id="Idade"
								className="form-control s"
								placeholder="Idade"
								value={idade}
								onChange={(e) => setIdade(e.target.value)}
							/>
							</div>
							</div>
							
							
          <div className="d-flex justify-content-center">
					<button
						type="submit"
						className="btn btn-primary"
						onClick={(e) => criarOuEditarAluno(e)}
					>
						ENVIAR
					</button>
					<Link
						to="/Alunos"
						className="btn btn-danger"
						style={{ marginLeft: '10px' }}
					>
						CANCELAR
					</Link>
          </div>
				</fieldset>
			</form>
		</div>
	)
}
