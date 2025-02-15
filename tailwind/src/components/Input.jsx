export const Input=({
  onClick,
  type,
  placeholder
})=>{
  return (
  <span onClick={onClick} >
    <input
     type={type}
      placeholder={placeholder}
    className="bg-blue-500 outline-0 p-5 rounded-4xl m-4 text-3xl  text-white cursor-pointer "
    />
    </span>
  );
  }
