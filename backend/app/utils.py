import pandas as pd
import os

def load_movies():
    """Load movies from CSV file into a pandas DataFrame."""
    file_path = "data/movies.csv"

    if not os.path.exists(file_path):
        print("❌ ERROR: movies.csv file not found!")
        return None

    df = pd.read_csv(file_path)
    
    # ✅ Ensure column names are correctly formatted
    expected_columns = {"id", "title", "genre", "rating"}
    if not expected_columns.issubset(set(df.columns)):
        print("❌ ERROR: CSV file structure is incorrect!")
        return None

    print(f"✅ Loaded {len(df)} movies from movies.csv")
    return df
