import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ProgressBar } from 'react-bootstrap';
import { AiFillCaretDown , AiFillCaretUp } from 'react-icons/ai'
const OptionModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img src={props?.data[props?.id - 1]?.img} alt='' style={{ width: "24px", height: "24px", paddingRight: '5px' }} />
          {props?.data[props?.id - 1]?.name}
          {console.log(props?.data[props?.id - 1] , 'testing data' , props?.id)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div style={{display:"flex" , justifyContent: "space-between" , marginBottom: "1rem"}}>
            <div className='modalTitle'>Price
              <div className='modalSubTitle' >
              {props?.data[props?.id - 1]?.price}
              </div>
            </div>
            <div className='modalTitle'>24H
              <div style={{ fontSize:'14px' ,color: `${props?.data[props?.id - 1]?.hours < 0 ? "#EA3943" : "#16C784"}` }}>
                
                {props?.data[props?.id - 1]?.hours < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}{props?.data[props?.id - 1]?.hours}%
              </div>
            </div>
            <div className='modalTitle'>7D
              <div style={{ fontSize:'14px' ,color: `${props?.data[props?.id - 1]?.days < 0 ? "#EA3943" : "#16C784"}` }}>
              {props?.data[props?.id - 1]?.days < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />}{props?.data[props?.id - 1]?.days}%
              </div>
            </div>
          </div>
          <div style={{display:"flex" , flexDirection : "column"}}>
          <div className='modalTitle'>Market Cap
              <div className='modalSubTitle' >
              {props?.data[props?.id - 1]?.marketcap}
              </div>
            </div>
            <div className='modalTitle'>Volume
              <div className='modalSubTitle' >
              {props?.data[props?.id - 1]?.volume}
              </div>
            </div>
            <div className='modalTitle'>Circulating Supply
              <div className='modalSubTitle' >
              {props?.data[props?.id - 1]?.circulatingsupply}
              <ProgressBar now={60} variant = "progress-custom" style={{ width : '60%' , height : "0.5rem" , borderRadius : "1.5rem" , marginTop:'3px'}}/>
              </div>

            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OptionModal

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);