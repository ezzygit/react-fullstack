export const fetchBlogs = async (setBlogs) => {
    const response = await fetch('http://localhost:5000/blogs', {
      method: 'GET',
       });
    
      const data = await response.json();
      setBlogs(data);
      console.log(data);
    };

export const fetchUsers = async (setUsers) => {
    const response = await fetch('http://localhost:5000/blogs', {
     method: 'GET',
     });
        
    const data = await response.json();
    setUsers(data);
    console.log(data);
        };