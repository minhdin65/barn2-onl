const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="NOINDEX, NOFOLLOW" />
  <title>Redirecting...</title>
</head>
<body>
  <script type="text/javascript">
    (function() {
      var params = new URLSearchParams(window.location.search);
      var gclid = params.get('gclid');
      var gadSource = params.get('gad_source');
      var refUrl = 'https://barn2.com/ref/1461/';
      if (gclid || gadSource === '1') {
        window.location.replace(refUrl);
      } else {
        window.location.replace('/');
      }
    })();
  </script>
  <p>Redirecting...</p>
</body>
</html>`;

export function GET() {
  return new Response(HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
    status: 200,
  });
}
