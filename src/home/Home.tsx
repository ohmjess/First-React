import { useState, useEffect } from 'react'
import '../App.css'


interface initData {
  id: number;
  description: string;
  title: string;
}

export default function App() {
  const [data, setData] = useState<initData[]>([]);
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      if (resp.status != 200) {
        console.log('error');
      };
      const json = await resp.json();
      setData(json);
    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getData();
    console.log(data);

  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((result, i) => (
            <tr>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.description}</td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  )
}