import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { p } from 'framer-motion/client';
import { Sun, Moon } from "lucide-react";


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
    setInput(value);
  }
  function isiInput(){
    if(input == ""){
      alert ("Isi kegiatannya dulu, Pak!")
    }else if(tanggal == ""){
      alert ("Isi Tanggal dulu, Pak!")
    }else if(waktu == ""){
      alert ("Isi Jam dulu, Pak!")
    }else{
      let kegiatanBaru = {
        input, waktu, tanggal
      };
      setKegiatan([...kegiatan,kegiatanBaru]);
      setInput("");
      setWaktu("");
      setTanggal("");
    }
  }
  function hapusKegiatan(index){
    setKegiatan(kegiatan.filter((_,i) => i!==index));
  }
  return (
    <>
    <main className={`${tema == "dark" ? "bg-gray-900 text-white" : "bg-orange-100 text-gray-900"} min-h-screen transition-all duration-500`}>
      <button onClick={gantiTema}
              className='ml-8 mt-8 rounded-full font-medium transition-all duration-300'>
            {tema === "dark" ? (
              <Sun className='text-yellow-500' />
            ) : (
              <Moon className='text-blue-500' />
            )}
      </button>
      <section className='flex flex-col p-4 items-center gap-5'>
      <header className='font-bold text-xl md:text-2xl tracking-wide'>Daftar Kegiatan</header>
      <AnimatePresence>
        <motion.input 
          placeholder=' Ketik Sesuatu, Pak....'
          type="text"
          value = {input}
          onChange={updateInput}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className={`${tema == "dark" ? "hover:bg-gray-800" :  "hover:bg-gray-300"} px-2 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-500 sm:hover:scale-125`}
          />
      </AnimatePresence>
        <input type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className={`${tema == "dark" ? "bg-gray-300 hover:bg-gray-400 text-black" : "text-gray-200 bg-red-600 hover:bg-red-400"} p-2 rounded-lg transition-all duration-500 hover:scale-115`}
                />
        <input type="time"
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
                className={`${tema == "dark" ? "bg-gray-300 hover:bg-gray-400 text-black" : "text-gray-200 bg-red-600 hover:bg-red-400"} p-1 rounded-lg transition-all duration-500 hover:scale-115`}
                />
          <button className={`${tema == "dark" ? "bg-purple-800 hover:bg-purple-400 text-gray-200" : "text-gray-200 bg-purple-800 hover:bg-purple-400"} p-2 rounded-lg mx-1 py-2 px-4 transition-all duration-500 hover:scale-115`}
                    onClick={isiInput}>
              Tambah
          </button>
    {kegiatan.length === 0 ? (
     <motion.p 
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
     className='font-bold md:text-2xl text-sm'> 
     BELOM ADA KEGIATANN NIH😤💢, YOKK PRODUKTIF‼️
     </motion.p>
    ): (
    <AnimatePresence>
      <ul className='w-80'>
        {kegiatan.map((item,index) =>(
        <motion.li key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className='font-mono flex justify-between items-center mt-4 p-3 rounded-lg shadow-sm border'
        >{item.input} - {item.waktu} - {item.tanggal}
        <button onClick={() => hapusKegiatan(index)}
                className="text-red-500 hover:text-red-700 font-medium">
        Hapus</button> 
        </motion.li>
          ))}
      </ul>
    </AnimatePresence>
    )}
      </section>
    </main>
    </>
  )
}

export default App
