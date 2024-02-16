//설치 되어 있는 bootstrap import 하기 (모든 component 가 사용할수 있다.)
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

//함수형 component
function App2() {

    const [show, setShow]=useState(false)
    
    //자식 component 에서 일어나는 이벤트를 처리하는 함수 
    const handleSave = ()=>{
        console.log("저장합니다~~~")
        setShow(false)
    }

    return (
        <div className="container">
            <h1>인덱스 페이지 입니다</h1>
            <Button onClick={()=>{
                setShow(true)
            }}>모달 띄우기</Button>
            <MyModal onSave={handleSave} show={show} onHide={()=>{setShow(false)}}></MyModal>
        </div>
    );
}

function MyModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant='success' onClick={props.onSave}>저장하기</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App2;
