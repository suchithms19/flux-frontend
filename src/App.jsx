import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Content from './pages/Content'
import Form from './pages/Form'
import ThankYouPage from './pages/ThankYou'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/customerform" element={<Form />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App