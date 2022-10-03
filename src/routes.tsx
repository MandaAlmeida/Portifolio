import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Project } from './Pages/Project';
import { Home } from './Pages/Home';


export function Nav(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/' element={<Project />} />
                </Routes>
            </Router>
        </div>
    )
}