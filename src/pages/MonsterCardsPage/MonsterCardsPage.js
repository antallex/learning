import NavBar from "../../components/NavBar/NavBar";
import MonsterTesting from "../../components/Testing/MonsterTesting";

function MonsterCardsPage() {
  return (
    <>
	<NavBar />
	<div className="flex justify-center items-center mt-10 mx-10">
		<h3 className='text-on-background-dark text-center text-xl font-bold'>Search bar, api for dictionary, api for images</h3>
	</div>
      <div className="pt-10 md:pt-32">
        <MonsterTesting />
      </div>
    </>
  );
}

export default MonsterCardsPage;
