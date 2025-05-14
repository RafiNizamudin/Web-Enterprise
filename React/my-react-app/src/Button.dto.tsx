export type ButtonProps = {
    flag: string;
    handleClick: () => void;
    handleClickTrue: () => void;
  };
  
  export const handleClick = () => {
    alert('Tombol Clicked!');
  };
  
  export const handleClickTrue = () => {
    alert('Tombol Clicked with TRUE Value!');
  };