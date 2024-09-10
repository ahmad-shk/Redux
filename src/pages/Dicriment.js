import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/reducer/todoSlice'; // Adjust path if necessary

function Dicriment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const value = useSelector((state) => state?.todo?.value);

  return (
    <>
      <div className="page-container dicriment">
        <button className="button" onClick={() => dispatch(removeTodo())}>-</button>
        <input type="number" value={value} readOnly className="input" />
        <button className="button" onClick={() => navigate("/")}>Previous Page</button>
      </div>
    </>
  );
}

export default Dicriment;
