// src/pages/SingleBlogPage.jsx
import { useNavigate, useParams } from "react-router";
import blogPosts from "../../data/blogPosts";
import { gsap } from "gsap"; // Import GSAP

const SingleBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((post) => post.id === id);

  if (!post)
    return (
      <div className="text-center py-20 text-red-500">Blog post not found.</div>
    );

  const handleBackButtonClick = () => {
    // GSAP animation before navigation
    gsap.to(".single-blog-content", {
      opacity: 0,
      x: -50, // Slide it up slightly
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        navigate("/"); // Navigate to Home after animation completes
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 mt-20 single-blog-content">
      <button onClick={handleBackButtonClick} className="mb-4 text-red-500">
        ← Back to Home
      </button>
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-lg mb-6"
      />
      <p className="text-sm text-gray-500">
        {post.date} / {post.category}
      </p>
      <h1 className="text-3xl font-bold mt-2 mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg">{post.description}</p>
    </div>
  );
};

export default SingleBlogPage;
