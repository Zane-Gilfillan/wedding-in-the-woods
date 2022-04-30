import React from 'react'
import { useState } from 'react';
import "react-quill/dist/quill.snow.css";
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;


const editor = () => {
  
  return (
    <ReactQuill />
  )
}

export default editor