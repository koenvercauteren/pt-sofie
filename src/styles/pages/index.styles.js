const styles = () => ({
  page: {
    textRendering: 'optimizeLegibility',
    fontSmoothing: 'antialiased',
    position: 'relative',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 600,
        left: 0,
        width: '100%',
        height: 'calc(70% - 600px)',
        webkitTransform: 'skewY(-8deg)',
        transform: 'skewY(-8deg)',
        background: '#fafafa',
        borderTop: '3px solid #48B6BF',
        zIndex: -1,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 'calc(70% - 600px)',
        background: '#fafafa',
        zIndex: -1,
      },
  },
  location: {
    marginTop: '500px',
  },
});

export default styles;
