type TodoItemProps = {
  id: number;
  description: string;
  onRemove: (id: number) => void;
  buttonText?: string; 
};

const TodoItem = ({ id, description, onRemove, buttonText = 'Done' }: TodoItemProps) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
     <br></br>  <span>{description} </span> 
      <div>
        <button onClick={() => onRemove(id)} style={{ backgroundColor: 'green', color: 'white', borderRadius: '4px' }}>
          {buttonText}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;