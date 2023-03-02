import {Switch, Route} from 'react-router-dom'

import './App.css'

import TechEra from './components/TechEra'

import Header from './components/Header'

import NotFound from './components/NotFound'
import CourseItem from './components/CourseItem'

const App = () => (
  <div className="main-container">
    <Header />
    <Switch>
      <Route exact path="/" component={TechEra} />
      <Route exact path="/courses/:id" component={CourseItem} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
export default App
