import Parser from 'rss-parser';

export async function get(req: any, res: any) {
  const parser = new Parser();
  const feed: Parser.Output = await parser.parseURL("http://feeds.bbci.co.uk/sport/football/rss.xml?edition=uk");
  res.end(JSON.stringify(feed)); 
}
