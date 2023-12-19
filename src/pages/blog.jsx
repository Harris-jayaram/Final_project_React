import React from 'react';
import './blog.css';

const BlogCard = ({ image, author, date, tags, title, subtitle, content }) => {
  return (
    <div className="blog-card">
      <div className="meta">
        <div
          className="photo"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <ul className="details">
          <li className="author">
            <a href="#">{author}</a>
          </li>
          <li className="date">{date}</li>
          <li className="tags">
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>
                  <a href="#">{tag}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{content}</p>
        <p className="read-more">
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <div>
      <BlogCard
        image="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"
        author="John Doe"
        date="Aug. 24, 2015"
        tags={['Learn', 'Code', 'HTML', 'CSS']}
        title="Learning to Code"
        subtitle="Opening a door to the future"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
      />
      <BlogCard
        image="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg"
        author="Jane Doe"
        date="July. 15, 2015"
        tags={['Learn', 'Code', 'JavaScript']}
        title="Mastering the Language"
        subtitle="Java is not the same as JavaScript"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
      />
    </div>
  );
};

export default BlogList;
