import React, {useState} from "react";
import {makeStyles, Typography} from '@material-ui/core';

import Cake from './images/cake2.png';
const useStyles = makeStyles({
   root: {
       height: '100vh',
       backgroundImage: 'radial-gradient(white, cornflowerblue)',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       position: 'relative'
   } ,
    title: {
       fontFamily: 'Dancing Script, cursive',
       color: 'red  ',
        textShadow: '2px 2px #000',
        fontSize: '300px'
    },
    cake: {
        height: '50%',
        width: 'auto',
    },
});

function App() {
    const classes = useStyles();
    const [showCake, setShowCake] = useState(true)

    const onSpaceDown = (event)=> {
        if(event.keyCode === 32) {
            setShowCake(!showCake);
        }
    }

  return (
    <div className={classes.root} onKeyDown={onSpaceDown } tabIndex={0}>
        <Typography variant={'h1'} className={classes.title}>Nailed It!</Typography>
        {showCake? <img src={Cake} className={classes.cake} alt={'cake'}/>: ''}
    </div>
  );
}

export default App;
