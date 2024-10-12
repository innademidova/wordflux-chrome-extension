// src/components/Popup.tsx
import { useState, useEffect, ChangeEvent, FC } from 'react';

const Popup: FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    console.log('Popup component mounted');

    if (typeof chrome !== 'undefined') {
      console.log('chrome is defined');

      if (chrome.storage && chrome.storage.sync) {
        console.log('chrome.storage.sync is available');

        chrome.storage.sync.get(['message'], (result) => {
          console.log('Storage result:', result);
          if (result.message) {
            setMessage(result.message);
          }
        });
      } else {
        console.error('chrome.storage.sync is not available');
      }
    } else {
      console.error('chrome is undefined');
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  const handleSave = (): void => {
    console.log('Saving message:', message);
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({ message }, () => {
        if (chrome.runtime.lastError) {
          console.error('Error saving message:', chrome.runtime.lastError);
        } else {
          console.log('Message saved successfully');
        }
      });
    } else {
      console.error('chrome.storage.sync is not available');
    }
  };

  return (
    <div style={{ padding: '10px', width: '300px' }}>
      <h2>My Extension</h2>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Enter a message"
        style={{ width: '100%', padding: '5px' }}
      />
      <button onClick={handleSave} style={{ marginTop: '10px', padding: '5px 10px' }}>
        Save
      </button>
    </div>
  );
};

export default Popup;
