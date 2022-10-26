import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BlogContainer, BLogCard } from '../styledComponents/viewBlog'
import BlogTimePosted from '../../utils/BlogTimePosted'

function ViewBlog() {
  const { user } = useSelector((state) => state.auth)

  // locate state
  const location = useLocation()
  const blog = location.state
  console.log(blog)
  return (
    <BlogContainer className="p-2">
      {' '}
      <BLogCard className="p-5 mt-5">
        <>
          {' '}
          <section className="blog-content">
            {' '}
            <h1>{blog.title}</h1>
            <p className="user-name ">
              <strong> {blog.firstName}:</strong>
              <BlogTimePosted timestamp={blog.createdAt} />
            </p>
            <p>{blog.description}</p>
            <p>add comment</p>
          </section>
        </>
      </BLogCard>
    </BlogContainer>
  )
}

export default ViewBlog
