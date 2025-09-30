// Permet de lancer une erreur spécifique en cas de tentative de création ou mise à jour d'une entité avec des champs uniques déjà existants
export function throwIfDuplicate(
  error: unknown,
  type: "CREATING" | "UPDATING",
  name: string,
  uniqueField: string[]
) {
  const err = error as { code?: string; message?: string; detail?: string };

  const isDuplicate =
    err.code === "23505" ||
    err.code === "ER_DUP_ENTRY" ||
    err.message?.toLowerCase().includes("duplicate key");

  if (!isDuplicate) return;

  const d = err.detail?.toLowerCase();
  for (const field of uniqueField) {
    if (d?.includes(field))
      throw new Error(
        `ERROR_${type.toUpperCase()}_${name.toUpperCase()}_DUPLICATE_${field.toUpperCase()}`
      );
  }
  throw new Error(
    `ERROR_${type.toUpperCase()}_${name.toUpperCase()}_DUPLICATE`
  );
}
