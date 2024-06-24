import { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).length
      const city = location.split((/, | - /))[0]
      return { city, count }; //shorthand of {city: city, count: count}
    });
    return data;
  };

  return (
    //100% causing responsiveness issues, use 99% or less
    <ResponsiveContainer width="99%" height={400} >
      <ScatterChart
        margin={{
          top: 40,
          right: 20,
          bottom: 80,
          left: 20,
        }}
      >
        <CartesianGrid fill="#264bba" fillOpacity={0.5} />
        <XAxis type="category" dataKey="city" name="City" angle={60} interval={0} tick={{ dx: 20, dy: 40, fontSize: 14, stroke: 'white' }} fill="white" />
        <YAxis type="number" dataKey="count" name="Number of events" tick={{ stroke: 'white' }} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="cyan" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default CityEventsChart;