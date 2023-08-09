export const Square = ( {children, isSelected, updateBoard, index} ) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;
  
    const handleCLick = () => {
      updateBoard(index);
    };
    return (
      <div onClick={handleCLick} className={className}>
        {children}
      </div>
    );
  };