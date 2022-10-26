import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaRegEdit } from 'react-icons/fa'
import { updateBlog } from '../../features/blogs/blogSlice'
import { UpdateButton, ModalButton } from '../styledComponents/button'
import { StyledModal } from '../styledComponents/modal'
import { ModalForm } from '../styledComponents/form'

function UpdateBlogModal({ blog }) {
  const dispatch = useDispatch()
  // const [updating, setUpdating] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(updateBlog({ ...blog, title: title, description: description }))
    // setUpdating(false)
    setTitle('')
    setDescription('')
  }

  return (
    <>
      {' '}
      <UpdateButton
        className="update-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <FaRegEdit size={20} />
      </UpdateButton>
      <StyledModal
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {blog.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ModalForm>
                <form onSubmit={onSubmit}>
                  <section className="form-container">
                    <div className="form-group">
                      <input
                        className="text-center w-100 p-2"
                        type="text"
                        name="title"
                        id="title"
                        placeholder={blog.title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        className="w-100"
                        rows="4"
                        type="text"
                        name="description"
                        id="description"
                        placeholder={blog.description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </section>

                  <section className="button-container">
                    <div className="modal-footer">
                      <ModalButton
                        className="btn btn-block "
                        data-bs-dismiss="modal"
                      >
                        {' '}
                        UPDATE BLOG
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

export default UpdateBlogModal
