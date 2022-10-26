import { useDispatch, useSelector } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa'
import { deleteBlog } from '../../features/blogs/blogSlice'
import { DeleteButton } from '../styledComponents/button'
import UpdateBlogModal from '../reusableComponents/UpdateBlogModal'
import BlogTimePosted from '../../utils/BlogTimePosted'

function UserBlogItem({ blog }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="userBlog-card">
      {/* <div>{new Date(blog.createdAt).toLocaleString('en-US')}</div>
  <h2>{blog.text}</h2> */}
      {user && user._id !== blog.user ? (
        <></>
      ) : (
        <div className="blog-card m-4 p-4">
          <div className="blog">
            <div className="blog_header mb-4 d-flex justify-content-end">
              <BlogTimePosted timestamp={blog.createdAt} />
              <UpdateBlogModal key={blog._id} blog={blog} />
              <DeleteButton onClick={() => dispatch(deleteBlog(blog._id))}>
                <FaRegTrashAlt size={20} />
              </DeleteButton>
            </div>

            <h2>{blog.title}</h2>
            <h4>{blog.description}</h4>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserBlogItem
