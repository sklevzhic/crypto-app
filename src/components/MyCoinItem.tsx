import React from 'react'
import {Button, Image, ListGroup} from "react-bootstrap";

interface MyCoinItemProps {

}

export const MyCoinItem: React.FC<MyCoinItemProps> = () => {
    return                 <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
    >
        <div>
            <Image width={50} height={50} src="https://via.placeholder.com/150" fluid/>
        </div>
        <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
        </div>
        <Button>X</Button>
    </ListGroup.Item>;
};