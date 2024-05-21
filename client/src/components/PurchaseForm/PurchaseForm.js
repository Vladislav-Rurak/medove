import React, { useState } from 'react';

function PurchaseForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name,
        email,
      }).toString(),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      setMessage('Your message has been sentо');
      setTimeout(() => {
        setMessage('');
        window.location.reload();
      }, 1000);
    })
    .catch(error => {
      console.error('Error when sending data:', error);
      setMessage('An error occurred while sending a message');
      setTimeout(() => setMessage(''), 3000); 
    });
  };

  return (
    <form onSubmit={handleSubmit} id='contact-us-form'>
      <input
        type="text"
        className="medove-inputs"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        className="medove-inputs"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="medove-submit-btn anim-button">
        Придбати
      </button>
    </form>
  );
}

export default PurchaseForm;
