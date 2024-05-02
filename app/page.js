// Import statements...
import Home, { BlogCarousel, Post } from './defs.js'; // Importing the default export and named export

export default function MyComponent() {
  return (
    <><section>
      <div>
        <Home />
        <BlogCarousel />
      </div>
    </section>
      <section>
        <div>
          <Post />
        </div>
      </section></>
  );
}
