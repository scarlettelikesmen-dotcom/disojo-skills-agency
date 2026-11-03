# Send python code to the Blender MCP add-on socket. Usage: python3 bl.py file.py  (or code on stdin)
import socket, json, sys
code = open(sys.argv[1]).read() if len(sys.argv) > 1 else sys.stdin.read()
s = socket.create_connection(('localhost', 9876), timeout=900)
s.sendall(json.dumps({"type": "execute_code", "params": {"code": code}}).encode())
buf = b''
while True:
    ch = s.recv(65536)
    if not ch: break
    buf += ch
    try: r = json.loads(buf); break
    except Exception: continue
print(json.dumps(r)[:4000])
