import React from "react";
import './postBoard.css';

const postBoard = () => {
    const allPosts = [
      {
        profileImage:
          'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
        name: 'Jane Doe',
        content: '<p>Hello everyone!</p><p>How are you all doing?</p><p>-Jane</>',
        date: new Date('01 Jan 2020 01:12:00 GMT')
      },
      {
        profileImage:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'John Doe',
        content:
          '<p> Im hungry </p>',
        date: new Date('19 May 2022 ')
      }
    ]
  
    const [posts, setPosts] = useState(allPosts)
  
    const submitPost = (text) => {
      const curDate = new Date()
  
      setPosts([
        ...posts,
        {
          profileImage:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          name: 'Jane Doe',
          content: text,
          date: curDate
        }
      ])
    }
  
    return (
      <div className='postBoard'>
        <DiscussionBoard posts={posts} onSubmit={submitPost} />
      </div>
    )
  }
  // try catch or if statement check whatever you get from login call/login succeed.
  // routers
  
  export default postBoard