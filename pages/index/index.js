import Layout from "../components/myLayout";
import React from 'react'

const Homepage = () => (
  <div>
    <h1>Google</h1> 
    <iframe src="https://www.google.com/" width="100%" height="800" />
    
    <h1>chat</h1> 
    <iframe src="https://chat.openai.com/" width="100%" height="800" />
  </div>
)

export default Homepage 