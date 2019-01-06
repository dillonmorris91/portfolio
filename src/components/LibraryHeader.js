import React from 'react'
import injectSheet from 'react-jss'

const LibraryHeader = ({ classes }) => (
  <div className={classes.container}>
    <svg
      className={classes.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 160"
    >
      <path d="M121.6 60.8c.4 0 .8-.3.8-.8V45.9c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v14.2c.1.4.4.7.8.7zM120.9 69.3c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-4.6c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v4.6zM1.3 73.6c-.4 0-.8.3-.8.8v14.2c0 .4.3.8.8.8s.7-.4.7-.8V74.4c0-.4-.3-.8-.7-.8zM1.3 92.5c-.4 0-.8.3-.8.8v4.6c0 .4.3.8.8.8s.7-.5.7-.9v-4.6c0-.4-.3-.7-.7-.7zM102.2 8.5c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.7-1.7c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.8 1.7zM107.6 13.9c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.7-1.7c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.8 1.7zM101 14.1c.2 0 .4-.1.5-.2l1.7-1.7c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-1.7 1.7c-.3.3-.3.8 0 1.1.3.1.5.2.6.2zM106.4 8.7c.2 0 .4-.1.5-.2l1.7-1.7c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-1.7 1.7c-.3.3-.3.8 0 1.1.3.1.4.2.6.2zM12.1 12c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.7-1.7c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.8 1.7zM17.5 17.4c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.7-1.7c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.8 1.7zM11 17.6c.2 0 .4-.1.5-.2l1.7-1.7c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-1.7 1.7c-.3.3-.3.8 0 1.1.2.1.4.2.6.2zM16.4 12.2c.2 0 .4-.1.5-.2l1.7-1.7c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-1.7 1.7c-.3.3-.3.8 0 1.1.2.1.4.2.6.2zM16.1 112.6c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.7 1.7c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.6-1.7zM21.5 118c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.7 1.7c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.1l-1.6-1.7zM16.7 118l-1.7 1.7c-.3.3-.3.8 0 1.1.1.1.3.2.5.2s.4-.1.5-.2l1.7-1.7c.3-.3.3-.8 0-1.1-.2-.3-.7-.3-1 0zM22.1 112.6l-1.7 1.7c-.3.3-.3.8 0 1.1.1.1.3.2.5.2s.4-.1.5-.2l1.7-1.7c.3-.3.3-.8 0-1.1-.2-.3-.7-.3-1 0zM55 14.4c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5c-.1 2.4 1.9 4.5 4.5 4.5zm0-7.6c1.7 0 3 1.4 3 3s-1.4 3-3 3c-1.7 0-3-1.4-3-3s1.3-3 3-3zM55.6 112.5c-2.1 0-3.9 1.7-3.9 3.9 0 2.1 1.7 3.9 3.9 3.9 2.1 0 3.9-1.7 3.9-3.9s-1.7-3.9-3.9-3.9zm0 6.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.4-1.1 2.4-2.4 2.4zM118.6 93.8c-3.3 0-5.9 2.7-5.9 5.9 0 3.3 2.7 5.9 5.9 5.9 3.3 0 5.9-2.7 5.9-5.9 0-3.3-2.7-5.9-5.9-5.9zm0 10.3c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4zM11.6 31.3c0 .4.3.8.8.8h15.3c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H12.3c-.4 0-.7.3-.7.8zM8 31.3c0-.4-.3-.8-.8-.8h-5c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h5c.5-.1.8-.4.8-.8zM2.3 26.8H13c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H2.3c-.4 0-.8.3-.8.8.1.4.4.8.8.8zM16.9 26c0 .4.3.8.8.8h3.5c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8h-3.5c-.5 0-.8.4-.8.8zM98.9 116.7c0-.4-.3-.8-.8-.8H82.8c-.4 0-.8.3-.8.8s.3.8.8.8h15.3c.5 0 .8-.4.8-.8zM108.1 115.9h-5c-.4 0-.8.3-.8.8s.3.8.8.8h5c.4 0 .8-.3.8-.8s-.3-.8-.8-.8zM108.1 121.2H97.4c-.4 0-.8.3-.8.8s.3.8.8.8h10.7c.4 0 .8-.3.8-.8s-.3-.8-.8-.8zM92.8 121.2h-3.5c-.4 0-.8.3-.8.8s.3.8.8.8h3.5c.4 0 .8-.3.8-.8s-.3-.8-.8-.8zM38.7 31.1c-.4 0-.8.3-.8.8v4.2c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-4.2c-.1-.5-.4-.8-.8-.8z" />
      <path d="M121.6 18.3H77.2h-.1c-1.4 0-2.6.4-3.6 1.2-.3-.6-.8-1-1.4-1.2-.7-.2-1.4-.2-2 .1l-19.3 9.2c-1.3.6-1.8 2.1-1.2 3.4L58 48.7c-.5 0-2.4-.1-3.7-1.7-.5-.7-1.2-1.4-1.8-2.2-.9-1-1.8-2.1-2.4-3-.9-1.2-2.3-2-3.8-2h-2V26.6v-.2-.5l-4.8-10.8c-.2-.5-1.1-.5-1.4 0l-5 10.9c-.1.2-.1.3 0 .5V39.9H9.6c-2.6 0-4.7 2.1-4.7 4.7v59.7c0 2.2 1.8 4 4 4h87c2.2 0 4-1.8 4-4V82.1h15.2c1.2 0 2.2-1 2.2-2.2v-53h9c.4 0 .7-.3.7-.7.1-.1.1-.1.1-.2.2-.6.3-1.2.3-1.8.1-3.3-2.5-5.9-5.8-5.9zm4.4 5.9c0 .4-.1.8-.2 1.2H83.5c0-.2.1-.5.1-.7 0-2-.9-3.7-2.3-4.9h40.4c2.3 0 4.3 2 4.3 4.4zm-74.6 4.7l19.3-9.2c.3-.1.6-.1.8 0 .3.1.5.3.6.5l.1.3c-1 1.1-1.5 2.6-1.5 4.1V26c-.1 0-.2 0-.3.1l-12 5.8c-.4.2-.5.6-.4 1 .1.3.4.4.7.4.1 0 .2 0 .3-.1l11.6-5.6v6.7l-9.1 4.3c-.4.2-.5.6-.4 1 .1.3.4.4.7.4.1 0 .2 0 .3-.1l8.4-4v6.6l-5.9 2.8c-.4.2-.5.6-.4 1 .1.3.4.4.7.4.1 0 .2 0 .3-.1l5.2-2.5v4.4H59.6l-8.7-18.3c-.2-.4 0-1 .5-1.3zM38.7 17.3l3.8 8.5h-7.6l3.8-8.5zm-4.1 10.1h8.1v12.5h-8.1V27.4zm63.8 76.9c0 1.4-1.1 2.5-2.5 2.5h-87c-1.4 0-2.5-1.1-2.5-2.5V44.6c0-1.8 1.5-3.2 3.2-3.2h36.6c1 0 2 .5 2.6 1.3.6.9 1.5 1.9 2.4 3 .6.7 1.2 1.5 1.8 2.1 2 2.5 5 2.3 5.1 2.3h37.8c1.4 0 2.5 1.1 2.5 2.5v51.7zm17.4-24.5c0 .4-.3.7-.7.7H99.9V52.6c0-2.2-1.8-4-4-4H72.3V24.7c0-2.7 2.2-4.9 4.9-4.9s4.9 2.2 4.9 4.9c0 .4-.1.9-.2 1.3s.2.8.6.9h33.4v52.9z" />
      <path d="M79.5 32c0 .4.3.8.8.8h27c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8h-27c-.5.1-.8.4-.8.8zM107.3 37.1h-27c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h27c.4 0 .8-.3.8-.8-.1-.5-.4-.8-.8-.8zM107.3 42.9h-27c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h27c.4 0 .8-.3.8-.8-.1-.5-.4-.8-.8-.8zM89.1 80.6H37c-.4 0-.8.3-.8.8s.3.8.8.8h52.1c.4 0 .8-.3.8-.8s-.3-.8-.8-.8zM89.1 55.5H61.6c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h27.5c.4 0 .8-.3.8-.8s-.3-.8-.8-.8zM89.1 89.3H37c-.4 0-.8.3-.8.8s.3.8.8.8h52.1c.4 0 .8-.3.8-.8s-.3-.8-.8-.8zM89.1 97.9H37c-.4 0-.8.3-.8.8s.3.8.8.8h52.1c.4 0 .8-.3.8-.8s-.3-.8-.8-.8zM29.8 45.3H12.4c-1.2 0-2.1 1-2.1 2.1v10.2c0 .4.3.8.8.8.4 0 .8-.3.8-.8V47.4c0-.3.3-.6.6-.6h17.4c.4 0 .8-.3.8-.8-.1-.4-.5-.7-.9-.7z" />
    </svg>
    <h1 className={classes.myHeading}>library</h1>
    <p className={classes.subHeading}>
      An updated list of books, articles & resources I enjoy and hope you might
      as well
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
    fontWeight: '500',
    fontFamily: 'Plex mono',
    fontSize: '24px',
    letterSpacing: '2.6px',
    marginTop: '-28px',
  },
  subHeading: {
    color: '#606571',
    fontSize: '15px',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: '24px',
    marginBottom: '10px',
    letterSpacing: '1px',
    maxWidth: '400px',
  },
}

export default injectSheet(styles)(LibraryHeader)
