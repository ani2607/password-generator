import { useCallback, useEffect, useState,useRef } from "react";

function App() {
  const [length, setLength] = useState(6);

  const [numberToInclude, setNumberToInclude] = useState(false);

  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberToInclude){
      str += "0123456789";
    }

    if(characters){
      str += "!@#$%^&*()~*/|<>?";
    }

    for(let i = 1;i<=length;i++){

      let index = Math.floor(Math.random()*(str.length+1));

      pass += str.charAt(index);
    }

    setPassword(pass);



  },[length,numberToInclude,characters,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberToInclude,characters,passwordGenerator]);

  const copyToClipBoard = ()=>{

    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password);
  }


  return (
    <div className="bg-black w-full  h-screen   ">
      <div className="bg-gray-800 w-60vw gap-3 flex flex-col justify-center items-center ">
        <div className="up  flex flex-row gap-3  ">
          <input
            type="text"
            className="outline-none p-2 rounded bg-indigo-400"
            placeholder="password"
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyToClipBoard} className="w-16 text-white bg-purple-400 rounded-xl">
            Copy
          </button>
        </div>
        <div className="down flex gap-3 justify-center items-center">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />

          <p className="text-orange-600">Length ({length})</p>
          
          

          <div className="numberinput flex gap-1">
            <input
              type="checkbox"
              value={numberToInclude}
              onChange={() => setNumberToInclude((prev)=> !prev)}
              className="cursor-pointer"
            />
            <label className="text-orange-600">Numbers</label>
          </div>
          <div className="numberinput flex gap-1">
            <input type="checkbox"
              className="cursor-pointer"
              value={characters}
              onChange={()=> setCharacters((prev)=> !prev)}
            />
            <label className="text-orange-600">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
