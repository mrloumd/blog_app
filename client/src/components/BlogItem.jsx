import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog, updateBlog } from '../features/blogs/blogSlice'

function BlogItem({ blog }) {
  const dispatch = useDispatch()

  const [updating, setUpdating] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { user } = useSelector((state) => state.auth)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(updateBlog({ ...blog, title: title, description: description }))
    setUpdating(false)
    setTitle('')
    setDescription('')
  }

  return (
    <div className="page">
      <div className="container">
        {/* <div>{new Date(blog.createdAt).toLocaleString('en-US')}</div>
  <h2>{blog.text}</h2> */}
        {user && user._id !== blog.user ? (
          <></>
        ) : (
          <div className="blog_container">
            <div className="blog">
              <h2>{blog.title}</h2>
              <h4>{blog.description}</h4>
              <button
                onClick={() => dispatch(deleteBlog(blog._id))}
                className="close"
              >
                X
              </button>
              {updating ? (
                <section className="form">
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label htmlFor="title"> Blog title</label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="descripton"> Blog description</label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-block">Update Blog</button>
                    </div>
                  </form>
                </section>
              ) : (
                <span onClick={() => setUpdating(!updating)}>
                  <button>update blog</button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogItem
