import React from 'react'
import {Badge} from 'react-bootstrap';

interface ChangeProps {
    value: string
}

export const Change: React.FC<ChangeProps> = ({value}) => {
    return (value.includes("-"))
        ? <Badge pill bg="danger">{value} %</Badge>
        : <Badge pill bg="success">{value} %</Badge>
};