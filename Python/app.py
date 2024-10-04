from flask import Flask, render_template, request

app = Flask(__name__)


products = [
    {"id": 1, "name": "Laptop", "price": 999.99},
    {"id": 2, "name": "Smartphone", "price": 499.99},
    {"id": 3, "name": "Tablet", "price": 299.99},
    {"id": 4, "name": "Headphones", "price": 199.99},
    {"id": 5, "name": "Smartwatch", "price": 149.99}
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    query = request.form.get('query', '').lower()
    results = [product for product in products if query in product['name'].lower()]
    return render_template('index.html', products=results)

if __name__ == '__main__':
    app.run(debug=True)
