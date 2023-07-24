import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [listRamdomP1, setRamdomListP1] = useState([1, 3, 4, 5]);
  const [resultP1, setResultP2] = useState([]);


  const createNewDatas = () => {
    const newArray = [];
    for (let index = 0; index < 7; index++) {
      const number = Math.round(Math.random() * 10);
      
      newArray.push(number);
    }

    setRamdomListP1([...newArray]);
  }

  useEffect(() => {
    createNewDatas();
  },[]);
 
  return (
    <div className="content">
      <div className='col c50'>
        <div className='tests test1'>
          <h3>Promem 1</h3>
          <div className='div-row'>
            <label>Ramdom list:
              <strong>
                [{
                  !!listRamdomP1.length && listRamdomP1.map((item, key) => {
                    return (
                      <i key={key}>
                        {item} {listRamdomP1.length - 1 !== key ? ' ,' : ''}
                      </i>
                    )
                  })
                }]
              </strong>
            </label>
          </div>
          <div className='div-row'>
            <label>Result:
              <strong>
                [{
                  !!resultP1.length && resultP1.map((item, key) => {
                    return (
                      <i key={key}>
                        {item} {resultP1.length - 1 !== key ? ' ,' : ''}
                      </i>
                    )
                  })
                }]
              </strong>
            </label>
          </div>
          <div className='div-row'>
            <button onClick={createNewDatas}>New datas</button>
          </div>
        </div>
      </div>
      <div className='col c50'>

      </div>
    </div>
  );
}

export default App;
