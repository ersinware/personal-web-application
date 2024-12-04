import {getLatestProjects} from "$lib/js/server/data/cache/project.repository.cache.server.js";
import {error} from "@sveltejs/kit";
import {getLatestArticles} from "$lib/js/server/data/cache/blog.repository.cache.server.js";

export async function load() {
    const results = await Promise.all([getLatestProjects(), getLatestArticles()])

    for (const result of results)
        if (result.error) {
            error(500, { message: result.error })

            return
        }

    return { projects: results[0].projects, articles: results[1].articles }
}