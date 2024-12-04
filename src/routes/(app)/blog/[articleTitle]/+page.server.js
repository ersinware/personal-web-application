import {getUndashedString} from "$lib/js/common/util.common.js";

export function load({ params }) {
    return { article: { title: getUndashedString(params.articleTitle) } }
}