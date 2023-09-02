

export default function Player() {
  return (
    <div className="flex flex-col text-center justify-center items-center w-[50px] font-body cursor-pointer">
      <img
        src="https://www.svgrepo.com/show/349247/plain-white-football-shirt.svg"
        alt="jersey"
      />
      <h5 className="font-bold">UNKNOWN</h5>
      <span className="text-[12px] font-semibold">TOT</span>
    </div>
  );
}
