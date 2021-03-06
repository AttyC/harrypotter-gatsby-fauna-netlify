/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import MainSection from "./../components/site/main-section";
// import { HousesPhoneTemplateAreas, HousesTabletTemplateAreas, HousesDesktopTemplateAreas } from "../window";

const HousesSpellsPhoneTemplateAreas = `
    'header'
    'main'
    'main'
    `;

const HousesSpellsTabletTemplateAreas = `
    'header    header        header   header'
    'main    main        main   main'
    `;

const HousesSpellsDesktopTemplateAreas = `
    'header    header        header   header'
    'main    main        main   main'
    `;

const HomePhoneTemplateAreas = `
    'logo'
    'logo'
    'logo'
    'author'
    'author'
    'author'
    'author'
    `;

const HomeTabletTemplateAreas = `
    'logo       .           .     '
    'logo       author      author'
    'logo       author      author'
    '.          .           .     '
    `;

const HomeDesktopTemplateAreas = `
    'logo       .           .     '
    'logo       author      author'
    'logo       author      author'
    '.          .           .     '
    `;

const GET_CHARACTERS = gql`
  query GetCharacters {
    allCharacters {
      data {
        _id
        name
        house
        patronus
        bloodStatus
        role
        school
        deathEater
        dumbledoresArmy
        orderOfThePheonix
        ministryOfMagic
        alias
        wand
        boggart
        animagus
      }
    }
  }
`;

const Houses = () => {
  const { loading: characterLoading, error: characterError, data: characterData } = useQuery(GET_CHARACTERS);
  const [selectedHouse, setSelectedHouse] = React.useState([]);

  React.useEffect(() => {
    const gryffindor =
      !characterLoading &&
      !characterError &&
      characterData.allCharacters.data.filter(char => char.house === "Gryffindor");
    setSelectedHouse(gryffindor);
  }, [characterLoading, characterData]);

  const getHouse = house => {
    switch (house) {
      case "gryffindor":
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.data.filter(char => char.house === "Gryffindor")
        );
        break;
      case "hufflepuff":
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.data.filter(char => char.house === "Hufflepuff")
        );
        break;
      case "slytherin":
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.data.filter(char => char.house === "Slytherin")
        );
        break;
      case "ravenclaw":
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.data.filter(char => char.house === "Ravenclaw")
        );
        break;
      default:
        setSelectedHouse(
          !characterLoading &&
            !characterError &&
            characterData.allCharacters.data.filter(char => char.house === "Gryffindor")
        );
        break;
    }
  };
  return (
    <div
      sx={{
        gridArea: "main",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, auto))",
        gridAutoRows: "auto",
        gridTemplateAreas: [
          HousesSpellsPhoneTemplateAreas,
          HousesSpellsTabletTemplateAreas,
          HousesSpellsDesktopTemplateAreas
        ],
        width: "100%",
        height: "100%",
        position: "relative"
      }}
    >
      <MainSection house={selectedHouse} getHouse={getHouse} />
    </div>
  );
};
export default Houses;