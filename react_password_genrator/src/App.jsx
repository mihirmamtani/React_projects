import { useCallback, useState, useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [lenght, setlenght] = useState(8)
  const [number, changeNumberState] = useState(false)
  const [character, changeCharacterState] = useState(false)
  const [Password, changepassword] = useState('')

  let passref= useRef(null)

  const regenrate = useCallback(()=>{

    let pass=''
    let str= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(number) str+='1234567890'
    if(character) str+='[@_!#$%^&*()<>?}{~:]'

    for(let i=1;i<lenght;i++){
      let char=Math.floor(Math.random() * str.length+1);
      pass+=str.charAt(char);
    }
    changepassword(pass)

  },[lenght,number,character])

let copypasswordtoclipboard=()=>{
  window.navigator.clipboard.writeText(Password);
  passref.current?.select();
}

  useEffect(()=>{
    regenrate();
  },[lenght,number,character])

  return (
  <div className='flex justify-center p-5'>
    <div className='p-2 border-2 text-white rounded-lg px-5 '>
    <h1 className='text-center m-2 text-xl'>Password genrator</h1> 
    <hr></hr>
    <div className='m-2 text-center'>
      <input className='text-black w-auto p-1 outline-none rounded-lg' 
      type='text'
      value={Password}
      readOnly
      ref={passref}  
      ></input>
      <button
      onClick={copypasswordtoclipboard}
      className='bg-blue-500 p-1 px-2 rounded-lg'
      type="button">Copy</button>
    </div>
    <div className='flex items-center'>
    <div className='px-2'>
      <input type="range" name="" id="" min='8' max='20'
      value={lenght}
      onChange={(e)=>setlenght(e.target.value)}/>
      <label htmlFor="lenght"> lenght :{lenght}</label>
    </div>
    {}
    <div className='px-2'>
      <input type="checkbox" name="" id=""  onChange={()=> changeNumberState((prev) => !prev)}/>
      <label htmlFor="number">Number</label>
    </div>
    {}
    <div className='px-2'>
      <input type="checkbox" name="" id="" onChange={()=>changeCharacterState((prev)=>!prev)} />
      <label htmlFor="character">Character</label>
    </div>
    </div>
    </div>
  </div>
  )
}

export default App
