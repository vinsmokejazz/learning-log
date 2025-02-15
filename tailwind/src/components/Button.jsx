export const Button=({
  disabled,
  children,
  onClick
})=>{
  return <button onClick={onClick} className={`rounded-2xl text-4xl px-10 py-4  text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"}`} >
    {children}
    </button>
}