# Movie Recommendation System

A Netflix-inspired movie recommendation system built using **Python**, **Flask**, and **React**. This system uses **Matrix Factorization (SVD)** and **Neural Collaborative Filtering (NCF)** for generating personalized movie recommendations based on genre, mood, and other user preferences. 

The app allows users to get personalized movie recommendations by selecting their preferences (genre, rating, mood, and setting). It also features a random movie picker. 

---

## Features
- **Movie Recommendation**: Get personalized movie recommendations based on genre, rating, mood, and setting.
- **Random Movie Picker**: Pick a random movie from the database.
- **AI Chatbot**: Chat with an AI-powered chatbot to learn more about movies.
- **Interactive UI**: Built with React and styled with Tailwind CSS for a clean, user-friendly experience.
- **Backend**: The backend is built using Flask and serves movie data from a CSV file.

---

## Tech Stack

### Backend:
- **Python** (Flask)
- **TensorFlow**, **Scikit-learn** (for machine learning)
- **Pandas** (for data manipulation)
- **Movies dataset** stored in CSV format

### Frontend:
- **React.js**
- **Tailwind CSS**
- **Axios** (for API calls)

---

## Setup

### Prerequisites

Make sure you have the following installed:
- **Python 3.x**
- **Node.js** and **npm**

---

### Backend Setup

 Clone the repository:

   ```bash
   git clone https://github.com/abhetu/Movie-Recommendation-System.git


# 1. Navigate to the backend directory:
cd Movie-Recommendation-System/backend

# 2. Create a virtual environment (optional but recommended):
python -m venv venv

# 3. Activate the virtual environment:
# For macOS/Linux:
source venv/bin/activate

# For Windows:
.\venv\Scripts\activate

# 4. Install the required dependencies:
pip install -r requirements.txt

# 5. Run the backend Flask server:
python app.py
# The server will start at http://127.0.0.1:5000


# Frontend Setup

# 1. Navigate to the frontend directory:
cd Movie-Recommendation-System/frontend

# 2. Install the required dependencies:
npm install

# 3. Start the React development server:
npm start
# The frontend will be available at http://localhost:3000
