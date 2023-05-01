import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ArtikelBtn = (props) => {
  return (
    <Card style={{ width: '180%', border: "none" }}>
        <Button variant="light" style={{border: "1px solid gray"}}>{props.text}</Button>
    </Card>
  );
}

export default ArtikelBtn;