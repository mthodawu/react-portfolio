// Import statements...
import Home, { BlogCarousel} from './defs.js'; // Importing the default export and named export
import Post from './renderpost.js'; // Importing the default export

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
          <Post id="1"/>
        </div>
      </section></>
  );
}
