import './index.css'

const Header = () => (
  <nav className="nav">
    <div className="nav-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="head-img"
        alt="website logo"
      />

      <ul className="nav-un">
        <li className="list">Home</li>
        <li className="list">Products</li>
        <li className="list">Cart</li>
      </ul>

      <button type="button" className="logout">
        Logout
      </button>

      <button type="button" className="logout1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="logout-img"
          alt="logout icon"
        />
      </button>
    </div>
  </nav>
)

export default Header
