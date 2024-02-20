'use client';

const error = (error) => {
  return (
    // <div>An error occured...</div>
    <div>{error.error.message}</div>
  )
}

export default error