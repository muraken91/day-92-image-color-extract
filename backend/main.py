from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans
import io
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


def calculate_percentage(colors, counts):
    total_pixels = sum(counts)
    percentages = [(count / total_pixels) * 100 for count in counts]
    return [round(percentage, 2) for percentage in percentages]


@app.route('/extract-colors', methods=['POST'])
def extract_colors():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = request.files['image']
    img = Image.open(io.BytesIO(image.read()))
    img_data = np.asarray(img.resize((100, 100))).reshape(-1, 3)

    # Extract colors using KMeans clustering
    kmeans = KMeans(n_clusters=5)  # Change the number of clusters as needed
    kmeans.fit(img_data)
    colors, counts = np.unique(kmeans.labels_, return_counts=True)

    hex_colors = [f'#{"".join(f"{int(c):02x}" for c in color)}' for color in kmeans.cluster_centers_]
    percentages = calculate_percentage(kmeans.cluster_centers_, counts)

    color_data = [{'hex': hex_color, 'percentage': percentage} for hex_color, percentage in zip(hex_colors, percentages)]

    return jsonify({'colors': color_data})


if __name__ == '__main__':
    app.run(debug=True)
