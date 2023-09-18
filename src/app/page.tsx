"use client";
import { ALLPLAYERS } from "@/COSTANTS";
import Player from "@/components/player/Player";
import UserPlayer from "@/components/userPlayer/UserPlayer";
import React, { useEffect, useState } from "react";

interface PremierLeagueData {
  events: any;
  //team names
  teams: {
    code: number;
    draw: number;
    form: string;
    id: number;
    loss: number;
    name: string;
    played: number;
    points: number;
    position: number;
    pulse_id: number;
    short_name: string;
    strength: number;
    team_division: null;
    unavailable: boolean;
    win: number;
    strength_overall_home: number;
    strength_overall_away: number;
    strength_attack_home: number;
    strength_attack_away: number;
    strength_defence_home: number;
    strength_defence_away: number;
    team_division_position: null;
  }[];

  //players
  elements: {
    first_name: string;
    second_name: string;
    code: number;
    team_code: number;
    element_type: number;
    formationIndex: number;
  }[];

  //player categories
  element_types: {
    id: number;
    plural_name: string;
    plural_name_short: string;
    singular_name: string;
    singular_name_short: string;
    squad_select: number;
    squad_min_play: number;
    squad_max_play: number;
    ui_shirt_specific: boolean;
    sub_positions_locked: [number];
    element_count: number;
  }[];
}

export default function Home() {
  const [premierLeagueData, setPremierLeagueData] = useState<PremierLeagueData>(
    {} as PremierLeagueData
  );
  const [positionSelected, setPositionSelected] = useState<number>(100);
  const [userPlayers, setUserPlayers] = useState<
    {
      first_name: string;
      second_name: string;
      code: number;
      team_code: number;
      element_type: number;
      formationIndex: number;
    }[]
  >([]);
  const [pickPlayerModal, setPickPlayerModal] = useState<boolean>(false);
  const [formationIndex, setFormationIndex] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const getPremierLeagueData = async () => {
    await fetch("https://fantasy.premierleague.com/api/bootstrap-static/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPremierLeagueData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSelectPosition = (position: number, formationPos: number) => {
    setPositionSelected(position);
    setFormationIndex(formationPos);
    setPickPlayerModal(true);
  };

  const handleSelectPlayer = (player: any) => {
    if (
      userPlayers.findIndex(
        (p) => p.formationIndex === player.formationIndex
      ) !== -1
    ) {
      setUserPlayers([
        ...userPlayers.filter(
          (p) => p.formationIndex !== player.formationIndex
        ),
        player,
      ]);
    } else {
      setUserPlayers([...userPlayers, player]);
    }

    setPickPlayerModal(false);
  };

  useEffect(() => {
    getPremierLeagueData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#fff] justify-center">
      <div className=" min-w-[900px] max-w-screen-md grid place-content-center py-12 relative bg-white h-full min-h-screen">
        <div className="h-[500px] bg-yellow-300 w-full absolute z-0"></div>

        <div className="flex flex-col mb-8">
          {/* <h1 className="text-4xl font-bold text-center mb-4 relative z-10">
            Welcome to{" "}
            <span className="text-blue-600 hover:underline">Fantasy Mini</span>
          </h1>

          <h3 className="text-2xl font-mono text-[#4a4a4a] text-center relative z-10">
            Gameweek 4 (200mins left)
          </h3> */}
        </div>

        <div className="w-[500px] z-10 bg-white border-[0.5px] border-[#E1E1E1] rounded-md overflow-hidden relative shadow-sm m-auto flex flex-col justify-between">
          <div className="flex flex-row-reverse justify-between gap-6 w-[80%] mx-auto mt-4 relative z-10 p-6 pb-0">
            {[...Array(3)].map((_, i) => {
              const player = userPlayers.find(
                (player) => player.formationIndex === i + 8
              );
              return (
                <UserPlayer
                  key={i}
                  name={player?.first_name || ""}
                  team={
                    premierLeagueData.teams?.find(
                      (team) => team.code === player?.team_code
                    )?.name || ""
                  }
                  image={
                    player?.code
                      ? `https://resources.premierleague.com/premierleague/photos/players/250x250/p${player?.code}.png`
                      : "https://www.svgrepo.com/show/349247/plain-white-football-shirt.svg"
                  }
                  handleSelectPosition={handleSelectPosition}
                  element_type={4}
                  formationIndex={player?.formationIndex || i + 8}
                />
              );
            })}
          </div>

          <div className="flex flex-row-reverse justify-between gap-6 w-[85%] mx-auto mt-4 relative z-10 p-6 pb-0">
            {[...Array(3)].map((_, i) => {
              const player = userPlayers.find(
                (player) => player.formationIndex === i + 5
              );
              return (
                <UserPlayer
                  key={i}
                  name={player?.first_name || ""}
                  team={
                    premierLeagueData.teams?.find(
                      (team) => team.code === player?.team_code
                    )?.name || ""
                  }
                  image={
                    player?.code
                      ? `https://resources.premierleague.com/premierleague/photos/players/250x250/p${player?.code}.png`
                      : "https://www.svgrepo.com/show/349247/plain-white-football-shirt.svg"
                  }
                  handleSelectPosition={handleSelectPosition}
                  element_type={3}
                  formationIndex={player?.formationIndex || i + 5}
                />
              );
            })}
          </div>

          <div className="flex flex-row-reverse justify-between gap-6 w-[95%] mx-auto mt-4 relative z-10 p-6 pb-0">
            {[...Array(4)].map((_, i) => {
              const player = userPlayers.find(
                (player) => player.formationIndex === i + 1
              );
              return (
                <UserPlayer
                  key={i}
                  name={player?.first_name || ""}
                  team={
                    premierLeagueData.teams?.find(
                      (team) => team.code === player?.team_code
                    )?.name || ""
                  }
                  image={
                    player?.code
                      ? `https://resources.premierleague.com/premierleague/photos/players/250x250/p${player?.code}.png`
                      : "https://www.svgrepo.com/show/349247/plain-white-football-shirt.svg"
                  }
                  handleSelectPosition={handleSelectPosition}
                  element_type={2}
                  formationIndex={player?.formationIndex || i + 1}
                />
              );
            })}
          </div>

          <div className="flex justify-center gap-6 w-[100%] mx-auto mt-4 relative z-10 p-6 pb-0">
            {userPlayers.filter((player) => {
              return player.formationIndex === 0;
            }).length > 0 ? (
              <>
                {userPlayers
                  .filter((player) => {
                    return player.formationIndex === 0;
                  })
                  .map((player, index) => {
                    return (
                      <UserPlayer
                        key={index}
                        name={player.first_name}
                        team={
                          premierLeagueData.teams.find(
                            (team) => team.code === player.team_code
                          )?.name
                        }
                        image={
                          `https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.code}.png` ||
                          "https://www.svgrepo.com/show/349247/plain-white-football-shirt.svg"
                        }
                        handleSelectPosition={handleSelectPosition}
                        element_type={1}
                        formationIndex={0}
                      />
                    );
                  })}
              </>
            ) : (
              <UserPlayer
                name=""
                team=""
                image="https://www.svgrepo.com/show/349247/plain-white-football-shirt.svg"
                handleSelectPosition={handleSelectPosition}
                element_type={1}
                formationIndex={0}
              />
            )}
          </div>

          <div className="py-6 px-4 w-full bg-yellow-300 mt-4 mx-auto z-10 relative">
            <div className="flex justify-between gap-6 m-auto relative z-10 w-[90%]">
              {[...Array(4)].map((_, i) => {
                const player = userPlayers.find(
                  (player) => player.formationIndex === i + 11
                );
                return (
                  <UserPlayer
                    key={i}
                    name={player?.first_name || ""}
                    team={
                      premierLeagueData.teams?.find(
                        (team) => team.code === player?.team_code
                      )?.name || ""
                    }
                    image={
                      player?.code
                        ? `https://resources.premierleague.com/premierleague/photos/players/250x250/p${player?.code}.png`
                        : "https://www.svgrepo.com/show/349247/plain-white-football-shirt.svg"
                    }
                    handleSelectPosition={handleSelectPosition}
                    element_type={i + 1}
                    formationIndex={player?.formationIndex || i + 11}
                  />
                );
              })}
            </div>
          </div>

          <>
            <div
              className="h-[220px] w-[220px] border-[0.5px] border-[#E1E1E1] absolute rounded-full z-[8]"
              style={{
                top: "15%",
                left: "50%",
                transform: "translate(-50%, 0)",
              }}
            ></div>

            <div className="bg-[#E1E1E1] h-full w-[0.1px] absolute bottom-0 left-[25%] z-0"></div>

            <div className="bg-[#E1E1E1] h-full w-[0.1px] absolute bottom-0 left-[50%] z-0"></div>

            <div className="bg-[#E1E1E1] h-full w-[0.1px] absolute bottom-0 left-[75%] z-0"></div>

            <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[15%] left-0 z-0"></div>

            <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[30%] left-0 z-0"></div>

            <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[45%] left-0 z-0"></div>

            <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[60%] left-0 z-0"></div>

            <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[75%] left-0 z-0"></div>

            <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[90%] left-0 z-0"></div>
          </>

          <div
            className={`w-full absolute bottom-0 bg-white z-40 overflow-auto ingredients flex flex-col items-center gap-4 ${
              pickPlayerModal ? "h-full pb-12" : "h-0"
            }
            transition-all duration-500 ease-in-out 
            `}
          >
            <h3 className="text-center px-6 pt-6 text-xl font-bold text-black w-full">
              Pick a (winger)
            </h3>

            <input
              type="search"
              className="
               w-11/12 mx-auto border-[0.5px] border-[#E1E1E1] rounded-md p-4
            "
              placeholder="Search for a player"
              onChange={(e) => setSearchText(e.target.value)}
            />

            {loading ? (
              <div className="text-sm text-center m-auto">Loading...</div>
            ) : (
              <div className="flex flex-wrap gap-8 px-12 justify-between items-start w-full">
                {premierLeagueData.elements
                  ?.filter((playr) => playr.element_type === positionSelected)
                  .filter((data) => {
                    return (
                      data.first_name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                      data.second_name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                      premierLeagueData.teams
                        .find((team) => team.code === data.team_code)
                        ?.name.toLowerCase()
                        .includes(searchText.toLowerCase())
                    );
                  })
                  .map((playr, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Player
                          handleSelectPlayer={handleSelectPlayer}
                          team={
                            premierLeagueData.teams.find(
                              (team) => team.code === playr.team_code
                            )?.name
                          }
                          playerInfo={playr}
                          formationIndex={formationIndex}
                        />
                      </React.Fragment>
                    );
                  })}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          {/* <h3 className="text-3xl font-bold text-center text-blue-600 font-sans">
            0 Points
          </h3> */}
        </div>
      </div>
    </main>
  );
}
