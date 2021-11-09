import {AppBar,Toolbar,Button} from '@mui/material';
import { useHistory } from "react-router-dom";

const TopMenu = () => {
    const history = useHistory();
    const handleOnClickMain = () =>{
        history.push('/')
    }
    const handleOnClickEmployees = () => {
        history.push('/employees')
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar >
                    <Button
                        color="inherit"
                        onClick = {handleOnClickMain}
                    >
                        Главная страница
                    </Button>
                    <Button
                        color="inherit"
                        onClick = {handleOnClickEmployees}
                    >
                        Сотрудники
                    </Button>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default TopMenu;