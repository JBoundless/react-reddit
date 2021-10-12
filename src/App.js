import React, { useState, useEffect } from 'react';
import './style.css';
import Article from './components/Article';

/* Reddit API: https://www.reddit.com/r/webdev.json */

export default function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');

  useEffect(() => {
    fetch('https://www.reddit.com/r/' + subreddit + '.json').then((res) => {
      if (res.status != 200) {
        console.log('ERROR');
        return;
      }

      res.json().then((data) => {
        if (data != null) {
          setArticles(data.data.children);
        }
      });
    });
  }, [subreddit]);
  return (
    <div className="App">
      <header>
        <input
          type="text"
          className="input"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        ></input>
      </header>
      <div className="articles">
        {articles != null
          ? articles.map((article, index) => (
              <Article key={index} article={article.data} />
            ))
          : ''}
      </div>
    </div>
  );
}
