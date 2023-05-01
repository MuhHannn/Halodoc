import Card from 'react-bootstrap/Card';

const Penawaran = (props) => {
    return (
        <Card style={{border:"none", width: "100%"}}>
            <Card.Img variant="top" src={props.image}/>
        </Card>

    )
}

export default Penawaran