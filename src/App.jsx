import { useState } from 'react'


function App() {
  let [kegiatan, setKegiatan] = useState([]);
  let [input, setInput] = useState("");
  let [tema, setTema] = useState("dark");
  
  function gantiTema(){
    if(tema == "dark") setTema("light");
    else setTema("dark");
  }

  function updateInput(event){
    let value = event.target.value
    setInput(value)
  }
  function isiInput(){
    if(input == ""){
      alert ("Kosong, Pak!")
    }else{
      setKegiatan([...kegiatan,input]);
      setInput("");
    }
  }
  function hapusKegiatan(index){
    setKegiatan(kegiatan.filter((_,i) => i!==index));
  }
  return (
    <>
    <main className={tema == "dark" ? "bg-black text-white" : "bg-white text-black"}>
      <button onClick={gantiTema}>Ganti Tema</button>
      <header className=''>Daftar Kegiatan : </header>
        //input
      <section>
          <input 
        placeholder='Masukan Kegiatan Kamu :D'
        type="text"
        value = {input}
        onChange={updateInput}
        className=''/>
        <button className='' onClick={isiInput}>
          Tambah
        </button>
      </section>
      <ul>
        {kegiatan.map((item,index) =>(
        <li key={index}>{item}<button onClick={() => hapusKegiatan(index)}>
          Hapus</button> 
        </li>
          ))}
      </ul>
    </main>
    </>
  )
}

export default App
