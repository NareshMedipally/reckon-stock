import React, { useEffect, useState, useRef } from 'react';
import Logs from './components/Logs';
import Summary from './components/Summary';
import './App.css';
import ActionButton from './components/ActionButton';
import _ from 'lodash';
import { Stock, StockHistory, StockInfo } from './App.types';
import moment from 'moment';
const App: React.FC = () => {
  const [results, setResults] = useState<Stock[]>([]);
  const currentStateRef = useRef<boolean>(true);
  const [currentState, setCurrentState] = useState<boolean>(currentStateRef.current);
  const summaryRef = useRef<StockHistory[]>([]);
  const [summary, setSummary] = useState(summaryRef.current);

  useEffect(() => {
    getStocks();
    const intervalCall = setInterval(() => {
      getStocks();
    }, 2000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);


/**
 * Function to get the stock prices
 */
  const getStocks = async () => {
    fetch('https://join.reckon.com/stock-pricing')
      .then(async (response: any) => {
        if (response.ok) {
          let res = await response.json()
          getSummaryData(res)
          if (currentStateRef.current) {
            setResults(state => [{
              timestamp: moment().format('YYYY-MM-DD h:mm:ss'),
              data: res
            }, ...state]);
          }
        } else {
          //setError(await response.text());
        }
      })
      .catch((err) => {
        console.log("Error while fetching data");
      });
  }

  /**
   * Function to manipulate data for summary component
   * @param arr 
   */
  const getSummaryData = (arr: StockInfo[]) => {
    if (summaryRef.current.length == 0) {
      let result = _(arr)
        .groupBy(x => x.code)
        .map((value, key) => ({ code: key, rate: [value[0].price] }))
        .value();
      summaryRef.current = result
    } else {
      let historicalData = summaryRef.current
      for (let index in arr) {
        historicalData.filter(x => {
          if (x.code == arr[index].code) {
            x.rate = [...x.rate, arr[index].price]
          }
        })
      }
      summaryRef.current = historicalData;
    }
    setSummary([...summaryRef.current])
  }

  /**
   * Function to toggle the action button - Pause Log / Resume Log
   */
  const toggleMode = () => {
    currentStateRef.current = !currentStateRef.current
    setCurrentState(currentStateRef.current)
  }
  return (
    <div className="App">
      <div  className='Logs-wrapper'>
        <ActionButton action={currentState} handleClick={toggleMode} />
        <div className='Logs'>
          <Logs logs={results} />
        </div>
      </div>
      <Summary summary={summary} />
    </div>

  );
}

export default App;
