
import { Routes, Route, Form} from 'react-router-dom';
import User from './User';
import UserCreate from './UserCreate';
import UserUpdate from './UserUpdate';
import TabPanel from './TabPanel'
import Drawer from './Drawer';
// import Pagination from './pagination';

import Logins from './logins';
import Testsyai from './Testsyai';
import Mains from './Mains';
import Upload from './upload';
import Minios from './Minios';
import Miniolist from './Minio-list';
// import Minio2 from './Minio2';

function App() {
  return (<div className="App">

    {/* เรียกใช้ Navar */}
      {/* <Navbar /> */}
    {/* เรียกใช้ Drawer */}
      {/* <Drawer /> */}

      <Routes>
        <Route path='/' element={<Logins />} />
        <Route path='minios' element={<Minios />} />
        <Route path='miniolist' element={<Miniolist />} />
        {/* <Route path='Minio2' element={<Minio2 />} /> */}

        <Route path='logins' element={<Logins />} />
        <Route path='mains' element={<Mains />} />
        <Route path='User' element={<User />} />
        <Route path='create' element={<UserCreate />} />
        <Route path='update/:id' element={<UserUpdate />} />
        <Route path='tabpanel' element={<TabPanel />} />
        <Route path='drawer' element={<Drawer />} />
        <Route path='testsyai' element={<Testsyai />} />
        <Route path='upload' element={<Upload />} />
        
      </Routes>

    {/* เรียกใช้ Pagination */}
      {/* <Pagination /> */}
    </div>);
}

export default App;
