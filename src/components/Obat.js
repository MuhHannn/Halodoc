import Card from 'react-bootstrap/Card';

const Obat = (props) => {
  return (
    <Card style={{ width: '100%', flexDirection: "row", alignItems: "center", textAlign: "center", marginBottom: "5%", padding: "4%", textAlignLast: "center"}}>
        <Card.Img variant="top" src={props.image} style={{width: "12%", marginRight: "2%"}} />
        <Card.Title style={{fontSize: "14px"}}>{props.tittle}</Card.Title>
    </Card>
  );
}

export default Obat;