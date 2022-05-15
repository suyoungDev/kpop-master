import { rest } from 'msw';

let mockDatabase = { url: [] };

export const handlers = [
  rest.post('/url', (req, res, ctx) => {
    const { trackName, artistName, videoId } = req.body;

    mockDatabase.url.push({ trackName, artistName, videoId });

    return res(ctx.status(200).json({ success: true }));
  }),
  rest.get('/url', (req, res, ctx) => {
    return res(ctx.status(200).json(mockDatabase.url));
  }),
];
