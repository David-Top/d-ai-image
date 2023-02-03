
import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './App.css';

function App() {  
  const [prompts, setPrompts] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImg = async () => {
    const res = await openai.createImage({
      prompt: prompts,
      n:1,
      size: "1024x1024"
    });

    console.log(res.data.data[0].url)
  }

  return (
    <div className='app-main'>
      <h2>Generate an Image using Open AI API</h2>
      <input 
        className='app-input' 
        placeholder='Type something to generate an Image...'
        onChange={(e) => setPrompts(e.target.value)}
      />
      <button onClick={generateImg}>Generate an Image</button>
    </div>
  )
}

export default App