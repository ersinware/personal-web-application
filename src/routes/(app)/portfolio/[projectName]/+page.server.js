import {getUndashedString} from "$lib/js/common/util.common.js";

export function load({ params }) {
    return { project: { name: getUndashedString(params.projectName) } }
}