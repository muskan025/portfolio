import React from 'react';
import debug from '../../img/debug.jpg'
import  plan from '../../img/plan.jpg'
import './Blogs.css';
import { FaArrowRight, FaClock, FaShare } from 'react-icons/fa';

const Blogs = () => {
  const blogs = [
    {
      title: "The Art of Planning: When Excitement Meets Reality",
      excerpt: "A journey from excitement-driven coding to understanding the power of proper planning is all it takes to make your code less prone to  bugs and saves a ton of time.",
      date: "Oct 29, 2024",
      readTime: "4 min",
      tags: ["programming", "planning", "lessons"],
      shares: 142,
      image: plan,
      link:"https://dev.to/muskan025/the-power-of-pause-transforming-debug-sessions-into-success-stories-4m51"
    },
    {
      title: "The Power of Pause: Transforming Debug Sessions",
      excerpt: "Sometimes the best debugging tool is a good refreshing break that debugs the code 10X faster. It provides a fresh perspective when looked with fresh eyes. Listen to your mind when it asks for a break.",
      date: "Oct 24, 2024",
      readTime: "3 min",
      tags: ["debugging", "productivity", "learning"],
      shares: 98,
      image: debug,
      link:"https://dev.to/muskan025/the-art-of-planning-when-excitement-meets-reality-3i9o"
    }
  ];

  return (
    <div className="blogContainer" id="blogs">
        <h2 className='heading'>My Blogs</h2>
      <div className="b-showcase__grid">
        {blogs.map((blog, index) => (
          <div key={index} className="b-blog-card">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="b-blog-card__image"
            />
            <div className="b-blog-card__content">
              <div className="b-blog-card__tags">
                {blog.tags.map(tag => (
                  <span key={tag} className="b-blog-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="b-blog-card__title">
                {blog.title}
              </h3>
              <p className="b-blog-card__excerpt">
                {blog.excerpt}
              </p>
              <div className="b-blog-card__footer">
                <div className="b-blog-card__meta">
                  <div className="b-blog-card__meta-item">
                    <FaClock size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                  
                </div>
                <a href={blog.link} target='_blank' className="b-blog-card__read-more">
                  Read more <FaArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;