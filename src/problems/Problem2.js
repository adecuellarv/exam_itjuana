import { useEffect, useState } from 'react';
import '../App.css';

function Problem2() {
    const [listRamdomP1, setRamdomListP1] = useState([1, 3, 4, 5]);
    const [number, setNumber] = useState();
    const [resultP1, setResultP1] = useState([]);

    //create datas
    const createNewDatas = () => {
        const newArray = [];
        for (let index = 1; index < 10; index++) {
            newArray.push(index);
        }
        setRamdomListP1([...newArray]);

        const target = getTarget();
        setNumber(target)
        calculateResult(newArray, target);
    }

    //radom target
    const getTarget = () => {
        return Math.round(Math.random() * 10);
    }

    //logic of the result
    const calculateResult = (list, target) => {
        const resultArray = [];
        // 1. create combinations
        list.flatMap(
            (v, i) => list.slice(i + 1).map(w => {
                //2. sum of combinations and ckeck if it is equals to the target
                if(v + w == target){
                    resultArray.push([list.indexOf(v), list.indexOf(w)]);
                }  
            })
        );

        setResultP1([...resultArray]);
    }

    useEffect(() => {
        createNewDatas();
    }, []);

    return (
        <div className='tests test1'>
            <h3>Promem 2</h3>
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
                <label>Target: <strong>{number}</strong></label>
            </div>
            <div className='div-row'>
                <label>Result:
                    <strong>
                        [{
                            !!resultP1.length && resultP1.map((item, key) => {
                                return (
                                    <i key={key}>
                                        {`[${item[0]}, ${item[1]}]`}
                                        {resultP1.length - 1 !== key ? ' ,' : ''}
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
    );
}

export default Problem2;
