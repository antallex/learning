import FirstPageCard from "../components/Buttons/BigProjButton/BigProjButton";
import NavBar from "../components/NavBar/NavBar";

function FirstPage() {
  return (
    <div className="h-screen  w-full ">
      <NavBar />
      <div className="h-full w-full flex justify-center items-center text-center">
      <div className="w-10/12 h-2/5 gap-10 grid grid-cols-1 sm:grid-cols-2 text-center">
      
       <FirstPageCard title="Stable Projects" to="/home" />
       <FirstPageCard title="Sandbox" to="/sandbox" />
        
      
       
      </div>
      </div>
    </div>
  );
}

export default FirstPage;
