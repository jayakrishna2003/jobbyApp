import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Find The Job That Fits Your Life</h1>
      <p className="home-description">
        Millions of people are searching for jobs,salary, information,
        company,reviews. Find the job that fit your abilities and potential
      </p>
      <Link to="/jobs">
        <button type="button" className="home-button">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)
export default Home
