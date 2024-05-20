import React, { useState } from 'react';

function PurchaseForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
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
        phone,
      }).toString(),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      setMessage('Ваше повідомлення відправлено');
      setTimeout(() => {
        setMessage('');
        window.location.reload();
      }, 1000);
    })
    .catch(error => {
      console.error('Ошибка при отправке данных:', error);
      setMessage('Сталася помилка при відправці повідомлення');
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
        type="tel"
        className="medove-inputs"
        placeholder="+38 (0__)___ __ __"
        value={phone}
        onChange={(e) => {
          const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
              setPhone(e.target.value);
            }
          }}
        required
        pattern="[0-9]*"
        />
      <button type="submit" className="medove-submit-btn">
        Придбати
      </button>
    </form>
  );
}

export default PurchaseForm;
