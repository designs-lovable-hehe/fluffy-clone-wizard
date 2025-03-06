import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReactBlogCard from '../../components/ReactBlogCard';
import ReactPostSearch from '../../components/ReactPostSearch';

const BlogPage: React.FC = () => {
  const posts = [
    {
      id: '1',
      title: 'Post 1',
      date: 'Jan 1, 2023',
      heroImage: '/path/to/image1.jpg',
    },
    {
      id: '2',
      title: 'Post 2',
      date: 'Feb 1, 2023',
      heroImage: '/path/to/image2.jpg',
    },
    // Add more posts as needed
  ];

  const searchablePosts = posts.map(post => ({
    id: post.id,
    title: post.title,
    date: post.date,
    url: `/blog/${post.id}/`
  }));

  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <section className="blog-header mb-8">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-lg mb-4">Read our latest articles and updates</p>
          <ReactPostSearch posts={searchablePosts} />
        </section>
        <section>
          {posts.length > 0 && (
            <div className="featured-post mb-8">
              <ReactBlogCard 
                title={posts[0].title}
                date={posts[0].date}
                image={posts[0].heroImage}
                url={`/blog/${posts[0].id}/`}
              />
            </div>
          )}
          <div className="posts-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1).map((post) => (
              <ReactBlogCard 
                key={post.id}
                title={post.title}
                date={post.date}
                image={post.heroImage}
                url={`/blog/${post.id}/`}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage; 