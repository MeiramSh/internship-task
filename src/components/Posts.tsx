import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import PostCard from './PostCard';
import Pagination from './Pagination';
import '../styles/Posts.css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  date: string;
  category: string;
  image: string;
}

const categoryColors = new Map<string, string>([
  ['Ақпарат', '#FF5733'],
  ['Әдебиет', '#33FF57'],
  ['Ғылым', '#3357FF'],
  ['Спорт', '#FF33A1'],
  ['Тарих', '#FF33F6'],
  ['Өнер', '#33FFF2'],
  ['Эксклюзив', '#FF8C33'],
  ['Карьера', '#8C33FF']
]);


const fetchPosts = async (): Promise<Post[]> => {
  const postsResponse = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  const imagesResponse = await axios.get('https://api.unsplash.com/photos/random?count=15&client_id=qZdr8-so1iZV3kiZhXhXMw4nsrDqiT0cOGCDPYc3gSo');
  const images = imagesResponse.data;

  // Define the array of categories
  const categories = ['Ақпарат', 'Әдебиет', 'Ғылым', 'Спорт', 'Тарих', 'Өнер', 'Эксклюзив', 'Карьера'];




  const randomCategories = postsResponse.data.map(() => {
    return categories[Math.floor(Math.random() * categories.length)];
  });



  return postsResponse.data.map((post, index) => ({
    ...post,
    date: '12 қараша 2019',
    category: randomCategories[index],
    image: images[index % images.length].urls.regular,
  }));
};

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const postsPerPage = 10;

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * postsPerPage;
  const currentPosts = posts.slice(offset, offset + postsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="posts-container">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {currentPosts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            date={post.date}
            category={post.category}
            image={post.image}
            color={categoryColors.get(post.category)??""}
          />
        ))}
      </Masonry>
      <Pagination
        pageCount={Math.ceil(posts.length / postsPerPage)}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default Posts;
