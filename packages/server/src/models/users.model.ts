import { users } from "@/schemas";
import { UserModel } from "@/types";
import { db } from "@/config";
import { eq } from "drizzle-orm";

export const userModel: UserModel = {
  // return db.execute(sql`SELECT * FROM users WHERE id = ${userId}`);
  getById: async (userId) =>
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

  // return db.execute(sql`SELECT * FROM users`);
  getAll: async () =>
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

  // SELECT password FROM users WHERE email = ${email} LIMIT 1
  getPassword: async (email) =>
    await db.query.users.findFirst({
      where: eq(users.email, email),
      columns: {
        id: true,
        password: true,
      },
    }),

  //return db.execute(sql`INSERT INTO users (email, password, username, roleId) VALUES (${user.email}, ${user.password}, ${user.username}, ${user.roleId}) RETURNING *`);
  create: async (newUserData) => {
    const roleId = newUserData.roleId;
    const createdUser = await db.insert(users).values({ ...newUserData, roleId }).returning({
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

  // return db.execute(sql`UPDATE users SET email = ${user.email}, password = ${user.password}, username = ${user.username}, roleId = ${user.roleId} WHERE id = ${userId} RETURNING *`);
  update: async (userId, updateUserData) => {
    const now = new Date();
    const updatedUser = await db
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
    return updatedUser[0];
  },

  // return db.execute(sql`DELETE FROM users WHERE id = ${userId}`);
  delete: async (userId) => {
    const result = await db
      .delete(users)
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

  // return db.execute(sql`SELECT * FROM users WHERE email = ${email}`);
  findUserByEmail: async (email) => {
    return db.query.users.findFirst({
      where: eq(users.email, email),
      columns: { id: true, password: true },
    });
  },
};
