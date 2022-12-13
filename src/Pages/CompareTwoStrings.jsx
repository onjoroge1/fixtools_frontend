import React, { useState } from 'react';
import { diff } from 'fast-diff';

// other imports


const CompareTwoStrings = () => {
  const [formdata1, setformdata1] = useState('');
  const [formdata2, setformdata2] = useState('');
  const [diff, setDiff] = useState(null);

  console.log(formdata1)

  const handleChange1 = (event) => {
    setformdata1(event.target.value);
  };

  const handleChange2 = (event) => {
    setformdata2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // compute the diff between the two strings
    const diffArray = diff(formdata1, formdata2);
    setDiff(diffArray);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input 1:
        <input type="text" value={formdata1} onChange={handleChange1} />
      </label>
      <label>
        Input 2:
        <input type="text" value={formdata2} onChange={handleChange2} />
      </label>
      <button type="submit">Submit</button>
      {diff && (
        <pre>
          {JSON.stringify(diff, null, 2)}
        </pre>
      )}
    </form>
  );
};

export default CompareTwoStrings;
