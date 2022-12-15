import {useState, useEffect} from 'react';


function Home() {
  const {posts, setPosts} = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setPosts(data.slice(0, 10));
    });
  }, []);
  
  return (
    <table className ="table">
      <tbody>
        <tr>
          {posts.map(post => {
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          })}
        </tr>
      </tbody>
    </table>
  );
}
  
  export default Home;