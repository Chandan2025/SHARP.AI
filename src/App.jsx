import Home from "./components/Home";
const App = ()=>{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-slate-100 via-blue-200 to-indigo-100 py-8 px-4">
     <div className="text-center mb-8">
      <h1 className="text-5xl font-bold text-grey-800 mb-2">SHARP.AI</h1>
      <h3 className="font-bold text-grey-800 mb-2">AI Image Enhancer</h3>
      <p className="text-lg text-grey-500"> upload image</p>
     </div>
     <Home/>
    <div className="text-sm text-gray-500 mt-6">
      <p> Powered By - Chandan Prajapati</p>
    </div>
      
  </div>
  );
};
export default App;