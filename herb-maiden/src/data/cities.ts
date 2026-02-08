export type CityBase = {
  id: string,
  region_id: string,
  name: string,
  chi_name: string,
  defense: number,
  major: boolean,
  x: number,
  y: number,
  path: string,
  water: string,
}
export type CITY_BASE = {
  id: string,
  region_id: string,
  name: string,
  chi_name: string,
  defense: string,
  major: string,
  x: string,
  y: string,
  path: string,
  water: string,
}

function convertCityFromRaw(city: CITY_BASE): CityBase {
  return {
    id: city.id,
    region_id: city.region_id,
    name: city.name,
    chi_name: city.chi_name,
    defense: parseInt(city.defense, 10),
    major: city.major === 'Y',
    x: parseInt(city.x, 10),
    y: parseInt(city.y, 10),
    path: city.path,
    water: city.water,
  };
}

export const CITIES: CITY_BASE[] =
[
  {
    "id": "001",
    "region_id": "001",
    "name": "Fagara",
    "chi_name": "法加拉",
    "defense": "5",
    "major": "Y",
    "x": "305",
    "y": "1030",
    "path": "002",
    "water": "O"
  },
  {
    "id": "002",
    "region_id": "001",
    "name": "Rampe",
    "chi_name": "蘭佩",
    "defense": "4",
    "major": "N",
    "x": "685",
    "y": "934",
    "path": "003,019",
    "water": " "
  },
  {
    "id": "003",
    "region_id": "002",
    "name": "Galingale",
    "chi_name": "莎草",
    "defense": "4",
    "major": "Y",
    "x": "1312",
    "y": "670",
    "path": "002,004",
    "water": " "
  },
  {
    "id": "004",
    "region_id": "002",
    "name": "Fingerroot",
    "chi_name": "芬格魯特",
    "defense": "2",
    "major": "N",
    "x": "1805",
    "y": "559",
    "path": "006,008",
    "water": " "
  },
  {
    "id": "005",
    "region_id": "003",
    "name": "Asafoetida",
    "chi_name": "阿薩菲蒂達",
    "defense": "4",
    "major": "Y",
    "x": "3344",
    "y": "430",
    "path": "004,008",
    "water": " "
  },
  {
    "id": "006",
    "region_id": "003",
    "name": "Xylopia",
    "chi_name": "賽洛皮亞",
    "defense": "3",
    "major": "N",
    "x": "2515",
    "y": "555",
    "path": "004,005,008",
    "water": " "
  },
  {
    "id": "007",
    "region_id": "004",
    "name": "Nutmeg",
    "chi_name": "納特梅格",
    "defense": "5",
    "major": "Y",
    "x": "3228",
    "y": "1170",
    "path": "006,009",
    "water": " "
  },
  {
    "id": "008",
    "region_id": "004",
    "name": "Ginger",
    "chi_name": "金傑",
    "defense": "4",
    "major": "N",
    "x": "2563",
    "y": "1074",
    "path": "004,006,007",
    "water": " "
  },
  {
    "id": "009",
    "region_id": "005",
    "name": "Muntries",
    "chi_name": "蒙特里斯",
    "defense": "5",
    "major": "Y",
    "x": "3875",
    "y": "718",
    "path": "007,010,013,014",
    "water": " "
  },
  {
    "id": "010",
    "region_id": "005",
    "name": "Uzazi",
    "chi_name": "烏扎茲",
    "defense": "5",
    "major": "N",
    "x": "3569",
    "y": "478",
    "path": "005,009",
    "water": " "
  },
  {
    "id": "011",
    "region_id": "006",
    "name": "Wasabi",
    "chi_name": "瓦薩比",
    "defense": "3",
    "major": "Y",
    "x": "4578",
    "y": "334",
    "path": "014",
    "water": "O"
  },
  {
    "id": "012",
    "region_id": "007",
    "name": "Njangsa",
    "chi_name": "恩揚薩",
    "defense": "3",
    "major": "Y",
    "x": "3344",
    "y": "1415",
    "path": "013,017",
    "water": " "
  },
  {
    "id": "013",
    "region_id": "007",
    "name": "Qasil",
    "chi_name": "卡西爾",
    "defense": "2",
    "major": "N",
    "x": "3708",
    "y": "1050",
    "path": "009,012",
    "water": " "
  },
  {
    "id": "014",
    "region_id": "008",
    "name": "Voatsiperifery",
    "chi_name": "沃特西佩里菲",
    "defense": "5",
    "major": "Y",
    "x": "4384",
    "y": "886",
    "path": "009,011,015",
    "water": "O"
  },
  {
    "id": "015",
    "region_id": "008",
    "name": "Mace",
    "chi_name": "梅斯",
    "defense": "3",
    "major": "N",
    "x": "4293",
    "y": "1187",
    "path": "014,016",
    "water": " "
  },
  {
    "id": "016",
    "region_id": "009",
    "name": "Fenugreek",
    "chi_name": "葫蘆巴",
    "defense": "4",
    "major": "Y",
    "x": "4357",
    "y": "1723",
    "path": "015,017",
    "water": "O"
  },
  {
    "id": "017",
    "region_id": "009",
    "name": "Annatto",
    "chi_name": "安納托",
    "defense": "4",
    "major": "N",
    "x": "3727",
    "y": "1754",
    "path": "012,016,049",
    "water": " "
  },
  {
    "id": "018",
    "region_id": "010",
    "name": "Lomatia",
    "chi_name": "洛馬提亞",
    "defense": "4",
    "major": "Y",
    "x": "446",
    "y": "1905",
    "path": "019,020",
    "water": "O"
  },
  {
    "id": "019",
    "region_id": "010",
    "name": "Barberry",
    "chi_name": "巴貝里",
    "defense": "2",
    "major": "N",
    "x": "976",
    "y": "1463",
    "path": "002,015",
    "water": "O"
  },
  {
    "id": "020",
    "region_id": "011",
    "name": "Candlenut",
    "chi_name": "坎德爾納特",
    "defense": "3",
    "major": "Y",
    "x": "1154",
    "y": "1867",
    "path": "018,021,033",
    "water": "I"
  },
  {
    "id": "021",
    "region_id": "011",
    "name": "Anise",
    "chi_name": "安妮斯",
    "defense": "4",
    "major": "N",
    "x": "1360",
    "y": "1723",
    "path": "020,024",
    "water": " "
  },
  {
    "id": "022",
    "region_id": "012",
    "name": "Elemi",
    "chi_name": "埃勒米",
    "defense": "3",
    "major": "Y",
    "x": "1456",
    "y": "1002",
    "path": "023,024",
    "water": " "
  },
  {
    "id": "023",
    "region_id": "012",
    "name": "Hing",
    "chi_name": "辛格",
    "defense": "4",
    "major": "N",
    "x": "1962",
    "y": "1283",
    "path": "022,025,026",
    "water": "I"
  },
  {
    "id": "024",
    "region_id": "013",
    "name": "Riberry",
    "chi_name": "里貝里",
    "defense": "4",
    "major": "Y",
    "x": "1682",
    "y": "1610",
    "path": "021,022,025",
    "water": " "
  },
  {
    "id": "025",
    "region_id": "013",
    "name": "Huito",
    "chi_name": "黑果",
    "defense": "4",
    "major": "N",
    "x": "2010",
    "y": "1771",
    "path": "023,024,030,031",
    "water": "I"
  },
  {
    "id": "026",
    "region_id": "014",
    "name": "Pandanus",
    "chi_name": "潘達納斯",
    "defense": "4",
    "major": "Y",
    "x": "2384",
    "y": "1319",
    "path": "023,027",
    "water": "I"
  },
  {
    "id": "027",
    "region_id": "014",
    "name": "Kokum",
    "chi_name": "科庫姆",
    "defense": "3",
    "major": "N",
    "x": "2684",
    "y": "1486",
    "path": "026,029",
    "water": "I"
  },
  {
    "id": "028",
    "region_id": "015",
    "name": "Turmeric",
    "chi_name": "特梅里克",
    "defense": "4",
    "major": "Y",
    "x": "3276",
    "y": "2048",
    "path": "029,046",
    "water": "I"
  },
  {
    "id": "029",
    "region_id": "015",
    "name": "Jimbu",
    "chi_name": "金布",
    "defense": "3",
    "major": "N",
    "x": "3017",
    "y": "1658",
    "path": "027,028",
    "water": "I"
  },
  {
    "id": "030",
    "region_id": "016",
    "name": "Zedoary",
    "chi_name": "澤多阿里",
    "defense": "3",
    "major": "Y",
    "x": "1807",
    "y": "1875",
    "path": "025,038",
    "water": "I"
  },
  {
    "id": "031",
    "region_id": "017",
    "name": "Cubeb",
    "chi_name": "庫貝布",
    "defense": "5",
    "major": "Y",
    "x": "2336",
    "y": "1658",
    "path": "025",
    "water": "I"
  },
  {
    "id": "032",
    "region_id": "018",
    "name": "Galangal",
    "chi_name": "加蘭高",
    "defense": "5",
    "major": "Y",
    "x": "179",
    "y": "2884",
    "path": "033,034",
    "water": "O"
  },
  {
    "id": "033",
    "region_id": "018",
    "name": "Mastic",
    "chi_name": "乳香",
    "defense": "3",
    "major": "N",
    "x": "949",
    "y": "2214",
    "path": "020,032,036",
    "water": "O"
  },
  {
    "id": "034",
    "region_id": "019",
    "name": "Quassia",
    "chi_name": "夸西亞",
    "defense": "5",
    "major": "Y",
    "x": "516",
    "y": "3194",
    "path": "032,035",
    "water": "O"
  },
  {
    "id": "035",
    "region_id": "019",
    "name": "Sumac",
    "chi_name": "蘇馬克",
    "defense": "4",
    "major": "N",
    "x": "949",
    "y": "2713",
    "path": "034,036",
    "water": "O"
  },
  {
    "id": "036",
    "region_id": "020",
    "name": "Clove",
    "chi_name": "克洛芙",
    "defense": "4",
    "major": "Y",
    "x": "1176",
    "y": "2404",
    "path": "033,035,037",
    "water": "B "
  },
  {
    "id": "037",
    "region_id": "020",
    "name": "Pepperleaf",
    "chi_name": "佩珀利夫",
    "defense": "2",
    "major": "N",
    "x": "1563",
    "y": "2737",
    "path": "036,042",
    "water": " "
  },
  {
    "id": "038",
    "region_id": "021",
    "name": "Omum",
    "chi_name": "奧姆姆",
    "defense": "4",
    "major": "Y",
    "x": "1759",
    "y": "2144",
    "path": "030,039",
    "water": " "
  },
  {
    "id": "039",
    "region_id": "021",
    "name": "Yomogi",
    "chi_name": "約莫吉",
    "defense": "3",
    "major": "N",
    "x": "1967",
    "y": "2214",
    "path": "038,040",
    "water": " "
  },
  {
    "id": "040",
    "region_id": "022",
    "name": "Tamarind",
    "chi_name": "塔瑪琳德",
    "defense": "4",
    "major": "Y",
    "x": "2807",
    "y": "1971",
    "path": "039,041",
    "water": " "
  },
  {
    "id": "041",
    "region_id": "022",
    "name": "Mahlab",
    "chi_name": "馬拉布",
    "defense": "2",
    "major": "N",
    "x": "2588",
    "y": "2283",
    "path": "040,044",
    "water": " "
  },
  {
    "id": "042",
    "region_id": "023",
    "name": "Kamut",
    "chi_name": "卡穆特",
    "defense": "4",
    "major": "Y",
    "x": "1709",
    "y": "3096",
    "path": "037,043",
    "water": " "
  },
  {
    "id": "043",
    "region_id": "023",
    "name": "Ajwain",
    "chi_name": "阿杰溫",
    "defense": "1",
    "major": "N",
    "x": "1962",
    "y": "2713",
    "path": "042,044",
    "water": " "
  },
  {
    "id": "044",
    "region_id": "024",
    "name": "Epazote",
    "chi_name": "埃帕佐特",
    "defense": "4",
    "major": "Y",
    "x": "2223",
    "y": "2521",
    "path": "041,043,045",
    "water": " "
  },
  {
    "id": "045",
    "region_id": "024",
    "name": "Akudjura",
    "chi_name": "阿庫朱拉",
    "defense": "1",
    "major": "N",
    "x": "2432",
    "y": "2617",
    "path": "044,047",
    "water": "I"
  },
  {
    "id": "046",
    "region_id": "025",
    "name": "Sassafras",
    "chi_name": "薩薩弗拉斯",
    "defense": "4",
    "major": "Y",
    "x": "2903",
    "y": "2569",
    "path": "028,047,048",
    "water": "I"
  },
  {
    "id": "047",
    "region_id": "025",
    "name": "Amchur",
    "chi_name": "阿姆楚爾",
    "defense": "1",
    "major": "N",
    "x": "2753",
    "y": "2884",
    "path": "045,046",
    "water": " "
  },
  {
    "id": "048",
    "region_id": "026",
    "name": "Tola",
    "chi_name": "托拉",
    "defense": "3",
    "major": "Y",
    "x": "3617",
    "y": "2331",
    "path": "046,049",
    "water": " "
  },
  {
    "id": "049",
    "region_id": "026",
    "name": "Erva",
    "chi_name": "埃爾瓦",
    "defense": "4",
    "major": "N",
    "x": "4001",
    "y": "3002",
    "path": "048,051",
    "water": " "
  },
  {
    "id": "050",
    "region_id": "027",
    "name": "Wattleseed",
    "chi_name": "沃特爾西德",
    "defense": "4",
    "major": "Y",
    "x": "4145",
    "y": "2396",
    "path": "017,051",
    "water": "O"
  },
  {
    "id": "051",
    "region_id": "027",
    "name": "Kani",
    "chi_name": "卡尼",
    "defense": "1",
    "major": "N",
    "x": "4341",
    "y": "2932",
    "path": "049,050",
    "water": " "
  }
]

export const rawCities: CityBase[] = CITIES.map(convertCityFromRaw);

export const getCityImgSrc = (city: CityBase) => {
  switch(city.defense) {
    case 1:
      return 'icons/village.svg'
    case 2:
      return 'icons/defensive-wall.svg'
    case 3:
      return 'icons/white-tower.svg'
    case 4:
      return 'icons/stone-tower.svg'
    case 5:
      return 'icons/castle.svg'
    default:
      return 'icons/village.svg'
  }
}