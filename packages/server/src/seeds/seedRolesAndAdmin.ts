import { db } from "../config/pool";
import { roles } from "../schemas/roles.schema";
import { users } from "../schemas/users.schema";
import { hash } from "argon2";

async function seedRoles() {
  const baseRoles = [
    { label: "USER", description: "Utilisateur standard" },
    { label: "ADMIN", description: "Administrateur" },
  ];
  for (const role of baseRoles) {
    await db.insert(roles).values(role).onConflictDoNothing();
  }
  console.log("Rôles de base insérés.");
}

async function seedAdminUser() {
  const { eq } = await import("drizzle-orm");
  const adminRole = await db.query.roles.findFirst({
    where: eq(roles.label, "ADMIN"),
  });
  if (!adminRole) throw new Error("Le rôle ADMIN doit exister.");

  const adminEmail = "admin@proclame.fr";
  const adminUsername = "admin";
  const adminPassword = "Admin123!";
  const passwordHash = await hash(adminPassword);

  const existing = await db.query.users.findFirst({
    where: eq(users.email, adminEmail),
  });
  if (existing) {
    console.log("Compte admin déjà existant.");
    return;
  }

  await db.insert(users).values({
    email: adminEmail,
    username: adminUsername,
    password: passwordHash,
    roleId: adminRole.id,
  });
  console.log("Compte admin créé.");
}

async function main() {
  await seedRoles();
  await seedAdminUser();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
