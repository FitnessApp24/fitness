import Parser from 'rss-parser';

export async function GET() {
    const feedurl = `http://feeds.feedburner.com/cresseytrainingsystems`;
    const parser = new Parser();
    return parser.parseURL(feedurl).then(data => {
        return Response.json({ data })
    }).catch(err => console.log(err))
  }