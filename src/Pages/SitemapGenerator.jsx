import React, { useState } from 'react';
import axios from 'axios';

const SitemapGenerator = () => {
  const [url, setUrl] = useState('');
  const [sitemap, setSitemap] = useState(null);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // make a GET request to the specified URL to retrieve the sitemap
    axios.get(url)
      .then((response) => {
        setSitemap(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL:
        <input type="text" value={url} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      {sitemap && (
        <pre>
          {JSON.stringify(sitemap, null, 2)}
        </pre>
      )}
    </form>
  );
};

export default SitemapGenerator;
