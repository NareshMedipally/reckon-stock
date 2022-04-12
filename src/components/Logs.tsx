import React,{memo} from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import {Stock,StockInfo} from '../App.types'
type LogProps = {
  logs: Stock[];
}
const Logs : React.FC<LogProps> = memo(({logs}) => {
  return (
    <div>
        {     
        logs.map((stocks:Stock,index) =>
            <div key ={index}> <Typography variant='subtitle1'> updates for {stocks.timestamp}</Typography>
        <ul>
            {stocks.data.map((item:StockInfo,index:number) =>
            <li key ={index}> <Typography variant='subtitle2'> {item.code} :  {item.price}</Typography></li>
            )}
        </ul>
        <Divider variant="fullWidth" component="ul" />
        </div>
        )
        }
    </div>
  );
})

export default Logs;
