import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { UserContext } from '@/entities/Context/LoginContext';
import { useState } from 'react';

import Home from '../pages/home';
import Login from '../pages/Login'
import MyClass from '@/pages/MyClass';
import ClassRoom from '@/pages/ClassRoom';

const clientId = import.meta.env.VITE_CLIENT_ID;

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  console.log("액세스토큰 : ",accessToken);

  return (
    <RecoilRoot>
      <GoogleOAuthProvider clientId={clientId}>
        <Router>
          <UserContext.Provider
            value={{ accessToken, setAccessToken }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/class" element={<Class />} /> */}
              <Route path="/Login" element={<Login />} />
              {/* <Route path="/auth/callback/google" element={<Google />} /> */}
              <Route path="/class" element={<MyClass />} />
              <Route path="/class/:classId" element={<ClassRoom />} />
            </Routes>
          </UserContext.Provider>
        </Router>
      </GoogleOAuthProvider>
    </RecoilRoot >
  );
}

export default App;
