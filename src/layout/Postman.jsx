import PostForm from "../components/PostForm"
import PostResponse from "../components/PostResponse"
import PostTabs from "../components/PostTabs"
import PostmanReq from "../components/PostmanReq"

const Postman = () => {
  return (
   <div className="p-6 h-full w-full">
  <PostmanReq/>
    <PostForm/>
    <PostTabs/>
    <PostResponse/>
   </div>
  )
}

export default Postman
