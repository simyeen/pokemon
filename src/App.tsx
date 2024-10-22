import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Community from './components/pages/Community';

import './index.css';

// isError 관련
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/community' element={<Community />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position={'right'} />
    </QueryClientProvider>
  );
}

export default App;
