import { Routes, Route, Navigate } from 'react-router-dom';
import { JobDetails } from './pages/JobDetails';
import { Jobs } from './pages/Jobs.page';

function App() {
  return (
    <div className="font-proxima text-main-grey bg-[#f5f5f5]">
      <div className="container">
        <Routes>
            <Route path="/jobs">
              <Route index element={<Jobs />} />
              <Route path=":jobId" element={<JobDetails />} />
            </Route>
            <Route path="*" element={<Navigate to="/jobs" replace={true} />} />
        </Routes>
      </div>
      
    </div>
  );
};

export default App;
