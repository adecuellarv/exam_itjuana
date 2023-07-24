import { useEffect, useState } from 'react';
import '../App.css';

function Problem1() {
    const [listRamdomP1, setRamdomListP1] = useState([1, 3, 4, 5]);
    const [resultP1, setResultP1] = useState([]);

    //create ramdom datas
    const createNewDatas = () => {
        const newArray = [];
        for (let index = 0; index < 7; index++) {
            const number = Math.round(Math.random() * 10);
            if (number !== 0) {
                newArray.push(number);
            }
        }

        setRamdomListP1([...newArray]);
        const resp = calculateResult(newArray);
        setResultP1([...resp]);
    }

    useEffect(() => {
        createNewDatas();
    }, []);

    return (
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
                <button onClick={createNewDatas}>New datas Problem1</button>
            </div>
        </div>
    );
}

//logic of the result
export const calculateResult = (list) => {
    const resultArray = [];
    //1.- validate if have values
    if (list.length) {
        //2.- sort
        const newArray = list.sort((a, b) => a - b);
        //3.- find missings
        for (let index = newArray[0]; index <= newArray[newArray.length - 1]; index++) {
            if (!newArray.find(i => i === index)) {
                resultArray.push(index);
            }
        }

        return resultArray;
    }
}

export default Problem1;
