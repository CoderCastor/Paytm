import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import AuthLayouts from './Layouts/AuthLayouts'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

export function MainRouter (){

    return <Router>
        <Routes>
            <Route index element={<Home/>} />

            <Route element={<AuthLayouts/>} >
                <Route path='/signup' element={<Signup/>} />
                <Route path='/signin' element={<Signin/>} />
            </Route>
        </Routes>

        
    </Router>

}