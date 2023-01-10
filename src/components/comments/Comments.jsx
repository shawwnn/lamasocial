import { useContext, useState } from "react";
import "./comments.scss"
import { AuthContext } from "../../context/authContext"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment"

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("")

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(['comments'], () => 
    makeRequest.get("/comments?postId="+postId).then((res) => {
      return res.data;
    })
  )

  // const comments = [
  //   {
  //     id: 1,
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
  //     name: "John Doe",
  //     userId: 1,
  //     profilePicture:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
  //     name: "Jane Doe",
  //     userId: 2,
  //     profilePicture:
  //       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   },
  // ];

  const queryClient = new useQueryClient()

  // Queries
  // const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  const addComment = (newComment) => {
    return makeRequest.post("/comments", newComment)
  }

  // Mutations
  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ['todos'] })
      queryClient.invalidateQueries(["comments"])
    },
  })

  const handleAddComment = async (e) => {
    e.preventDefault()

    mutation.mutate({ desc, postId })

    setDesc("")
  }

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" 
          value={desc}
          onChange={(e) => setDesc(e.target.value)} 
        />
        <button type="button" onClick={handleAddComment}>Send</button>
      </div>
      {isLoading 
        ? "loading" 
        : data.map(comment => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <div className="date">{moment(comment.createAt).fromNow()}</div>
        </div>
      ))}
    </div>
  )
}

export default Comments