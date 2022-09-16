// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Text.css';
import img1 from './Pic/IMAGEtextimg1.png';
import img2 from './Pic/IMAGEtextimg2.png';
import img3 from './Pic/IMAGEtextimg3.png';
function Text() {
  return (
    <>
      
      
      <div className="head-1">
        <div className="small-gray-text">
        It's Really Easy
      </div> 
        <h1>Here is how it works</h1>

    </div>
      <div className="card-1">
        
        <Card style={{ width: '18rem' }}
        border={'white'}
        >
           
      <Card.Img variant="top" src={img1} />
      <p className="card-step"> Step 1 </p>
          <Card.Body>
        <Card.Title className ="card-title">Connect with Care Experts</Card.Title>
        <Card.Text>
         Sahre your surgery needs, prefrences, specials requests
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}
        border={'white'}
        >

          
     <Card.Img variant="top" src={img2} />
         <p className="card-step"> Step 2 </p>
          <Card.Body>
            
       <Card.Title className ="card-title">Hospital & Doctor Recommendations</Card.Title>
       <Card.Text>
         Select an experienced surgeon & premium hospital that match your requirement
       </Card.Text>
       {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
   </Card>
        <Card style={{ width: '18rem' }}
        border={'white'}
        
        >
           
      <Card.Img variant="top" src={img3} />
      <p className="card-step"> Step 3 </p>
          <Card.Body>
        <Card.Title className ="card-title">Surgery closure</Card.Title>
        <Card.Text>
          Assisted transport & hospital admission. Cashless & no stress settlement
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
   </>
  );
}

export default Text;