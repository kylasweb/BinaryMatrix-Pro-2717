import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OnBoarding } from '@questlabs/react-sdk';
import questConfig from '../questConfig';

export default function Onboarding() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const getAnswers = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="w-full flex items-center justify-center p-12">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Let's Get Started!</h1>
            <p className="text-xl">Complete your profile to unlock all features</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <OnBoarding
            userId={userId}
            token={token}
            questId={questConfig.QUEST_ONBOARDING_QUESTID}
            answer={answers}
            setAnswer={setAnswers}
            getAnswers={getAnswers}
            accent={questConfig.PRIMARY_COLOR}
            singleChoose="modal1"
            multiChoice="modal2"
          >
            <OnBoarding.Header />
            <OnBoarding.Content />
            <OnBoarding.Footer />
          </OnBoarding>
        </div>
      </div>
    </div>
  );
}