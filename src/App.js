import ContainerChron from './components/ContainerChron'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/clock_25_5.css'

function App() {
  return (
    <div className='container-fluid'>
     <div className='d-flex justify-content-center align-items-center'>
	<div className='col-xs-6 p-5 rounded box'>
	<div className='mb-4'>
	<ContainerChron/>
	</div>
    	</div>
      </div>
     </div>	
  );
}

export default App;
