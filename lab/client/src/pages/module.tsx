import React from "react";
import { useQuery} from '@apollo/client';
import { gql } from "../__generated__";
import { useParams } from 'react-router-dom';
import { Layout, ModuleDetail ,QueryResult } from "../components";


export const GET_MODULE_AND_PARENT_TRACK = gql(`
    query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
        module(id: $moduleId) {
            id
            title
            content
            videoUrl
        }
        track(id: $trackId) {
            id
            title
            modules {
                id
                title
                length
            }
        }
    }
`);

const Module = () => {
    const { moduleId = "", trackId = "" } = useParams();
    const { loading , error, data } = useQuery(
        GET_MODULE_AND_PARENT_TRACK, {
        variables: { moduleId, trackId },
    });

    <Layout fullWidth>
        <QueryResult loading={loading} error={error} data={data}>
            <ModuleDetail track={data?.track} module={data?.module}></ModuleDetail>
        </QueryResult>
    </Layout>

}
export default Module;
