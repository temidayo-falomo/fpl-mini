import Image from "next/image";

interface PlayerProps {
  handleSelectPlayer: (player: any) => void;
  team: string | undefined;
  playerInfo: {
    first_name: string;
    second_name: string;
    code: number;
    team_code: number;
    element_type: number;
  };
  formationIndex: number;
}

export default function Player({
  playerInfo,
  handleSelectPlayer,
  team,
  formationIndex,
}: PlayerProps) {
  return (
    <div
      className="flex flex-col text-center justify-center items-center w-auto font-body cursor-pointer mt-auto"
      onClick={() => handleSelectPlayer({ ...playerInfo, formationIndex })}
    >
      <img
        src={
          `https://resources.premierleague.com/premierleague/photos/players/250x250/p${playerInfo.code}.png` ||
          "https://www.svgrepo.com/show/349247/plain-white-football-shirt.svg"
        }
        alt={""}
        className="mb-1 w-[80px]"
      />
      <h5 className="font-bold truncate w-[80px]">
        {playerInfo.first_name + " " + playerInfo.second_name}
      </h5>
      <span className="text-[12px] font-semibold">{team}</span>
    </div>
  );
}
