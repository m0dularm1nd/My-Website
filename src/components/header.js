import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrolltop = window.pageYOffset

    if (scrolltop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={require("../images/logo-small.gif")}
              width="30"
              alt="test"
            />
          </Link>
          <Link to="#cards">Contents</Link>
          <Link to="#info">About</Link>
          <Link to="#contact">Contact</Link>
          <Link to="#">
            <button>Store</button>
          </Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
