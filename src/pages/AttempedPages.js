/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AttemptPage() {
  const { hackathonId } = useParams();
  const [hackathon, setHackathon] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:5000/api/hackathons/${hackathonId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setHackathon(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHackathon();
  }, [hackathonId]);

  const handleChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = async () => {
    let correct = 0;

    hackathon.questions.forEach((q, i) => {
      if (hackathon.type === 'quiz' && answers[i] === q.correctAnswer) {
        correct += 1;
      }
    });

    const calculatedStars = correct;

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/participation/submit', {
        hackathonId,
        stars: calculatedStars
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setStars(calculatedStars);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  };

  if (!hackathon) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{hackathon.title} - Attempt</h2>

      {hackathon.type === 'quiz' && hackathon.questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p><strong>Q{index + 1}:</strong> {q.question}</p>
          {q.options.map((opt, i) => (
            <div key={i}>
              <input
                type="radio"
                name={`q${index}`}
                value={opt}
                onChange={() => handleChange(index, opt)}
              />
              {opt}
            </div>
          ))}
        </div>
      ))}

      {hackathon.type === 'coding' && hackathon.questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p><strong>Task:</strong> {q.codingTask}</p>
          <textarea
            rows="6"
            cols="60"
            placeholder="Paste your code here..."
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}

      {!submitted ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <p>✅ Submitted! You earned ⭐ {stars} stars.</p>
      )}
    </div>
  );
}

export default AttemptPage;*/
