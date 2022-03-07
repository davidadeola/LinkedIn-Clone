import React, { useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DescriptionIcon from '@material-ui/icons/Description';
import Post from './Post';


function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  /*useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);*/

  const sendPost = (e) => {
    e.preventDefault();
    setPosts();

   /* db.collection("posts").add({
      name: "David Adeola",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });*/
  };


  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={PhotoIcon} title="Photo" color="#76e0ff" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#33b500" />
          <InputOption Icon={DateRangeIcon} title="Event" color="#ff6631" />
          <InputOption
            Icon={DescriptionIcon}
            title="Write Article"
            color="ff4c4c"
          />
        </div>
      </div> 

      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl} }) => (
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
      ))}

      <Post
        name="David Adeola"
        description="This is a test" 
        message="WOW this worked"
      />
    </div>
  );
}

export default Feed;
