import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [mood, setMood] = useState('');
  const [setting, setSetting] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [genre, rating, mood, setting]);

  const fetchRecommendations = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/recommend', {
        params: { genre, rating, mood, setting }
      });
      setRecommendations(response.data.recommendations);
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setErrorMessage('Failed to fetch recommendations. Try again later.');
    }
  };

  const fetchRandomMovie = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/random');
      setRandomMovie(response.data.movie);
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching random movie:', error);
      setErrorMessage('Failed to fetch a random movie. Try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-5">
      <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4 animate-fade-in">🎬 Pick a Movie for Me</h1>
      <p className="text-gray-300 mt-2 text-lg">Find the perfect movie based on your mood and preferences!</p>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl mt-6 max-w-lg w-full animate-slide-up">
        <div className="mb-4">
          <label className="block text-yellow-400 font-bold text-lg">📽️ Genre:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)} className="border p-3 w-full rounded-lg bg-gray-700 text-white hover:bg-gray-600">
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-yellow-400 font-bold text-lg">⭐ Rating:</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)} className="border p-3 w-full rounded-lg bg-gray-700 text-white hover:bg-gray-600">
            <option value="">Select Rating</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-yellow-400 font-bold text-lg">😊 Mood:</label>
          <select value={mood} onChange={(e) => setMood(e.target.value)} className="border p-3 w-full rounded-lg bg-gray-700 text-white hover:bg-gray-600">
            <option value="">Select Mood</option>
            <option value="Exciting">Exciting</option>
            <option value="Romantic">Romantic</option>
            <option value="Scary">Scary</option>
            <option value="Inspirational">Inspirational</option>
            <option value="Funny">Funny</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-yellow-400 font-bold text-lg">👥 Who are you watching with?</label>
          <select value={setting} onChange={(e) => setSetting(e.target.value)} className="border p-3 w-full rounded-lg bg-gray-700 text-white hover:bg-gray-600">
            <option value="">Select Setting</option>
            <option value="Alone">Alone</option>
            <option value="Family">Family</option>
            <option value="Friends">Friends</option>
            <option value="Date Night">Date Night</option>
          </select>
        </div>

        <button onClick={fetchRecommendations} className="w-full bg-yellow-500 text-black font-bold p-3 rounded-lg mt-4 hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg">
          🎥 Get Movie Recommendations
        </button>

        <button onClick={fetchRandomMovie} className="w-full bg-purple-500 text-white font-bold p-3 rounded-lg mt-3 hover:bg-purple-600 transition transform hover:scale-105 shadow-lg">
          🔀 Pick a Random Movie
        </button>
      </div>

      {errorMessage && (
        <div className="mt-4 p-4 bg-red-600 text-white rounded-lg shadow-md">
          ⚠️ {errorMessage}
        </div>
      )}

      <div className="mt-8 w-full max-w-lg bg-gray-800 p-6 rounded-2xl shadow-xl animate-fade-in">
        <h2 className="text-2xl font-bold text-yellow-400">🎞️ Recommended Movies:</h2>
        <ul className="mt-3 text-white space-y-2">
          {recommendations.length > 0 ? (
            recommendations.map((movie, index) => (
              <li key={index} className="p-3 border-b border-gray-700 bg-gray-900 rounded-lg shadow-lg">{movie}</li>
            ))
          ) : (
            <p className="text-gray-400">No recommendations yet. Try selecting different options!</p>
          )}
        </ul>
      </div>

      {randomMovie && (
        <div className="mt-8 w-full max-w-lg bg-gray-800 p-6 rounded-2xl shadow-xl animate-slide-up">
          <h2 className="text-2xl font-bold text-yellow-400">🎲 Random Movie:</h2>
          <p className="text-lg text-white p-3 bg-gray-900 rounded-lg shadow-md">{randomMovie}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
