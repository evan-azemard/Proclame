import { NewUser, PublicUser, UpdateUser, User } from "@/entities/users.entity";
import { users } from "@/schemas";
import { db } from "config/pool";
import { eq, sql } from "drizzle-orm";

export const userModel = {
  getAll: async (): Promise<PublicUser[]> =>
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

  getById: async (userId: string): Promise<PublicUser | undefined> =>
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

  create: async (user: NewUser): Promise<PublicUser[]> =>
    //return db.execute(sql`INSERT INTO users (email, password, username, roleId) VALUES (${user.email}, ${user.password}, ${user.username}, ${user.roleId}) RETURNING *`);
    await db.insert(users).values(user).returning({
      id: users.id,
      email: users.email,
      username: users.username,
      roleId: users.roleId,
      createdAt: users.createdAt,
      updatedAt: users.updatedAt,
      lastLogin: users.lastLogin,
    }),

  update: async (user: UpdateUser): Promise<number> => {
    // return db.execute(sql`UPDATE users SET email = ${user.email}, password = ${user.password}, username = ${user.username}, roleId = ${user.roleId} WHERE id = ${user.id} RETURNING *`);
    const result = await db
      .update(users)
      .set(user)
      .where(eq(users.id, user.id!));
    return result.rowCount ?? 0;
  },

  delete: async (userId: string): Promise<number> => {
    // return db.execute(sql`DELETE FROM users WHERE id = ${userId}`);
    const result = await db.delete(users).where(eq(users.id, userId));
    return result.rowCount ?? 0;
  },

  findUserByEmail: async (
    email: string
  ): Promise<{ id: string; password: string } | undefined> => {
    // return db.execute(sql`SELECT * FROM users WHERE email = ${email}`);
    return db.query.users.findFirst({
      where: eq(users.email, email),
      columns: { id: true, password: true },
    });
  },
};
