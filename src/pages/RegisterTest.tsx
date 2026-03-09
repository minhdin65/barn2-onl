import React, { useEffect, useState } from 'react';

const REF_REDIRECT_URL = 'https://barn2.com/ref/1461/';

export default function RegisterTest() {
  const [debug, setDebug] = useState<{
    url: string;
    search: string;
    gclid: string | null;
    gadSource: string | null;
    shouldRedirectToBarn2: boolean;
  } | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    const gadSource = params.get('gad_source');
    const isDebug = params.get('debug') === '1';

    const shouldRedirectToBarn2 = !!(gclid || gadSource === '1');

    if (isDebug) {
      setDebug({
        url: window.location.href,
        search: window.location.search,
        gclid,
        gadSource,
        shouldRedirectToBarn2,
      });
      return;
    }

    if (shouldRedirectToBarn2) {
      window.location.replace(REF_REDIRECT_URL);
    } else {
      window.location.replace('/');
    }
  }, []);

  if (debug) {
    return (
      <div className="min-h-screen bg-slate-100 p-8 font-mono text-sm">
        <h1 className="text-xl font-bold mb-4 text-slate-800">
          [TEST] Register Redirect Debug
        </h1>
        <div className="bg-white rounded-lg p-4 shadow space-y-2 max-w-2xl">
          <p>
            <span className="text-slate-500">URL:</span> {debug.url}
          </p>
          <p>
            <span className="text-slate-500">Query:</span> {debug.search || '(none)'}
          </p>
          <p>
            <span className="text-slate-500">gclid:</span> {debug.gclid ?? '(null)'}
          </p>
          <p>
            <span className="text-slate-500">gad_source:</span> {debug.gadSource ?? '(null)'}
          </p>
          <p>
            <span className="text-slate-500">→ Redirect to barn2:</span>{' '}
            <strong className={debug.shouldRedirectToBarn2 ? 'text-green-600' : 'text-red-600'}>
              {debug.shouldRedirectToBarn2 ? 'YES' : 'NO (→ home)'}
            </strong>
          </p>
        </div>
        <p className="mt-4 text-slate-600">
          Thêm <code className="bg-slate-200 px-1">?debug=1</code> để xem thông tin. Bỏ debug để test redirect thật.
        </p>
        <div className="mt-4 space-x-2">
          <a
            href="/register-test?gclid=test123"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded"
          >
            Test với gclid
          </a>
          <a
            href="/register-test?gad_source=1"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded"
          >
            Test với gad_source=1
          </a>
          <a
            href="/register-test"
            className="inline-block px-4 py-2 bg-slate-600 text-white rounded"
          >
            Test không params (→ home)
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <p className="text-slate-600">Redirecting...</p>
    </div>
  );
}
