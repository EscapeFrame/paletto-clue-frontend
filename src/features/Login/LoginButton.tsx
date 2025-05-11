import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useSetRecoilState } from 'recoil';
import { userState } from '@/shared/recoil/user';
import { GoogleUser } from '@/shared/types/user';
import { useContext } from 'react';
import { UserContext } from '@/entities/Context/LoginContext';

function LoginButton() {
  const setUser = useSetRecoilState(userState);
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("LoginButton은 UserContext.Provider 안에서 사용되어야 합니다.");
  }
  const { setAccessToken } = context;

  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const { credential } = credentialResponse || {};
          if (credential) {
            try {
              const decoded = jwtDecode<GoogleUser>(credential);
              console.log('Decoded user:', decoded);
              setUser(decoded);
              setAccessToken(credential);
            } catch (error) {
              console.log('Invalid token');
            }
          }
        }}
        // onSuccess={async (credentialResponse) => {
        //   const { credential } = credentialResponse || {};
        //   if (credential) {
        //     try {
        //       const decoded = jwtDecode<GoogleUser>(credential);
        //       console.log("Decoded user:", decoded);
        //       setUser(decoded);
        //       setAccessToken(credential);
        
        //       const res = await axios.post(
        //         "백엔드 주소",
        //         {},
        //         {
        //           headers: {
        //             Authorization: `Bearer ${credential}`,
        //           },
        //         }
        //       );
        //       console.log("백엔드 응답:", res.data);
        //     } catch (error) {
        //       console.error("로그인 처리 중 오류 발생:", error);
        //     }
        //   }
        // }}
        
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}

export default LoginButton;
