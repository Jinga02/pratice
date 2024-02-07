import React from 'react';
import Button from '../../atom/button/Button';
import { useDispatch } from 'react-redux';
import { selectStatus } from '../../../redux/slice/TodoSlice';

const TodoStatusItem = ({ status }) => {
  const dispatch = useDispatch();
  const onChangeStatus = () => {
    dispatch(selectStatus(status));
  };
  const tailwind = 'capitalize';
  return (
    <li>
      <Button label={status} onClick={onChangeStatus} tailwind={tailwind} />
    </li>
  );
};

export default TodoStatusItem;
