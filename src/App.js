import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [username, setUsername] = useState('');
  const handleChange = e => setUsername(e.target.value);
  const navigate = useNavigate();
  
  return (
    <main>
        <form
          onSubmit={e => {
            e.preventDefault();
            navigate('/user', {
              state: {
                id: username,
              }
            })
          }}>
          <label htmlFor="username">Type your username</label>
          <input name="username" type="text" onChange={handleChange} />
        </form>
    </main>
  );
}