import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';

const filterByLength = (arr: string[], searchParams: number) : string[] => arr.filter((str: string) => str.length > searchParams);

const filterByString = (arr: string[], stringParams: string, isRegister: boolean) : string[] => isRegister ? 
  arr.filter((str: string) => str.includes(stringParams))
  : arr.filter((str: string) => str.toLowerCase().includes(stringParams.toLowerCase())) ;

enum Click {
  Length,
  String
}

const App: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [searchParam, setSearchParam] = useState<string>('');
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [stringOut, setStringOut] = useState<string[]>([]);
  const [isShowOut, setIsShowOut] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, [])

  const getData = useCallback(async () => {
    try {
      const response = await fetch('https://www.mrsoft.by/data.json');
      const {data} = await response.json();
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, type: Click) => {
    e.preventDefault();

    if (type === Click.Length && Number(searchParam) >= 0) {
      setStringOut(filterByLength(data, Number(searchParam)));
    } else if (type === Click.String && !!searchParam) {
      setStringOut(filterByString(data, searchParam, isRegister));
    }

    setIsShowOut(true);
    setSearchParam(''); 
  }

  return (
    <main>
      <form>
        <input type="text" placeholder="Введите строку..." value={searchParam} onChange={(e) => setSearchParam(e.target.value)} checked={isRegister} />
        <div>
          <input type="checkbox" id="checkbox" onChange={() => setIsRegister(prev => !prev)} />
          <label htmlFor="checkbox">Регистр</label>
        </div>
        <div className="action">
          <button
            onClick={(e) => {
              handleClick(e, Click.Length)
            }}>
            Фильтр по длине
          </button>
          <button 
            onClick={(e) => {
              handleClick(e, Click.String)
            }}>
            Фильтр по подстроке
          </button>
        </div>
      </form>
      <div className="content">
        <h2>Вывод:</h2>
        {
          isShowOut && (stringOut.length > 0 ? 
            (<ul className="content__list">
              {stringOut.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>) : 
            (<h3>
              Ничего не найдено
            </h3>)
          )
        }
      </div>
    </main>
  )
} 

export default App;
