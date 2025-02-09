import numpy as np
import pandas as pd
from sklearn.decomposition import TruncatedSVD
import tensorflow as tf

def train_svd(user_item_matrix, n_components=50):
    svd = TruncatedSVD(n_components=n_components)
    matrix_transformed = svd.fit_transform(user_item_matrix)
    return svd, matrix_transformed

def recommend_movies(genre, rating, mood, setting, movies_df):
    filtered_movies = movies_df

    # Apply genre filter
    if genre:
        filtered_movies = filtered_movies[filtered_movies['genre'].str.contains(genre, case=False, na=False)]

    # Apply rating filter
    if rating:
        filtered_movies = filtered_movies[filtered_movies['rating'] == rating]

    # Apply additional AI filtering based on mood & setting
    if mood or setting:
        filtered_movies = filtered_movies.sample(n=10)  # Simulate AI filtering

    return filtered_movies[['title', 'genre', 'rating']].to_dict(orient='records')
