import { Outlet } from 'react-router-dom';
import './App.css';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* SearchHeader는 따로 데이터 통신은 일어나지 않음 */}
      <SearchHeader />

      {/* 그래서 Outlet만 QueryClient로 감싸서 사용 */}
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
