import styled from "styled-components";

const StyledButtonDefault = styled.button`   
    width: 68px;
    height: 40px;
    ${props => getSize(props.size)};
    border-radius: 4px;
    border: 1px solid transparent;

    cursor: pointer;
    `;

    const StyledPrimaryButton = styled(StyledButtonDefault)`
    color: white;
    background: #605DEC;

    :hover {
        background: #1513A0;
    };

    :disabled {
        background: rgba(203, 212, 230, 0.3);
        border-color: #7C8DB0;
        border-radius: 4px;
        color: #7C8DB0;
        };
    `;

    const StyledSecondaryButton = styled(StyledButtonDefault)`
        color: #605DEC;
        background-color: white;
        border-color: #605DEC;

        :hover {
            background: #E9E8FC;
        }

        :disabled {
            color: #7C8DB0;
            border-color: #7C8DB0;
        }
    `;

    const getSize = (size) => {
        switch(size){
            case 'small':
                return 'width: 68px; height: 40px;';
            case 'medium':
                return 'width: 76px; height: 48px;';
            case 'large':
                return 'width: 81px; height: 48px;';
            
        }
    }

const Button = ({children, size, color, disabled, onOpen}) => {

    const buttonProps = {
        children,
        size,
        color,
        disabled,
        onOpen,
    }

    if(color === 'primary') {
        return <StyledPrimaryButton {...buttonProps} size={size} onClick={onOpen}/>
    } else if (color === 'secondary') {
        return <StyledSecondaryButton {...buttonProps} size={size} onClick={onOpen}/>
    }

    return (
        <StyledButtonDefault {...buttonProps} size={size} onClick={onOpen}/>
    )
}

export default Button;