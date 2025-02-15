
function App() {

  return ( //default will be fr mobile...sm,md,xl indicates if it goes above it!!
    <> 
    <div className="grid grid-cols-12">
      <div className="col-span-12 bg-red-300  sm:col-span-4 xl:col-span-12">
        child 1
      </div>
      <div className="col-span-12 bg-green-300  sm:col-span-4">
        child 2
      </div>
      <div className="col-span-12 bg-blue-300  sm:col-span-4">
        child 3
      </div>
    </div>
    </>
  )
}

export default App
