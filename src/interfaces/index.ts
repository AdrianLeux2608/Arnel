interface LocalisedName {
  en: string;
  zh?: string;
  ms?: string;
  ta?: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

// Administrative level 1
export enum Region {
  CENTRAL = "C",
  EAST = "E",
  NORTH = "N",
  NORTHEAST = "NE",
  WEST = "W",
}

// Administrative level 2
export enum Area {
  ANG_MO_KIO = "AMK",
  BEDOK = "BDK",
  BISHAN = "BSH",
  BOON_LAY = "BNL",
  BUKIT_BATOK = "BBT",
  BUKIT_MERAH = "BMR",
  BUKIT_PANJANG = "BKP",
  BUKIT_TIMAH = "BKT",
  CENTRAL_WATER_CATCHMENT = "CWC",
  CHANGI = "CHG",
  CHANGI_BAY = "CGB",
  CHOA_CHU_KANG = "CCK",
  CLEMENTI = "CLE",
  DOWNTOWN_CORE = "DTC",
  GEYLANG = "GLG",
  HOUGANG = "HGN",
  JURONG_EAST = "JUR",
  JURONG_WEST = "JUW",
  KALLANG = "KAL",
  LIM_CHU_KANG = "LCK",
  MANDAI = "MND",
  MARINA_EAST = "MAE",
  MARINA_SOUTH = "MAS",
  MARINE_PARADE = "MEP",
  MUSEUM = "MSM",
  NEWTON = "NEW",
  NORTHEASTERN_ISLANDS = "NEI",
  NOVENA = "NOV",
  ORCHARD = "ORC",
  OUTRAM = "OTR",
  PASIR_RIS = "PSR",
  PAYA_LEBAR = "PYL",
  PIONEER = "PNR",
  PUNGGOL = "PGL",
  QUEENSTOWN = "QUE",
  RIVER_VALLEY = "RVV",
  ROCHOR = "RCR",
  SELETAR = "SLT",
  SEMBAWANG = "SBW",
  SENGKANG = "SKG",
  SERANGOON = "SER",
  SIMPANG = "SMP",
  SINGAPORE_RIVER = "SGR",
  SOUTHERN_ISLANDS = "STI",
  STRAITS_VIEW = "STV",
  SUNGEI_KADUT = "SKD",
  TAMPINES = "TAM",
  TANGLIN = "TGL",
  TENGAH = "TGH",
  TOA_PAYOH = "TAP",
  TUAS = "TUA",
  WESTERN_ISLANDS = "WIL",
  WESTERN_WATER_CATCHMENT = "WWC",
  WOODLANDS = "WDL",
  YISHUN = "YIS",
}

// Administrative level 3
export enum Subzone {
  AMK_TOWN_CENTRE = "AMK_TWC",
  AMK_CHENG_SAN = "AMK_CHS",
  AMK_CHONG_BOON = "AMK_CHB",
  AMK_KEBUN_BAHRU = "AMK_KBB",
  AMK_SEMBAWANG_HILLS = "AMK_SBH",
  AMK_SHANGRI_LA = "AMK_SRL",
  AMK_TAGORE = "AMK_TAG",
  AMK_TOWNSVILLE = "AMK_TWV",
  AMK_YIO_CHU_KANG = "AMK_YCK",
  AMK_YIO_CHU_KANG_EAST = "AMK_YKE",
  AMK_YIO_CHU_KANG_NORTH = "AMK_YKN",
  AMK_YIO_CHU_KANG_WEST = "AMK_YKW",
  BBT_BRICKWORKS = "BBT_BRW",
  BBT_BUKIT_BATOK_CENTRAL = "BBT_BBC",
  BBT_BUKIT_BATOK_EAST = "BBT_BBE",
  BBT_BUKIT_BATOK_SOUTH = "BBT_BBS",
  BBT_BUKIT_BATOK_WEST = "BBT_BBW",
  BBT_GOMBAK = "BBT_GOB",
  BBT_GUILIN = "BBT_GUL",
  BBT_HILLVIEW = "BBT_HIV",
  BBT_HONG_KAH_NORTH = "BBT_HKN",
  BDK_BAYSHORE = "BDK_BAY",
  BDK_BEDOK_NORTH = "BDK_BEN",
  BDK_BEDOK_RESERVOIR = "BDK_BER",
  BDK_BEDOK_SOUTH = "BDK_BES",
  BDK_FRANKEL = "BDK_FRA",
  BDK_KAKI_BUKIT = "BDK_KAB",
  BDK_KEMBANGAN = "BDK_KEM",
  BDK_SIGLAP = "BDK_SIG",
  BKP_BANGKIT = "BKP_BAN",
  BKP_DAIRY_FARM = "BKP_DAI",
  BKP_FAJAR = "BKP_FAJ",
  BKP_JELEBU = "BKP_JEL",
  BKP_NATURE_RESERVE = "BKP_NAR",
  BKP_SAUJANA = "BKP_SAU",
  BKP_SENJA = "BKP_SEN",
  BKT_ANAK_BUKIT = "BKT_ANB",
  BKT_CORONATION_ROAD = "BKT_COR",
  BKT_FARRER_COURT = "BKT_FAC",
  BKT_HILLCREST = "BKT_HIL",
  BKT_HOLLAND_ROAD = "BKT_HOR",
  BKT_LEEDON_PARK = "BKT_LEP",
  BKT_SWISS_CLUB = "BKT_SWC",
  BKT_ULU_PANDAN = "BKT_ULP",
  BMR_ALEXANDRA_HILL = "BMR_ALH",
  BMR_ALEXANDRA_NORTH = "BMR_ALN",
  BMR_BUKIT_HO_SWEE = "BMR_BHS",
  BMR_BUKIT_MERAH = "BMR_BUM",
  BMR_CITY_TERMINALS = "BMR_CIT",
  BMR_DEPOT_ROAD = "BMR_DER",
  BMR_EVERTON_PARK = "BMR_EVP",
  BMR_HENDERSON_HILL = "BMR_HEH",
  BMR_KAMPONG_TIONG_BAHRU = "BMR_KTB",
  BMR_MARITIME_SQUARE = "BMR_MAS",
  BMR_REDHILL = "BMR_RED",
  BMR_SINGAPORE_GENERAL_HOSPITAL = "BMR_SGH",
  BMR_TELOK_BLANGAH_DRIVE = "BMR_TBD",
  BMR_TELOK_BLANGAH_RISE = "BMR_TBR",
  BMR_TELOK_BLANGAH_WAY = "BMR_TBW",
  BMR_TIONG_BAHRU = "BMR_TIB",
  BMR_TIONG_BAHRU_STATION = "BMR_TBS",
  BNL_LIU_FANG = "BNL_LIF",
  BNL_SAMULUN = "BNL_SAM",
  BNL_SHIPYARD = "BNL_SHI",
  BNL_TUKANG = "BNL_TUK",
  BSH_BISHAN_EAST = "BSH_BIE",
  BSH_MARYMOUNT = "BSH_MAR",
  BSH_UPPER_THOMSON = "BSH_UPT",
  CCK_CHOA_CHU_KANG_CENTRAL = "CCK_CCC",
  CCK_CHOA_CHU_KANG_NORTH = "CCK_CCN",
  CCK_KEAT_HONG = "CCK_KEH",
  CCK_PENG_SIANG = "CCK_PES",
  CCK_TECK_WHYE = "CCK_TEW",
  CCK_YEW_TEE = "CCK_YET",
  CGB_CHANGI_BAY = "CGB_CHB",
  CHG_CHANGI_AIRPORT = "CHG_CHA",
  CHG_CHANGI_POINT = "CHG_CHP",
  CHG_CHANGI_WEST = "CHG_CHW",
  CLE_CLEMENTI_CENTRAL = "CLE_CLC",
  CLE_CLEMENTI_NORTH = "CLE_CLN",
  CLE_CLEMENTI_WEST = "CLE_CWE",
  CLE_CLEMENTI_WOODS = "CLE_CWO",
  CLE_FABER = "CLE_FAB",
  CLE_PANDAN = "CLE_PAN",
  CLE_SUNSET_WAY = "CLE_SUW",
  CLE_TOH_TUCK = "CLE_TOT",
  CLE_WEST_COAST = "CLE_WEC",
  CWC_CENTRAL_WATER_CATCHMENT = "CWC_CWC",
  DTC_ANSON = "DTC_ANS",
  DTC_BAYFRONT = "DTC_BAY",
  DTC_BUGIS = "DTC_BUG",
  DTC_CECIL = "DTC_CEC",
  DTC_CENTRAL = "DTC_CEN",
  DTC_CITY_HALL = "DTC_CIH",
  DTC_CLIFFORD_PIER = "DTC_CLP",
  DTC_MARINA_CENTRE = "DTC_MAC",
  DTC_MAXWELL = "DTC_MAX",
  DTC_PHILLIP = "DTC_PHI",
  DTC_RAFFLES_PLACE = "DTC_RAP",
  DTC_TANJONG_PAGAR = "DTC_TAP",
  GLG_ALJUNIED = "GLG_ALJ",
  GLG_GEYLANG_EAST = "GLG_GEE",
  GLG_KALLANG_WAY = "GLG_KAW",
  GLG_KAMPONG_UBI = "GLG_KAU",
  GLG_MACPHERSON = "GLG_MAC",
  HGN_DEFU_INDUSTRIAL_PARK = "HGN_DIP",
  HGN_HOUGANG_CENTRAL = "HGN_HOC",
  HGN_HOUGANG_EAST = "HGN_HOE",
  HGN_HOUGANG_WEST = "HGN_HOW",
  HGN_KANGKAR = "HGN_KAN",
  HGN_KOVAN = "HGN_KOV",
  HGN_LORONG_AH_SOO = "HGN_LAS",
  HGN_LORONG_HALUS = "HGN_LOH",
  HGN_TAI_SENG = "HGN_TAS",
  HGN_TRAFALGAR = "HGN_TRA",
  JUR_INTERNATIONAL_BUSINESS_PARK = "JUR_IBP",
  JUR_JURONG_GATEWAY = "JUR_JUG",
  JUR_JURONG_PORT = "JUR_JUP",
  JUR_JURONG_RIVER = "JUR_JUR",
  JUR_LAKESIDE = "JUR_LAK",
  JUR_PENJURU_CRESCENT = "JUR_PEC",
  JUR_TEBAN_GARDENS = "JUR_TEG",
  JUR_TOH_GUAN = "JUR_TOG",
  JUR_YUHUA_EAST = "JUR_YUE",
  JUR_YUHUA_WEST = "JUR_YUW",
  JUW_BOON_LAY_PLACE = "JUW_BLP",
  JUW_CHIN_BEE = "JUW_CHB",
  JUW_HONG_KAH = "JUW_HOK",
  JUW_JURONG_WEST_CENTRAL = "JUW_JWC",
  JUW_KIAN_TECK = "JUW_KIT",
  JUW_SAFTI = "JUW_SAF",
  JUW_TAMAN_JURONG = "JUW_TAJ",
  JUW_WENYA = "JUW_WEN",
  JUW_YUNNAN = "JUW_YUN",
  KAL_BENDEMEER = "KAL_BEN",
  KAL_BOON_KENG = "KAL_BOK",
  KAL_CRAWFORD = "KAL_CRA",
  KAL_GEYLANG_BAHRU = "KAL_GEB",
  KAL_KALLANG_BAHRU = "KAL_KBA",
  KAL_KAMPONG_BUGIS = "KAL_KBU",
  KAL_KAMPONG_JAVA = "KAL_KAJ",
  KAL_LAVENDER = "KAL_LAV",
  KAL_TANJONG_RHU = "KAL_TAR",
  LCK_LIM_CHU_KANG = "LCK_LCK",
  MAE_MARINA_EAST = "MAE_MAE",
  MAS_MARINA_SOUTH = "MAS_MAS",
  MEP_EAST_COAST = "MEP_EAC",
  MEP_KATONG = "MEP_KAT",
  MEP_MARINA_EAST = "MEP_MAE",
  MEP_MARINE_PARADE = "MEP_MAP",
  MEP_MOUNTBATTEN = "MEP_MOU",
  MND_MANDAI_EAST = "MND_MEA",
  MND_MANDAI_ESTATE = "MND_MES",
  MND_MANDAI_WEST = "MND_MAW",
  MSM_BRAS_BASAH = "MSM_BRB",
  MSM_DHOBY_GHAUT = "MSM_DHG",
  MSM_FORT_CANNING = "MSM_FOC",
  NEW_CAIRNHILL = "NEW_CAI",
  NEW_GOODWOOD_PARK = "NEW_GOP",
  NEW_ISTANA_NEGARA = "NEW_ISN",
  NEW_MONKS_HILL = "NEW_MOH",
  NEW_NEWTON_CIRCUS = "NEW_NEC",
  NEW_ORANGE_GROVE = "NEW_ORG",
  NOV_BALASTIER = "NOV_BAL",
  NOV_DUNEARN = "NOV_DUN",
  NOV_MALCOLM = "NOV_MAL",
  NOV_MOULMEIN = "NOV_MOU",
  NOV_MOUNT_PLEASANT = "NOV_PLE",
  ORC_BOULEVARD = "ORC_BOU",
  ORC_SOMERSET = "ORC_SOM",
  ORC_TANGLIN = "ORC_TAN",
  OTR_CHINA_SQUARE = "OTR_CHS",
  OTR_CHINATOWN = "OTR_CHI",
  OTR_PEARLS_HILL = "OTR_PEH",
  OTR_PEOPLES_PARK = "OTR_PEP",
  PGL_CONEY_ISLAND = "PGL_COI",
  PGL_MATILDA = "PGL_MAT",
  PGL_NORTHSORE = "PGL_NOR",
  PGL_PUNGGOL_CANAL = "PGL_PUC",
  PGL_PUNGGOL_FIELD = "PGL_PUF",
  PGL_PUNGGOL_TOWN_CENTRE = "PGL_PTC",
  PGL_WATERWAY_EAST = "PGL_WAE",
  PNR_BENOI_SECTOR = "PNR_BES",
  PNR_GUL_BASIN = "PNR_GUB",
  PNR_GUL_CIRCLE = "PNR_GUC",
  PNR_JOO_KOON = "PNR_JOK",
  PNR_PIONEER_SECTOR = "PNR_PIS",
  PSR_FLORA_DRIVE = "PSR_FLD",
  PSR_LOYANG_EAST = "PSR_LOE",
  PSR_LOYANG_WEST = "PSR_LOW",
  PSR_PASIR_RIS_CENTRAL = "PSR_PRC",
  PSR_PASIR_RIS_DRIVE = "PSR_PRD",
  PSR_PASIR_RIS_PARK = "PSR_PRP",
  PSR_PASIR_RIS_WAFER_FAB_PARK = "PSR_WFP",
  PSR_PASIR_RIS_WEST = "PSR_PRW",
  PYL_AIRPORT_ROAD = "PYL_AIR",
  PYL_PAYA_LEBAR_EAST = "PYL_PLE",
  PYL_PAYA_LEBAR_NORTH = "PYL_PLN",
  PYL_PAYA_LEBAR_WEST = "PYL_PLW",
  PYL_PLAB = "PYL_PLA",
  QUE_COMMONWEALTH = "QUE_COM",
  QUE_DOVER = "QUE_DOV",
  QUE_GHIM_MOH = "QUE_GHM",
  QUE_HOLLAND_DRIVE = "QUE_HOD",
  QUE_KENT_RIDGE = "QUE_KER",
  QUE_MARGARET_DRIVE = "QUE_MAD",
  QUE_MEI_CHIN = "QUE_MEC",
  QUE_NATIONAL_UNIVERSITY_OF_SINGAPORE = "QUE_NUS",
  QUE_ONENORTH = "QUE_ONE",
  QUE_PASIR_PANJANG_1 = "QUE_PP1",
  QUE_PASIR_PANJANG_2 = "QUE_PP2",
  QUE_PORT = "QUE_POR",
  QUE_QUEENSWAY = "QUE_QUE",
  QUE_SINGAPORE_POLYTECHNIC = "QUE_SIP",
  QUE_TANGLIN_HALT = "QUE_TAH",
  RCR_BENCOOLEN = "RCR_BEN",
  RCR_FARRER_PARK = "RCR_FAP",
  RCR_KAMPONG_GLAM = "RCR_KAG",
  RCR_LITTLE_INDIA = "RCR_LII",
  RCR_MACKENZIE = "RCR_MAC",
  RCR_MOUNT_EMILY = "RCR_MOE",
  RCR_ROCHOR_CANAL = "RCR_ROC",
  RCR_SELEGIE = "RCR_SEL",
  RCR_SUNGEI_ROAD = "RCR_SUR",
  RCR_VICTORIA = "RCR_VIC",
  RVV_INSTITUTION_HILL = "RVV_INH",
  RVV_LEONIE_HILL = "RVV_LEH",
  RVV_ONE_TREE_HILL = "RVV_OTH",
  RVV_OXLEY = "RVV_OXL",
  RVV_PATERSON = "RVV_PAT",
  SBW_ADMIRALTY = "SBW_ADM",
  SBW_SEMBAWANG_CENTRAL = "SBW_SEC",
  SBW_SEMBAWANG_EAST = "SBW_SEE",
  SBW_SEMBAWANG_NORTH = "SBW_SMN",
  SBW_SEMBAWANG_SPRINGS = "SBW_SSP",
  SBW_SEMBAWANG_STRAITS = "SBW_SST",
  SBW_SENOKO_NORTH = "SBW_SNN",
  SBW_SENOKO_SOUTH = "SBW_SES",
  SBW_THE_WHARVES = "SBW_THW",
  SER_LORONG_CHUAN = "SER_LOC",
  SER_SELETAR_HILLS = "SER_SEH",
  SER_SERANGOON_CENTRAL = "SER_SEC",
  SER_SERANGOON_GARDEN = "SER_SEG",
  SER_SERANGOON_NORTH = "SER_SEN",
  SER_SERANGOON_NORTH_INDUSTRIAL_ESTATE = "SER_SNI",
  SER_UPPER_PAYA_LEBAR = "SER_UPL",
  SGR_BOAT_QUAY = "SGR_BOQ",
  SGR_CLARKE_QUAY = "SGR_CLQ",
  SGR_ROBERTSON_QUAY = "SGR_ROQ",
  SKD_GALI_BATU = "SKD_GAB",
  SKD_KRANJI = "SKD_KRA",
  SKD_PANG_SUA = "SKD_PAS",
  SKD_RESERVOIR_VIEW = "SKD_REV",
  SKD_TURF_CLUB = "SKD_TUC",
  SKG_ANCHORVALE = "SKG_ANC",
  SKG_COMPASSVALE = "SKG_COM",
  SKG_FERNVALE = "SKG_FER",
  SKG_LORONG_HALUS_NORTH = "SKG_LHN",
  SKG_RIVERVALE = "SKG_RIV",
  SKG_SENGKANG_TOWN_CENTRE = "SKG_STC",
  SKG_SENGKANG_WEST = "SKG_SEW",
  SMP_PULAU_SELETAR = "SMP_PUS",
  SMP_SIMPANG_NORTH = "SMP_SIN",
  SMP_SIMPANG_SOUTH = "SMP_SIS",
  SMP_TANJONG_IRAU = "SMP_TAI",
  SLT_PULAR_PUNGGOL_BARAT = "SLT_PPB",
  SLT_PULAU_PUNGGOL_TIMOR = "SLT_PPT",
  SLT_SELETAR = "SLT_SEL",
  SLT_SELETAR_AEROSPACE_PARK = "SLT_SAP",
  STI_SENTOSA = "STI_SEN",
  STV_STRAITS_VIEW = "STV_STV",
  TAM_SIMEI = "TAM_SIM",
  TAM_TAMPINES_EAST = "TAM_TAE",
  TAM_TAMPINES_NORTH = "TAM_TAN",
  TAM_TAMPINES_WEST = "TAM_TAW",
  TAM_XILIN = "TAM_XIL",
  // TAP_ = "TAP_",
  // TGH_ = "TGH_",
  // TGL_ = "TGL_",
  TUA_TENGEH = "TUA_TEN",
  TUA_TUAS_BAY = "TUA_TUB",
  TUA_TUAS_NORTH = "TUA_TUN",
  TUA_TUAS_PROMENADE = "TUA_TUP",
  TUA_TUAS_VIEW = "TUA_TUV",
  TUA_TUAS_VIEW_EXTENSION = "TUA_TVE",
  WDL_GREENWOOD_PARK = "WDL_GRP",
  WDL_MIDVIEW = "WDL_MID",
  WDL_NORTH_COAST = "WDL_NOC",
  WDL_SENOKO_WEST = "WDL_SEW",
  WDL_WOODGROVE = "WDL_WOO",
  WDL_WOODLANDS_EAST = "WDL_WOE",
  WDL_WOODLANDS_REGIONAL_CENTRE = "WDL_WRC",
  WDL_WOODLANDS_SOUTH = "WDL_WOS",
  WDL_WOODLANDS_WEST = "WDL_WOW",
  // WIL_ = "WIL_",
  WWC_WESTERN_WATER_CATCHMENT = "WWC_WWC",
  YIS_KHATIB = "YIS_KHA",
  YIS_LOWER_SELETAR = "YIS_LOS",
  YIS_NEE_SOON = "YIS_NES",
  YIS_NORTHLAND = "YIS_NOR",
  YIS_SPRINGLEAF = "YIS_SPR",
  YIS_YISHUN_CENTRAL = "YIS_YIC",
  YIS_YISHUN_EAST = "YIS_YIE",
  YIS_YISHUN_SOUTH = "YIS_YIS",
  YIS_YISHUN_WEST = "YIS_YIW",
}

interface LocationDetails {
  name: LocalisedName;
  coordinates?: Coordinates;
}

export interface RegionDetails extends LocationDetails {}

export interface AreaDetails extends LocationDetails {
  region: Region;
}

export interface SubzoneDetails extends LocationDetails {
  area: Area;
}
