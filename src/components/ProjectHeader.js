import React from 'react'
import injectSheet from 'react-jss'

const ProjectHeader = ({ classes }) => (
  <div className={classes.container}>
    <h1 className={classes.myHeading}>Projects</h1>
    <p className={classes.subHeading}>
      A growing collection of personal projects
    </p>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
  },
  icon: {
    fill: '#414141',
    width: '140px',
  },
  myHeading: {
    color: '#414141',
    fontWeight: '600',
    fontFamily:
      "Inter UI -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontSize: '48px',
    letterSpacing: '1px',
    marginTop: '24px',
    marginBottom: '12px',
  },
  subHeading: {
    color: '#606571',
    fontSize: '16px',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: '24px',
    marginBottom: '10px',
    letterSpacing: '.8px',
    maxWidth: '400px',
  },
}

export default injectSheet(styles)(ProjectHeader)
