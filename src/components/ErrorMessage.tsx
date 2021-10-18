import React from 'react'
import {Image, Row,Col} from 'react-bootstrap'
import Error from '../assets/img/error-sing-svgrepo-com.svg'
interface ErrorMessageProps {
    title: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({title}) => {
    return <Row style={{display: "flex",  alignItems: "center", border: "1px solid #e5e5e5", borderRadius: "6px"}}>
        <Col style={{textAlign: "right", paddingRight: "30px"}} ><Image width={200} src={Error}/></Col>
        <Col style={{textAlign: "left"}}><h3>
            {title}
        </h3></Col>
    </Row>
};