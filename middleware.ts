export default function middleware(request: Request) {
  const url = new URL(request.url);
  const gclid = url.searchParams.get('gclid');
  const gad = url.searchParams.get('gad_source');
  const dest = gclid || gad === '1' ? 'https://barn2.dzinblog.workers.dev/' : url.origin + '/';
  return Response.redirect(dest, 307);
}

export const config = {
  matcher: ['/register', '/register/'],
};
