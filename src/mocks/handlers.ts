import { rest } from 'msw';
import team from '../data/team.json';
import position from '../data/position.json';
import player from '../data/player.json';

export const handlers = [
  rest.get('/api/team/2021', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(team));
  }),

  rest.get('/api/position', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(position));
  }),
  rest.get('/api/player', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(player));
  }),
];
