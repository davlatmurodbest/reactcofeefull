import './App.scss';
import Mix from './Components/Mix1/mix';
import Footer from './Components/footer/footer';
import Header from './Components/header/header';
import Error from './Components/Pages/Error/error';
import { Routes, Route } from 'react-router-dom';
import Mix2 from './Components/Mix2/mix2';
import Mix3 from './Components/Mix3/mix3';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='' element={<Mix />} />
        <Route path='home' element={<Mix />} />
        <Route path='about' element={<Mix2/>} />
        <Route path='*' element={<Error />} />
        <Route path='create-plan' element={<Mix3 />} />
        <Route path='create' element={<Mix3 />} />
        <Route path='plan' element={<Mix3 />} />
      </Routes>

      <Footer />
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-is/18.2.0/umd/react-is.production.min.js" integrity="sha512-oEyxcPmURibEvMHeDB8pmi2e/Xngsb9KB28K1QnCXoGB+ndrgVJq2NOeAFutBUFPQ8TC3MWHJNSsqNltVzY6cA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </>

  );
}

export default App;
