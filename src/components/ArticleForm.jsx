import React, { useState } from 'react';

function ArticleForm() {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articleText, setArticleText] = useState('');
  const [tags, setTags] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Validate article title
    if (!title.trim()) {
      window.alert('Please enter an article title.');
      return;
    }

    // Validate abstract
    if (!abstract.trim()) {
      window.alert('Please enter an article abstract.');
      return;
    }

    // Validate article text
    if (!articleText.trim()) {
      window.alert('Please enter the article text.');
      return;
    }

    // Validate tags
    if (!tags.trim()) {
      window.alert('Please enter at least one tag.');
      return;
    }

    // Display success popup
    window.alert('Your article has been submitted successfully!');

    // Clear the form after successful submission
    setTitle('');
    setAbstract('');
    setArticleText('');
    setTags('');
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="article-title">Article Title</label>
      <input
        id="article-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter article title"
      />

      <label htmlFor="article-abstract">Abstract</label>
      <textarea
        id="article-abstract"
        value={abstract}
        onChange={(event) => setAbstract(event.target.value)}
        placeholder="Write a short abstract"
      />

      <label htmlFor="article-text">Article Text</label>
      <textarea
        id="article-text"
        value={articleText}
        onChange={(event) => setArticleText(event.target.value)}
        placeholder="Write your article"
      />

      <label htmlFor="article-tags">Tags</label>
      <input
        id="article-tags"
        type="text"
        value={tags}
        onChange={(event) => setTags(event.target.value)}
        placeholder="React, JavaScript"
      />

      <button type="submit">Post Article</button>
    </form>
  );
}

export default ArticleForm;