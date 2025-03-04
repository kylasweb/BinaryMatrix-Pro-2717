import { useNavigate } from 'react-router-dom';
import { QuestLogin } from '@questlabs/react-sdk';
import questConfig from '../questConfig';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = ({ userId, token, newUser }) => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    
    if (newUser) {
      navigate('/onboarding');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="w-full flex items-center justify-center p-12">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Welcome Back!</h1>
            <p className="text-xl">Join our growing community of successful networkers</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <QuestLogin 
            onSubmit={handleLogin}
            email={true}
            google={false}
            accent={questConfig.PRIMARY_COLOR}
          />
        </div>
      </div>
    </div>
  );
}