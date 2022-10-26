import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import BLogForm from '../components/BlogForm'
import AddBlogModal from '../components/reusableComponents/AddBlogModal'
import BLogItem from '../components/reusableComponents/BlogItem'
import Spinner from '../components/reusableComponents/Spinner'
import { getBlogs } from '../features/blogs/blogSlice'
import { reset } from '../features/auth/authSlice'
import { StyledPage } from '../components/styledComponents/dashboardPage'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blogs,
  )

  const orderedBlogs = blogs
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getBlogs())

    return () => {
      dispatch(reset())
    }
  }, [user, isError, message, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <StyledPage className="mt-5">
      <section className="blogs-container addBlog m-auto">
        {' '}
        <AddBlogModal />
      </section>

      <section className="blogs-container">
        {blogs.length > 0 ? (
          <div className="blogs-card">
            {orderedBlogs.map((blog) => (
              <BLogItem key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <h3>Share your ideas and questions.</h3>
        )}
      </section>
    </StyledPage>
  )
}

export default Dashboard
