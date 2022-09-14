import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BLogForm from '../components/BlogForm'
import BLogItem from '../components/BlogItem'
import Spinner from '../components/Spinner'
import { getBlogs } from '../features/blogs/blogSlice'
import { reset } from '../features/auth/authSlice'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blogs,
  )

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
    <>
      <section className="heading">
        <h1>
          Welcome {user && user.firstName} &nbsp;
          {user && user.lastName}
        </h1>
        <p>Blogs Dashboard</p>
      </section>

      <BLogForm />

      <section>
        {blogs.length > 0 ? (
          <div>
            {blogs.map((blog) => (
              <BLogItem key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <h3>You have not set any blogs</h3>
        )}
      </section>
    </>
  )
}

export default Home
