from flask import Flask, request, jsonify
from flask_cors import CORS  # ✅ Import CORS
import pandas as pd
import random
from utils import load_movies

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for the frontend to access backend

# ✅ Load movies from CSV
movies = load_movies()

@app.route("/")
def home():
    return jsonify({"message": "Welcome to the AI Movie Recommendation System!"})

@app.route("/recommend")
def recommend():
    """Filter movies based on genre, rating, mood, and setting."""
    genre = request.args.get("genre", "").strip()
    rating = request.args.get("rating", "").strip()
    mood = request.args.get("mood", "").strip()
    setting = request.args.get("setting", "").strip()

    if movies is None or movies.empty:
        return jsonify({"error": "Movie database is empty!"}), 500

    # ✅ Prevent returning all movies if no filter is selected
    if not genre and not rating and not mood and not setting:
        return jsonify({"error": "Please select at least one filter!"}), 400

    try:
        movies_list = movies.to_dict(orient="records")

        # ✅ Filter movies based on selected criteria
        filtered_movies = [
            movie["title"]
            for movie in movies_list
            if (not genre or movie.get("genre") == genre)
            and (not rating or movie.get("rating") == rating)
            and (not mood or movie.get("mood") == mood)
            and (not setting or movie.get("setting") == setting)
        ]

        # ✅ If no movies match the filters, return a message
        if not filtered_movies:
            return jsonify({"message": "No movies found matching your criteria.", "recommendations": []})

        return jsonify({"recommendations": filtered_movies})

    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500

@app.route("/random")
def random_movie():
    """Pick a random movie from the dataset."""
    if movies is None or movies.empty:
        return jsonify({"error": "Movie database is empty!"}), 500

    try:
        movie_list = movies.to_dict(orient="records")
        random_choice = random.choice(movie_list)
        return jsonify({"movie": random_choice["title"]})

    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
