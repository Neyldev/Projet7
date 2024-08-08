import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from "@/Routes/Public.routes.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
          {/* <Route path="/auth/*" element={<AuthRouter />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
