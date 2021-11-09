import { Button } from "@mui/material";

const HandleButton = ({text, onClick, className}) => {

    return (
            <Button
                variant="contained"
                onClick={onClick}
                className={className}
            >
                {text}
            </Button>
    );
};

export default HandleButton;
