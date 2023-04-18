import { Button } from 'react-bootstrap'

const BlueButton = ({ children, color, handler }) => {
    return (
        <Button variant={color} onClick={handler}>{children}</Button>
    )
}

export default BlueButton
