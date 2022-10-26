import { FaSignInAlt, FaUser, FaSignOutAlt, FaBlog } from 'react-icons/fa'
import { StyledNavbar, StyledNav } from '../styledComponents/navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { logout, reset } from '../../features/auth/authSlice'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    toast.success('Account Logout')
  }
  return (
    <StyledNavbar>
      {' '}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <FaBlog className="react-icons" /> TripJunkie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <StyledNav className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {user ? (
                  <>
                    <li>
                      <Link className="btn" to="/userProfile">
                        <FaUser /> View Blogs
                      </Link>
                    </li>
                    <li>
                      <button className="btn" onClick={onLogout}>
                        <FaSignOutAlt /> Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/login">
                        <FaSignInAlt className="react-icons" /> Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/register">
                        <FaUser className="react-icons" /> Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </StyledNav>
          </div>
        </div>
      </nav>
    </StyledNavbar>
  )
}

export default Navbar
