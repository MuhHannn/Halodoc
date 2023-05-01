import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cacarmbtn = (props) => {
  return (
    <Card style={{ width: '130%', border: "none" }}>
        <Button variant="light" style={{border: "1px solid gray"}}>{props.text}</Button>
    </Card>
  );
}

export default Cacarmbtn;