import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const REF_REDIRECT_URL = 'https://barn2.com/ref/1461/';

export default function Register() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const gclid = searchParams.get('gclid');
    const gadSource = searchParams.get('gad_source');
    if (gclid || gadSource === '1') {
      window.location.replace(REF_REDIRECT_URL);
    } else {
      window.location.replace('/');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <p className="text-slate-600">Redirecting...</p>
    </div>
  );
}
