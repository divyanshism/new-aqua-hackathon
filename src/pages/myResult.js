/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/auth/styles/myResult.css';

function MyResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/participation/my', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResults(res.data);
      } catch (err) {
        console.error('Error fetching results:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="results-container">
      <h2>📊 My Participation Results</h2>
      {results.length === 0 ? (
        <p>No participations found.</p>
      ) : (
        <table className="results-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Score</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result._id}>
                <td>{result.hackathon?.title}</td>
                <td>{result.hackathon?.type}</td>
                <td>{result.score !== null ? result.score : 'Pending'}</td>
                <td>{new Date(result.submittedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyResults;
*/