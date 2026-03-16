export function buildSrcdoc(html: string, css: string, js: string): string {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body { font-family: sans-serif; margin: 8px; }
${css}
</style>
</head>
<body>
${html}
<script>
(function() {
  const _post = (type, args) => {
    try {
      parent.postMessage({
        source: 'playground',
        type,
        args: args.map(a => {
          try { return typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a); }
          catch { return String(a); }
        })
      }, '*');
    } catch {}
  };
  const orig = { log: console.log, warn: console.warn, error: console.error, info: console.info };
  console.log = (...a) => { orig.log(...a); _post('log', a); };
  console.warn = (...a) => { orig.warn(...a); _post('warn', a); };
  console.error = (...a) => { orig.error(...a); _post('error', a); };
  console.info = (...a) => { orig.info(...a); _post('info', a); };
  window.onerror = (msg, src, line, col, err) => {
    _post('error', [msg + (line ? ' (line ' + line + ')' : '')]);
  };
  window.addEventListener('unhandledrejection', (e) => {
    _post('error', ['Unhandled Promise rejection: ' + e.reason]);
  });
})();
try {
${js}
} catch(e) {
  console.error(e.message);
}
<\/script>
</body>
</html>`
}
