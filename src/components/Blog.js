// src/components/Blog.jsx
import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Blogs!</h1>
      </header>
      <main>
        <section className="blog-posts">
          <article className="post">
            <h2>Exploring the Beautiful Beaches of Bali</h2>
            <p>Posted on: July 10, 2024</p>
            <p>Bali is known for its stunning beaches, vibrant culture, and diverse activities for every traveler. In this post, we explore the best beaches...</p>
            <a href="#">Read More</a>
          </article>
          <article className="post">
            <h2>Top 5 Destinations for Adventure Seekers</h2>
            <p>Posted on: July 15, 2024</p>
            <p>For those who love adventure, here are the top 5 destinations that should be on your bucket list...</p>
            <a href="#">Read More</a>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Blog;
