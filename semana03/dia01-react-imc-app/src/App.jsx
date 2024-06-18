export default function App() {
  return (
    <section className="w-[300px] mx-auto bg-slate-200 p-4">
      <h1 className="text-3xl text-red-600 font-bold text-center">IMC Calculator</h1>

      <div className="pt-4">
        <p>Weight: 0 kg</p>
        <input
          type="range"
          min="50"
          max="200"
        />
      </div>

      <div>
        <p>Height: 0 cm</p>
        <input
          type="range"
          min="50"
          max="200"
        />
      </div>

      <p className="font-bold ">Tu IMC es 0.0</p>

      <p className="font-bold text-2xl">Estado de IMC: ???</p>
    </section>
  )
}
