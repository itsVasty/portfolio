import './about.scss'
import Letters from '../letters/letters'
import photo from '../../assets/images/photo.jpg'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <Letters
            strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
            idx={15}
          />
        </h1>
        <p>
          My name is Vasty Kilolo Muaku and I am a multi-talented individual. I
          use the hyphenation to describe myself not as a means to oversell
          myself, but rather to simplify my job description. I am a Software
          Developer apart from being an artist; I have abput 10 years worth of
          coding experience to my name and more creativity than I know what to
          do with. Among my creative endeavours is photography (I editted the
          image on the right myself) and poetry. Artistry asside, I am a capable
          individual with an affinity for Mathematics and Sciences.
        </p>
        <br />
        <h2>Why SovTech?</h2>
        <p>
          I am a firm believer in the power of knowledge and strive to learn as
          much as I can from every situation I'm faced with. I believe that
          SovTech is a crutial stepping stone in my personal journey through
          life; one that will help me refine my skills as a developer whilst
          also building my character. Judging from the interview process and the
          little research I've done, SovTech seems like a friendly working
          environment and I believe the best way to learn is through kindness
          rather than strife.
        </p>
      </div>

      <img className="photo" src={photo} />
    </div>
  )
}

export default About
