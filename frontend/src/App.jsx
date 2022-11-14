import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminRoutes from './routes/AdminRoutes'
import GenericRoutes from './routes/GenericRoutes'
import HomeScreen from './screens/HomeScreen'
import PrintView from './screens/PrintView'
import TestBuwa from './screens/TestBuwa'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/test' element={<TestBuwa />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
        <Route path='/*' element={<GenericRoutes />} />
        {/* overiding default layouts */}
        <Route path='/search/:keyword' element={<HomeScreen />} exact />
        <Route path='/page/:pagenumber' element={<HomeScreen />} exact />
        <Route
          path='/search/:keyword/page/:pagenumber'
          element={<HomeScreen />}
          exact
        />

        <Route path='/sort/:filter' element={<HomeScreen />} exact />
        <Route
          path='/sort/:filter/page/:pagenumber'
          element={<HomeScreen />}
          exact
        />

        <Route path='/search/:keyword/sort/:filter' element={<HomeScreen />} exact />
        <Route
          path='/search/:keyword/sort/:filter/page/:pagenumber'
          element={<HomeScreen />}
          exact
        />

        <Route path='/' element={<HomeScreen />} exact />
        <Route path='/order/print/:id' element={<PrintView />} />
      </Routes>
    </Router>
  )
}

export default App