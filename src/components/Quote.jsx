import React, { useState, useEffect } from 'react';
import '../styles/Quote.css';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'gsQp5ZPcOzIZtdqe2sn55wp142H2eTYV694ngKUO',
        },
      });
      const response = await res.json();
      const [{ quote }] = response;
      const [{ author }] = response;
      setQuote(quote);
      setAuthor(author);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="error">Error fetching quote!!</div>
    );
  }

  return (
    <div className="quote-container">
      <h3 className="quote">
        {'" '}
        {quote}
        {' "'}
      </h3>
      <p className="author">
        {' - '}
        {author}
      </p>
    </div>
  );
}
export default Quote;
