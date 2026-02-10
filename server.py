from http.server import HTTPServer, SimpleHTTPRequestHandler
import socketserver
import webbrowser
import os

PORT = 8000


def run_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    Handler = SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Сервер запущен на http://localhost:{PORT}")
        print("Открываю браузер...")
        webbrowser.open(f'http://localhost:{PORT}')

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nСервер остановлен")


if __name__ == "__main__":
    run_server()
