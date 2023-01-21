import React, { useState } from 'react';
import axios from 'axios';
import SEO from '../../components/SEO';
import seoTools from '../../dbTool/seoTools';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';

const SitemapGenerator = () => {
  const [url, setUrl] = useState('');
  const [sitemap, setSitemap] = useState(null);

  const location = useLocation();
  const path = location.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, seoTools);
  const pageUrl = window.location.href;

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // make a GET request to the specified URL to retrieve the sitemap
    axios
      .get(url)
      .then((response) => {
        setSitemap(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <SEO
        title={title}
        metaDescription={desc}
        ogImageUrl={image}
        ogImageAlt={`${title} image`}
        ogUrl={pageUrl}
      />
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input
            type='text'
            value={url}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Submit</button>
        {sitemap && <pre>{JSON.stringify(sitemap, null, 2)}</pre>}
      </form>
    </>
  );
};

export default SitemapGenerator;
