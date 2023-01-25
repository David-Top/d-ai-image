import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './App.css';

function App() {  
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImg = async () => {
    const res = await openai.createImage({
      prompt: "a white siamese cat",
      n:1,
      size: "1024x1024"
    });

    console.log(res.data.data[0].url)
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={generateImg}>Generate an Image</button>
    </div>
  )
}

export default App
