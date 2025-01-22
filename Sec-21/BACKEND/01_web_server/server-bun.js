import {serve} from 'bun'

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === '/'){
            return new Response('Hello Ferrari', {status: 200});
        } else if (url.pathname === '/Ferrari'){
            return new Response('Ferrari SF90 Stradale', {status: 200});
        } else {
            return new Response('404 Not found', {
                status: 404
            })
        }
    },
    port: 3003,
    hostname: '127.0.0.1'
})