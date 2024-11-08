import { useState, useEffect } from 'react'
import '../App.css'

export default function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      if (resp.status != 200) {
        console.log('error');
      };
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData((err as Error).message);
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
          {Object.keys(data).map((key: any, i) => (
            <tr key={i} >
              <td>{key}</td>
              <td>{data[key].title}</td>
              <td>{data[key].description}</td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  )
}