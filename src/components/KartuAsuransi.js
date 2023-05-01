import Card from 'react-bootstrap/Card';

const KartuAsuransi = (props) => {
  return (
    <Card style={{ width: '33vw', flexDirection: "row", alignItems: "center", border: "1px solid gray", marginBottom: "5%"}}>
      <Card.Img variant="top" src={props.image} style={{width: "50px", height: "50px",marginLeft: "5%"}} />
      <Card.Body>
        <Card.Title style={{fontSize: "20px"}}>Sambungkan Asuransimu</Card.Title>
        <Card.Text style={{fontSize: "14px"}}>
          Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default KartuAsuransi;