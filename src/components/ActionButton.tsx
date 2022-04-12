
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
type ActionButtonProps = {
    action: boolean;
    handleClick: () => void;
  }
const ActionButton : React.FC<ActionButtonProps> = ({action,handleClick}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1em' }} >
            <Typography variant='h6'> Log</Typography>
            <Button variant="outlined" onClick={handleClick}>{action ? 'Pause Log' : 'Resume Log'}</Button>
        </div>
    )
}

export default ActionButton;