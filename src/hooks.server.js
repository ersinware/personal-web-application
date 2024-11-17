import {minify} from "html-minifier";

export function handle({event, resolve}) {
    let page = ''

    return resolve(
        event,
        {
            transformPageChunk: ({html, done}) => {
                page += html

                if (done)
                    return minify(
                        page,
                        {
                            collapseBooleanAttributes: true,
                            collapseWhitespace: true,
                            conservativeCollapse: true,
                            decodeEntities: true,
                            html5: true,
                            ignoreCustomComments: [/^#/],
                            minifyCSS: true,
                            minifyJS: true,
                            removeAttributeQuotes: true,
                            // some hydration code needs comments, so leave them in
                            removeComments: false,
                            removeOptionalTags: true,
                            removeRedundantAttributes: true,
                            removeScriptTypeAttributes: true,
                            removeStyleLinkTypeAttributes: true,
                            sortAttributes: true,
                            sortClassName: true,
                        }
                    )
            }
        }
    )
}