import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CustomDialog = ({ close, isOpen, title, text }) => (
  <React.Fragment>
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText dangerouslySetInnerHTML={{ __html: text }} />
      </DialogContent>
    </Dialog>
  </React.Fragment>
);

CustomDialog.propTypes = {
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomDialog;
