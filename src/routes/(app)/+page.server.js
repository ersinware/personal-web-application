import {getLatestProjects} from "$lib/js/server/data/cache/project.repository.cache.server.js";
import {error} from "@sveltejs/kit";

export async function load() {
    const {error: _error, projects} = await getLatestProjects()
    if (_error) {
        error(500, {message: _error})

        return
    }

    return {projects}
}