import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        sys.stderr.write(f"[SOC WEB SERVER] {self.address_string()} - {format%args}\n")

print("=" * 60)
print("  RITESH PAUL - CYBERSECURITY & SOC ANALYST PORTFOLIO")
print("=" * 60)
print(f"[*] Serving locally at: http://localhost:{PORT}")
print("[*] Press Ctrl + C to stop the server")
print("=" * 60)

ports_to_try = [8080, 5173, 8000, 3001]
server_started = False

for p in ports_to_try:
    try:
        with socketserver.TCPServer(("", p), Handler) as httpd:
            print(f"[*] Successfully bound to http://localhost:{p}")
            webbrowser.open(f"http://localhost:{p}")
            server_started = True
            httpd.serve_forever()
            break
    except OSError:
        continue

if not server_started:
    print("[!] Could not bind to any test port.")

