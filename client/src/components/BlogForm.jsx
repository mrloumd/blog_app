import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../features/blogs/blogSlice'

function BlogForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createBlog({ title, description }))
    setTitle('')
  }

  return (
    <section className="form">
      {' '}
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
          <button className="btn btn-block" type="submit">
            {' '}
            Add Blog
          </button>
        </div>
      </form>
    </section>
  )
}

export default BlogForm
