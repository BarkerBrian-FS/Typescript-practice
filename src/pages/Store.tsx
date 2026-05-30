import storeItems from "../data/items.json"
import { Row, Col } from "react-bootstrap"
const Store = () => {
  return (
    <>
        <div>Store</div>
        <Row>
            {storeItems.map (item => (
                <Col>{JSON.stringify(item)}</Col>
            ))}
        </Row>
    </>
  )
}

export default Store