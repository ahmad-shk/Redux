import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/reducer/todoSlice'; // Adjust path if necessary

function Incriment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const value = useSelector((state) => state?.todo?.value);

  return (
    <>
      <div className="page-container incriment">
        <button className="button" onClick={() => dispatch(addTodo())}>+</button>
        <input type="number" value={value} readOnly className="input" />
        <button className="button" onClick={() => navigate("/dicriment")}>Next Page</button>
      </div>
    </>
  );
}

export default Incriment;
