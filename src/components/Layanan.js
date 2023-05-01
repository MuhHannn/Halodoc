import Card from 'react-bootstrap/Card';

const Layanan = (props) => {
    return (
        <Card style={{ width: "100%", boxShadow: "none"}} className="">
                <Card.Img variant="top" src={props.image} style={{width: "80%", margin: "auto"}} />
            <Card.Text style={{textAlign: "center", fontSize: "14px", marginTop: "10px"}}>{props.text}</Card.Text>
        </Card>
    )
}

export default Layanan