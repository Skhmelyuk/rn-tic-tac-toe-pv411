import { v } from "convex/values";
import { mutation, query } from "./_generated/server";


// 1. Запис завершеної партії в історію + оновлення лічильників у stats
export const recordHistory = mutation({
  args: {
    winner: v.union(v.literal("X"), v.literal("O"), v.literal("DRAW")),
    board: v.array(v.union(v.string(), v.null())),
    winnerCombination: v.optional(v.array(v.number())),
  },
  handler: async (ctx, args) => {
    // 1.1. Додаємо партію в таблицю games
    const gameId = await ctx.db.insert("gameHistory", {
      winner: args.winner,
      board: args.board,
      winnerCombination: args.winnerCombination,
      createdAt: Date.now(),
    });

    return gameId;
  },
});

export const getHistory = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query('gameHistory')
            .withIndex('by_creation')
            .order('desc')
            .take(20)
    }
})

// 3. Видалення окремого запису гри (Mutation)
export const deleteHistory = mutation({
  args: {
    id: v.id("gameHistory"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return { success: true };
  },
});

// 4. Повне очищення історії ігор (Mutation)
export const clearAllHistory = mutation({
  args: {},
  handler: async (ctx) => {
    const allGames = await ctx.db.query("gameHistory").collect();
    for (const game of allGames) {
      await ctx.db.delete(game._id);
    }
    return { success: true };
  },
});