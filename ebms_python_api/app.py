
from flask import Flask, jsonify, request
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv(dotenv_path="config/.env")

app = Flask(__name__)

# Sample authentication route to get a token
@app.route('/api/auth/login', methods=['POST'])
def login():
    return jsonify({"token": "generated_token"}), 200

# Get all invoices
@app.route('/api/invoices', methods=['GET'])
def get_invoices():
    return jsonify({"invoices": [{"id": 1, "amount": 1500, "customer": "John Doe", "status": "success", "electronicSignature": "abc123signature"}]}), 200

# Get specific invoice
@app.route('/api/invoices/<int:invoice_id>', methods=['GET'])
def get_invoice(invoice_id):
    return jsonify({"invoice": {"id": invoice_id, "amount": 1500, "customer": "John Doe", "status": "success", "electronicSignature": "abc123signature"}}), 200

# Create an invoice
@app.route('/api/invoices', methods=['POST'])
def create_invoice():
    data = request.get_json()
    return jsonify({"message": "Invoice created successfully", "data": data}), 201

# Get all stock movements
@app.route('/api/stock', methods=['GET'])
def get_stock():
    return jsonify({"stockMovements": [{"id": 1, "product": "Widget A", "quantity": 50, "movementType": "addition", "date": "2024-11-01"}]}), 200

# Get specific stock movement
@app.route('/api/stock/<int:stock_id>', methods=['GET'])
def get_stock_item(stock_id):
    return jsonify({"stockMovement": {"id": stock_id, "product": "Widget A", "quantity": 50, "movementType": "addition", "date": "2024-11-01"}}), 200

# Create a stock movement
@app.route('/api/stock', methods=['POST'])
def create_stock():
    data = request.get_json()
    return jsonify({"message": "Stock movement created successfully", "data": data}), 201

# Run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
