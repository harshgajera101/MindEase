// src/pages/Blog.tsx
export default function Blog() {
  const posts = [
    {
      title: "5 Ways to Reduce Anxiety Naturally",
      excerpt: "Discover simple and effective techniques to calm your mind...",
      date: "Sep 5, 2025"
    },
    {
      title: "Why Talking Helps in Healing",
      excerpt: "Conversations can be powerful in improving mental health...",
      date: "Aug 28, 2025"
    },
    {
      title: "The Importance of Daily Mindfulness",
      excerpt: "Practicing mindfulness can bring clarity and peace...",
      date: "Aug 15, 2025"
    }
  ];

  return (
    <div className="bg-[#f5f0e8] min-h-screen text-gray-800">
      {/* Hero */}
      <section className="px-6 md:px-12 py-16 bg-[#fcf9f4] text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-900">MindEase Blog</h1>
        <p className="text-gray-700 text-base md:text-lg mt-2">
          Insights, tips, and stories for mental well-being
        </p>
      </section>

      {/* Posts */}
      <section className="px-6 md:px-12 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <a href="#" className="text-amber-600 font-medium hover:underline">
              Read more →
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
