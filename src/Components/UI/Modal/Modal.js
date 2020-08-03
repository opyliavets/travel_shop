import React from 'react';
import ReactModal from 'react-modal';
import classes from './Modal.module.scss'
import Button from '../../Poster/Button/Button'
import response from '../../ModalContent/ModalContent'


class PopUp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
    
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
        <div>
            <Button
                onClick={this.handleOpenModal}
                type={this.props.type}
                btnName={this.props.btnName}
            />
            <ReactModal 
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}
                className={classes.Modal}
                overlayClassName={classes.Overlay}
                style={{
                    content: {
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '5px',
                      outline: 'none',
                      padding: '20px'
                    }
                  }}
            >
                <div>                  
                  {response(this.props.state.name)}
                </div>
                <i className="fa fa-times positioning" aria-hidden="true"></i>
            </ReactModal>
      </div>
    );
  }
}



export default PopUp

