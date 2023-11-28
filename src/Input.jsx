import {useState} from "react";


export function Input() {
    const [inputValue, setValue] = useState(0)
    return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <div>You entered {inputValue}. Multiplied by 2, that equals {inputValue*2}  
      </div>
    </div>
    );
  }
  
