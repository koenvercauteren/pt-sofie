import backgroundImage from '../../assets/img/background-image-landing-page.jpg';

const styles = theme => ({
  titleContainer: {
    height: 390,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '150px',
  },
  button: {
    height: 55,
    fontSize: '16px',
    padding: '0 50px',
  },
  title: {
    color: '#fff',
    textShadow: '1px 1px #525f7f',
    fontWeight: 300,
    fontSize: '40px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
    zIndex: 1,
  },
  parallaxContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -5,
  },
  parallax: {
    backgroundImage: `url('${backgroundImage}')`,
    minHeight: '100%',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default styles;
