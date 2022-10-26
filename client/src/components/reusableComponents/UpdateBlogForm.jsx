import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateBlog } from '../../features/blogs/blogSlice'
import { FaRegEdit } from 'react-icons/fa'

function UpdateBlogForm({ blog }) {
  const dispatch = useDispatch()

  const [updating, setUpdating] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(updateBlog({ ...blog, title: title, description: description }))
    setUpdating(false)
    setTitle('')
    setDescription('')
  }
  return (
    <>
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

              <button className="close">x</button>
            </div>
          </form>
        </section>
      ) : (
        <span onClick={() => setUpdating(!updating)}>
          <FaRegEdit className="m-2" size={30} />
        </span>
      )}
    </>
  )
}

export default UpdateBlogForm
