import { TrackAPI } from "./datasources/track-api.ts";

export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
}
