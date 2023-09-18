interface UserPlayerProps {
  name: string;
  team: string | undefined;
  image: string;
  handleSelectPosition: (position: number, formationPos: number) => void;
  element_type: number;
  formationIndex: number;
}

export default function UserPlayer({
  name,
  team,
  image,
  handleSelectPosition,
  element_type,
  formationIndex,
}: UserPlayerProps) {
  return (
    <div
      className="flex flex-col text-center justify-center items-center w-[70px] font-body cursor-pointer "
      onClick={() => handleSelectPosition(element_type, formationIndex)}
    >
      <img src={image} alt="jersey" className="mb-1 w-full" />
      <h5 className="font-bold truncate w-full">{name}</h5>
      <span className="text-[12px] font-semibold">{team}</span>
    </div>
  );
}
