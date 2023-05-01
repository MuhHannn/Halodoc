import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function Artikel(props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.tittle}</Card.Title>
        <Button className="my-1" style={{color: "#135773", backgroundColor: "#e9f4f9", padding: "3px 7px", boxShadow: "none"}}>{props.judul}</Button>
        <Card.Text style={{color: "gray"}}>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Artikel;