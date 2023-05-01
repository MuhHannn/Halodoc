import Card from 'react-bootstrap/Card';

const Kartu = (props) => {
    return (
        <Card style={{ width: "15vw", border: "1px solid gray"}} className="p-2">
            <Card.Img variant="top" src={props.image} style={{width: "100px", margin: "auto"}} />
            <Card.Title style={{textAlign: "center", fontSize: "16px", marginTop: "10px"}}>{props.text}</Card.Title>
        </Card>

    )
}

export default Kartu;