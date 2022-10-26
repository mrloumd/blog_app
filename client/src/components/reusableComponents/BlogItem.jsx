// import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa'
import { deleteBlog } from '../../features/blogs/blogSlice'
import { StyledContainer, StyledCard } from '../styledComponents/container'
import { DeleteButton } from '../styledComponents/button'
import { ViewBlogString } from '../../utils/ViewBLogString'
import { Link } from 'react-router-dom'
// import { updateBlog } from '../../features/blogs/blogSlice'
import UpdateBlogModal from './UpdateBlogModal'
import BlogTimePosted from '../../utils/BlogTimePosted'

function BlogItem({ blog }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  // // const [updating, setUpdating] = useState(false)
  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(updateBlog({ ...blog, title: title, description: description }))
  //   // setUpdating(false)
  //   setTitle('')
  //   setDescription('')
  // }

  return (
    <StyledContainer>
      {/* <div>{new Date(blog.createdAt).toLocaleString('en-US')}</div>
  <h2>{blog.text}</h2> */}

      {user && user._id !== blog.user ? (
        <>
          {' '}
          <StyledCard>
            <div className="user-blog">
              {' '}
              <h1>{blog.title}</h1>
              <p>
                {ViewBlogString(blog.description, 180)}{' '}
                <Link to="/viewBlog" state={blog}>
                  View Blog
                </Link>
              </p>
              <span className="user-name ">
                By {blog.firstName}:
                <BlogTimePosted timestamp={blog.createdAt} />
              </span>
            </div>
          </StyledCard>
        </>
      ) : (
        <StyledCard>
          <div className="user-blog">
            <section className="blog-btn">
              <UpdateBlogModal key={blog._id} blog={blog} />
              <DeleteButton onClick={() => dispatch(deleteBlog(blog._id))}>
                <FaRegTrashAlt size={20} />
              </DeleteButton>
            </section>

            <section className="blog-content">
              <h1>{blog.title}</h1>
              <p>
                {ViewBlogString(blog.description, 180)}{' '}
                <Link to="/viewBlog" state={blog}>
                  View Blog
                </Link>
              </p>
              <span className="user-name">
                Your blog: <BlogTimePosted timestamp={blog.createdAt} />
              </span>
            </section>
          </div>
        </StyledCard>
      )}
    </StyledContainer>
  )
}

export default BlogItem
