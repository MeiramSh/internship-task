import React from 'react';
import '../styles/PostCard.css';

interface PostCardProps {
  title: string;
  body: string;
  date: string;
  category: string;
  image: string;
  color: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body, date, category, image, color }) => {
  return (
    <div className="post-card">
      <img src={image} alt={title} className="post-card__image" />
      <div className="post-card__content">
        <span className="post-card__category" style={{ backgroundColor: color, color: "white"}} >{category}</span>
        <h2 className="post-card__title">{title}</h2>
        <p className="post-card__date">{date}</p>
      </div>
    </div>
  );
};

export default PostCard;
