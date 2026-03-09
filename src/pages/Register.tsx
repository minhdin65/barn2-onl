import React, { useEffect } from 'react';

const REF_REDIRECT_URL = 'https://barn2.com/ref/1461/';

export default function Register() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    const gadSource = params.get('gad_source');
    if (gclid || gadSource === '1') {
      window.location.replace(REF_REDIRECT_URL);
    } else {
      window.location.replace('/');
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <p className="text-slate-600">Redirecting...</p>
    </div>
  );
}
