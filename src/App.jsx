import "./App.css";

import React, { Fragment, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import CopyToClipboard from "react-copy-to-clipboard";

export default function App() {
  const getShortenedUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      const data = await response.json();
      setShortenedUrl(data.result.full_short_link)
      setUrl("");
      toast.success("URL Shortened Successfully!")
    } catch (error) {
      toast.error(error.message);
    }
  }
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  return <Fragment>
    <div className="container">
      <div className="header">
        <h1>Link Shortener App</h1>
        <p>Enter a URL to get a shortened version of it</p>
      </div>
      <div className="main">
        <form onSubmit={getShortenedUrl}>
          <input type="text" placeholder="Enter a URL" value={url || ''} onChange={(e) => setUrl(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {shortenedUrl && <div className="shortened">
            <div className="shortened__link">{shortenedUrl}</div> <CopyToClipboard text={shortenedUrl}>
            <button onClick={() => toast.success("URL Copied Successfully!")}>copy</button>
          </CopyToClipboard>
          </div>}
      </div>
    </div>
    <Toaster/>
  </Fragment>;
}
