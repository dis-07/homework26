import PropTypes from "prop-types";
import styled from "styled-components";

import {ReactComponent as CloseIcon} from '../assets/icons/close.svg'

const StyledAlert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1300px;
    height: 64px;
    ${props => getStyledAlertColor(props.color)};
`;

const StyledButton = styled.button`
    margin-left: 100px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const getStyledAlertColor = (color) => {
    switch(color) {
        case 'primary':
            return 'background: #605DEC; color: white;';
        case 'error':
            return 'background: #EB5757; color: white;';
        case 'warning':
            return 'background: #FFD12F; color: #1513A0;';
    }
}

const Alert = ({children, color, onClose}) => {

    // const 

    const alertProps = {
        children,
        color,
        onClose,
    }


    return (
        <StyledAlert {...alertProps} color={color}>
            {children}
            <StyledButton onClick={onClose}><CloseIcon/></StyledButton>
        </StyledAlert>
    )
}

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['primary', 'error', 'warning']),
    onClose: PropTypes.func,
}

Alert.defaultProps = {
    color: 'primary',
}

export default Alert;