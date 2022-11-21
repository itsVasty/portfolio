import { Link } from 'react-router-dom'
import './home.scss'
import { useState, useEffect } from 'react'
import Letters from '../letters/letters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const jobArray = [
    'R',
    'E',
    'N',
    'A',
    'I',
    'S',
    'S',
    'A',
    'N',
    'C',
    'E',
    ' ',
    'M',
    'A',
    'N',
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className="first-letter">V</span>
            asty
            <br />
            <br />
            <Letters letterClass={letterClass} strArray={jobArray} idx={15} />
          </h1>
          <h2>Software Developer / Artist / Photographer / Poet / Designer</h2>
          <Link className="flat-button" to="/about">
            GET TO KNOW ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
