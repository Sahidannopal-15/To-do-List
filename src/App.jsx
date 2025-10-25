import { useState } from 'react'


function App() {
  let [kegiatan, setKegiatan] = useState([]);
  let [input, setInput] = useState("");
  let [tema, setTema] = useState("dark");
  let [waktu, setWaktu] = useState("");
  let [tanggal, setTanggal] = useState ("");

  function gantiTema(){
    setTema(tema == "dark" ? "light" : "dark");
  }

  function updateInput(event){
    let value = event.target.value
    setInput(value)
  }
  function isiInput(){
    if(input == ""){
      alert ("Isi kegiatannya dulu, Pak!")
    }else if(waktu == ""){
      alert ("Isi Tanggal dulu, Pak!")
    }else{
      let kegiatanBaru = {
        Nama: input,
        Waktu: waktu
      };
      setKegiatan([...kegiatan,kegiatanBaru]);
      setInput("");
      setWaktu("");
    }
  }
  function hapusKegiatan(index){
    setKegiatan(kegiatan.filter((_,i) => i!==index));
  }
  return (
    <>
    <main className={`${tema == "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen transition-all duration-500`}>
      <button onClick={gantiTema}
              className='rounded-full font-medium transition-all duration-300'>
              Ganti Tema</button>
      <section className='flex flex-col gap-3 p-4 items-center'>
      <header className=''>Daftar Kegiatan : </header>
        <input 
          placeholder='Masukan Kegiatan Kamu....'
          type="text"
          value = {input}
          onChange={updateInput}
          className='px-2 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400'/>
        <input type="date" />
        <input type="time" />
          <button className='mx-1 py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-500 transition-all duration-500'
                    onClick={isiInput}>
              Tambah
          </button>
      <ul className='w-72'>
        {kegiatan.map((item,index) =>(
        <li key={index}
            className='flex justify-between items-center mt-4 p-3 rounded-lg shadow-sm border'
            >{item}<button onClick={() => hapusKegiatan(index)}
            className="text-red-500 hover:text-red-700 font-medium">
            Hapus</button> 
        </li>
          ))}
      </ul>
      </section>
    </main>
    </>
  )
}

export default App
