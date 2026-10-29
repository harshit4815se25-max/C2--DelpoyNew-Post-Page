import React, { useState } from 'react';
import QuestionForm from '../components/QuestionForm';
import ArticleForm from '../components/ArticleForm';

function NewPost() {
  const [postType, setPostType] = useState('question');

  return (
    <main className="new-post">
      <h1>Create a New Post</h1>
      <p>Share your questions and articles with the community.</p>

      <div className="post-options">
        <button
          type="button"
          onClick={() => setPostType('question')}
          aria-pressed={postType === 'question'}
        >
          Question
        </button>

        <button
          type="button"
          onClick={() => setPostType('article')}
          aria-pressed={postType === 'article'}
        >
          Article
        </button>
      </div>

      {postType === 'question' ? (
        <QuestionForm />
      ) : (
        <ArticleForm />
      )}
    </main>
  );
}

export default NewPost;