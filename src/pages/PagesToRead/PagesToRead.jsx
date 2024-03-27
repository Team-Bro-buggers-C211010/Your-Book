import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer } from 'recharts';
import { getStoredReadBooks } from '../../ulity/localstorage.js';

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 6},${y + height} ${x + width / 2},${y + height / 6}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 6} ${x + (5 * width) / 6},${y + height} ${x + width}, ${y + height}
      Z`;
  };
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);
  const allData = useLoaderData();
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#82ca9d', '#ffc658', '#8884d8', '#FF6666'];

  useEffect(() => {
    const readDataArray = getStoredReadBooks();
    if (allData.length > 0) {
      const readBookList = [];
      for (const id of readDataArray) {
        const read = allData.find((read) => read.bookId === id);
        if (read) {
          readBookList.push(read);
        }
      }
      setReadBooks(readBookList);
    }
  }, [allData]);

  return (
    <div>
      <ResponsiveContainer width="100%" height={800}>
        <BarChart data={readBooks}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis dataKey="totalPages" />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {readBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
