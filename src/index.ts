import * as data from "./data";
import {
  Region,
  Area,
  AreaDetails,
  Subzone,
  SubzoneDetails,
} from "./interfaces";

export const administrativeLocations = { Region, Area, Subzone };

export const getAreas = (regions?: Region[]): { [id: string]: AreaDetails } => {
  if (regions && regions.length > 0) {
    return Object.keys(data.areas.default)
      .filter((id: string) =>
        regions.includes(data.areas.default[id as Area].region),
      )
      .reduce((obj: { [id: string]: AreaDetails }, id: string) => {
        obj[id] = data.areas.default[id as Area];
        return obj;
      }, {});
  }
  return data.areas.default;
};

export const getSubzones = (
  areas?: Area[],
): { [id: string]: SubzoneDetails } => {
  if (areas && areas.length > 0) {
    return Object.keys(data.subzones.default)
      .filter((id: string) =>
        areas.includes(data.subzones.default[id as Subzone].area),
      )
      .reduce((obj: { [id: string]: SubzoneDetails }, id: string) => {
        obj[id] = data.subzones.default[id as Subzone];
        return obj;
      }, {});
  }
  return data.subzones.default;
};
