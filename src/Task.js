import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from './taskSlice';
import './App.css';
import { FaEdit } from "react-icons/fa";
import { MdDataSaverOn } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, text: editedText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? <MdDataSaverOn /> :  <FaEdit />}</button>
      <button onClick={() => dispatch(deleteTask(task.id))}><MdDeleteForever /></button>
    </li>
  );
}

export default Task;