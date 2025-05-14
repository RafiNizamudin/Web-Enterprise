import './Button.css';
import { ButtonProps } from './Button.dto';

export default function Button({ flag, handleClick, handleClickTrue }: ButtonProps) {
    return (
        <button className="tombol" onClick={flag === 'Hello' ? handleClickTrue : handleClick}>
            Click
        </button>
    );
}