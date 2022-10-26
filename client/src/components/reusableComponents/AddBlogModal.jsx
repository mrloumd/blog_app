import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaUserCircle } from 'react-icons/fa'
import { createBlog } from '../../features/blogs/blogSlice'
import { ModalForm } from '../styledComponents/form'
import { ModalButton } from '../styledComponents/button'
import { StyledModal } from '../styledComponents/modal'

function BlogFormModal() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createBlog({ title, description }))
    setTitle('')
    setDescription('')
  }
  return (
    <>
      <div className="addBlog-container d-flex rounded p-3 w-100">
        <span className="mt-1">
          <FaUserCircle className="me-2" size={25} />
        </span>

        <button
          type="button "
          className="btn rounded-pill addBlog-btn "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          What's on your mind,
          {/* {user.firstName}? */}
        </button>
      </div>

      <StyledModal
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Post a new Blog
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {' '}
              <ModalForm>
                <form onSubmit={onSubmit}>
                  <section className="form-container">
                    {' '}
                    <div className="form-group">
                      <input
                        className="w-100 p-2 text-center"
                        placeholder="Blog Title"
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Tell us about your blog . . . "
                        rows="4"
                        type="text"
                        name="description"
                        id="description exampleFormControlTextarea1"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </section>

                  <section className="button-container">
                    <div className="modal-footer">
                      <ModalButton
                        className="btn btn-block text-center"
                        type="submit"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        {' '}
                        ADD BLOG
                      </ModalButton>
                    </div>
                  </section>
                </form>
              </ModalForm>
            </div>
          </div>
        </div>
      </StyledModal>
    </>
  )
}

export default BlogFormModal
