import React from 'react';

export default function Article(props) {
  return (
    <article>
      <a href={'https://reddit.com' + props.article.permalink} target="_blank">
        <h3>{props.article.title}</h3>
      </a>
    </article>
  );
}
