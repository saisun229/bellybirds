import { makeStyles } from '@material-ui/core/styles';
export const useButtonStyles = makeStyles({
    secondary: {
      background: 'linear-gradient(45deg, #9ca20e 30%, #dacb1c 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      height: 48,
      padding: '0 30px',
    },
    primary: {
      background: 'linear-gradient(45deg, #101010 30%, #171514 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    }
  });


export const useTextFieldStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));