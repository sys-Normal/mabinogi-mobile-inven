interface IngameData {
  job: string;
  level: number;
  name: string;
  last_login: string;
  representative: boolean;
  silver_coin: number;
  demon_tribute: number;
}

interface CustomAdditionalData {
  //
}
interface CharacterData extends IngameData, CustomAdditionalData {
  //
}

const initailData: CharacterData = {
  job: "",
  level: 0,
  name: "",
  last_login: "",
  representative: false,
  silver_coin: 0,
  demon_tribute: 0,
};

const CharacterCard = (data: CharacterData = initailData) => {
  return (
    //
    <div>{data.name}</div>
  );
};

export default function CharacterSelector(data: unknown) {
  return (
    <div>
      {
        // <CharacterCard />
      }
    </div>
  );
}
