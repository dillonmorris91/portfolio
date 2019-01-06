import React from 'react'
import injectSheet from 'react-jss'
import about from '../images/about.jpg'

const AboutHero = ({ classes }) => (
  <div className={classes.container}>
    <img
      className={classes.left}
      src={about}
      alt={'Dillon standing beneath tree in Autumn'}
    />
    <div className={classes.right}>
      <h1 className={classes.myHeading}>About</h1>
      <div className={classes.paragraph}>
        I love learning. I strive to improve my craft every day. I see
        challenges as opportunities for growth and embrace them with open arms.
      </div>
      <div className={classes.paragraph}>
        In my current role, I am fortunate enough to be able to apply creative
        and analytical thinking to solve problems in both design and
        engineering.
      </div>
      <div className={classes.paragraph}>
        When I'm not coding & creating for the web I enjoy playing and writing
        music, spending time with my lovely girlfriend and our Golden Doodle
        named Bowie⚡️.
      </div>
      <div className={classes.tagline}>
        Check my skills{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="#4183D7"
          style={{ marginLeft: '9px' }}
        >
          <path d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z" />
        </svg>
      </div>
    </div>
  </div>
)

const styles = {
  container: {
    padding: '50px 0px',
    display: 'flex',
    flexDirection: 'column',

    '@media (min-width: 700px)': {
      flexDirection: 'row',
      padding: '130px 0px',
    },
  },
  myHeading: {
    color: '#414141',
    fontWeight: '500',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '32px',
    letterSpacing: '.3px',

    '@media (min-width: 700px)': {
      fontSize: '40px',
    },
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
  },
  paragraph: {
    color: '#606571',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    paddingBottom: '20px',
    lineHeight: '1.5',
  },
  link: {
    color: '#4183D7',
    textDecoration: 'none',
  },
  left: {
    paddingBottom: '30px',

    '@media (min-width: 700px)': {
      maxWidth: '350px',
      maxHeight: '420px',
      marginRight: '40px',
      paddingBottom: '0px',
    },

    '@media (min-width: 900px)': {
      maxWidth: '450px',
      marginRight: '60px',
    },
  },
  tagline: {
    fontFamily:
      "Plex Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    color: '#4183D7',
    fontSize: '16px',
    fontWeight: '300',
    paddingTop: '20px',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      cursor: 'pointer',
    },
  },
}

export default injectSheet(styles)(AboutHero)
