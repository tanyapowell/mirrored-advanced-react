var {forwardTo} = require('prisma-binding');

// Get requests to db go here
const Query = {
  items: forwardTo('db')
  // async items(parent, args, ctx, info) {
  //   console.log(ctx)
  //   const items = await ctx.db.query.items();

  //   return items;
  // }
};

module.exports = Query;
