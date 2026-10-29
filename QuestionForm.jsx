import React, { useState } from 'react';

function QuestionForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        // Validate the question title
        if (!title.trim()) {
            window.alert('Please enter a question title.');
            return;
        }

        // Validate the description
        if (!description.trim()) {
            window.alert('Please enter a question description.');
            return;
        }

        // Validate the tags
        if (!tags.trim()) {
            window.alert('Please enter at least one tag.');
            return;
        }

        // Show the success popup
        window.alert('Your question has been submitted successfully!');

        // Clear the form after successful submission
        setTitle('');
        setDescription('');
        setTags('');
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="question-title">Question Title</label>

            <input
                id="question-title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter your question title"
            />

            <label htmlFor="question-description">Description</label>

            <textarea
                id="question-description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Describe your question"
            />

            <label htmlFor="question-tags">Tags</label>

            <input
                id="question-tags"
                type="text"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                placeholder="React, JavaScript"
            />

            <button type="submit">Post Question</button>
        </form>
    );
}

export default QuestionForm;