import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Alunos from "./Pages/Alunos";
import AlunosCreate from "./Pages/Alunos/Create";




function App() {
	return (
		<div className="App">
		<Router>
			<Header />
			<Footer />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alunos" element={<Alunos />} />
        <Route path="/Alunos-Create" element={<AlunosCreate />} />
        <Route path="/Alunos-Update/:id" element={<AlunosCreate />} />
      	
      </Routes>
    </Router>
			
				
		
		
		</div>
	)
}

export default App
