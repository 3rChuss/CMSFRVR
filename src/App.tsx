import { UserProvider } from 'context/userContext'
import { BrowserRouter } from 'react-router-dom'
import SiteRouter from 'routes'

function App() {
  return (
    <div className="relative overflow-hidden bg-slate-300">
      <UserProvider>
        <BrowserRouter>
          <SiteRouter />
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
