import React from 'react';
import pdf from './JamshedSadullaev.pdf';

export default function Resume() {
  return (
    <div className='container'>
      <iframe title='resume' src={pdf} />
    </div>
  );
}