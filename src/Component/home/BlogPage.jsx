// src/pages/BlogPage.jsx
import { useNavigate } from "react-router";
import blogPosts from "../../data/blogPosts";
import { gsap } from "gsap"; // Import GSAP
import { useEffect } from "react";

const BlogPage = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = (id) => {
    // GSAP animation before navigation
    gsap.to(".blog-card", {
      opacity: 0,
      y: -50, // Slide it up slightly
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        navigate(`/blog/${id}`); // Navigate to SingleBlogPage after animation completes
      },
    });
  };

  useEffect(() => {
    // GSAP animation for blog cards from left to right
    const cards = document.querySelectorAll(".blog-card");

    // Create an intersection observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Trigger the animation when a card is in the viewport
            gsap.fromTo(
              entry.target,
              { x: -100, opacity: 0 }, // Start position (offscreen to the left)
              {
                x: 0, // Final position (normal position)
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: 0.3 * index, // Delay each card by 0.3 seconds
              }
            );
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.1 }
    ); // Trigger when at least 10% of the card is in the viewport

    // Observe each card for scroll-triggered animation
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect(); // Cleanup observer when the component is unmounted
  }, []);

  return (
    <div
      className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6"
      id="blog"
    >
      {blogPosts.map((post, index) => (
        <div
          key={post.id}
          className="blog-card rounded-lg overflow-hidden shadow hover:shadow-lg transition opacity-0"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-500">
              {post.date} / {post.category}
            </p>
            <h2 className="text-xl font-semibold mt-1">{post.title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-3">
              {post.description}
            </p>
          </div>
          <button
            onClick={() => handleReadMoreClick(post.id)}
            className="mt-4 inline-block text-red-600 font-semibold px-4 py-2 rounded-md text-xl text-center"
          >
            Read More →
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
