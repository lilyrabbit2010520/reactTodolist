
function TodoItem({content, index, ddelete}) {
     const handleDelete= () => {
        ddelete(index);
     }   

    return(
    <div onClick={handleDelete}>
        {content}
    </div>
    );
}

export default TodoItem;