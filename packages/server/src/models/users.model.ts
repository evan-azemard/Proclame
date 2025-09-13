import { users } from "@/schemas";
import { UserModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const userModel: UserModel = {
  getById: async (userId) =>
    // return db.execute(sql`SELECT * FROM users WHERE id = ${userId}`);
    await db.query.users.findFirst({
      where: eq(users.id, userId),
      columns: {
        id: true,
        email: true,
        username: true,
        roleId: true,
        createdAt: true,
        updatedAt: true,
        lastLogin: true,
      },
    }),

  getAll: async () =>
    // return db.execute(sql`SELECT * FROM users`);
    await db
      .select({
        id: users.id,
        email: users.email,
        username: users.username,
        roleId: users.roleId,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
        lastLogin: users.lastLogin,
      })
      .from(users),

  create: async (newUserData) => {
    //return db.execute(sql`INSERT INTO users (email, password, username, roleId) VALUES (${user.email}, ${user.password}, ${user.username}, ${user.roleId}) RETURNING *`);
    const createdUser = await db.insert(users).values(newUserData).returning({
      id: users.id,
      email: users.email,
      username: users.username,
      roleId: users.roleId,
      createdAt: users.createdAt,
      updatedAt: users.updatedAt,
      lastLogin: users.lastLogin,
    });
    return createdUser[0];
  },

  update: async (userId, updateUserData) => {
    // return db.execute(sql`UPDATE users SET email = ${user.email}, password = ${user.password}, username = ${user.username}, roleId = ${user.roleId} WHERE id = ${userId} RETURNING *`);
    const now = new Date();
    const result = await db
      .update(users)
      .set({ ...updateUserData, updatedAt: now })
      .where(eq(users.id, userId))
      .returning({
        id: users.id,
        email: users.email,
        username: users.username,
        roleId: users.roleId,
        createdAt: users.createdAt,
        updatedAt: users.updatedAt,
        lastLogin: users.lastLogin,
      });
    return result[0];
  },

  delete: async (userId) => {
    // return db.execute(sql`DELETE FROM users WHERE id = ${userId}`);
    const result = await db.delete(users).where(eq(users.id, userId));
    return result.rowCount ?? 0;
  },

  findUserByEmail: async (email) => {
    // return db.execute(sql`SELECT * FROM users WHERE email = ${email}`);
    return db.query.users.findFirst({
      where: eq(users.email, email),
      columns: { id: true, password: true },
    });
  },
};
