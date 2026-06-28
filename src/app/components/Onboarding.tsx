import { useEffect } from 'react';
import sinfiLogo from '../../assets/sinfi-logo-transparent.png';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-500 to-sky-700 flex flex-col items-center justify-center p-6 text-white">
      <div className="max-w-md w-full text-center space-y-5">
        <div className="space-y-5">
          <div className="w-40 h-40 mx-auto flex items-center justify-center">
            <img src={sinfiLogo} alt="SinFi" className="h-40 w-40 object-contain drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
