import "./Blog.css";

function Blog() {
  return (
    <div className="blog-page">

      <h1>Latest Blogs</h1>
      <p>Learn latest web development trends</p>

      <div className="blog-grid">

        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVybiUyMHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" />
          <h3>Modern Web Development</h3>
          <p>Learn MERN stack and build full apps easily.</p>
        </div>

        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop&q=60" />
          <h3>UI/UX Trends 2026</h3>
          <p>Make your websites more attractive and modern.</p>
        </div>

      </div>

    </div>
  );
}

export default Blog;