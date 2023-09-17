import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Styling from './styling'
import Search from './Search'
import Offers from './Offers2'
import Navigation from './Navigation'
import Mypage from './Mypage'
import ChooseUs from './ChooseUs'
import Getdata from './Getdata'
import { NoPage } from './NoPage'
import About from './About'
import Information from './Information'
import slidebad from './slidebad'
import PostData from './PostData'
import DeleteData from './DeleteData'
import Edit from './Edit'
import Slidebad from './slidebad'
import Wrongpage from './Wrongpage'
const Routing=()=>
 {
  return (
    <div>
  
        <Routes>
         
          <Route path="/" element={<Mypage/>}/>
          <Route path="/Navigation" element={<Navigation/>}/>

          <Route path="/Offers" element={<Offers/>}/>
          <Route path="/ChooseUs" element={<ChooseUs />}/>
          <Route path="/Information" element={<Information/>}>
          <Route path="" element={<About/>}/>
              <Route path="PostData" element={<PostData/>}/>           
            <Route path="DeleteData" element={<DeleteData/>}/>
            <Route path="Edit" element={<Edit/>}/>
            <Route path="Wrongpage" element={<Wrongpage/>}/>
           
        </Route>
         
        <Route path="*" element={<NoPage/>}/>
        </Routes>
       
    </div>
  );
}

export default Routing