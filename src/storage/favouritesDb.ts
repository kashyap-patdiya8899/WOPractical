import { Character } from '@WOPractical/types';
import { open } from 'react-native-quick-sqlite';

const DB_NAME = 'wopractical.db';
const TABLE_NAME = 'favourite_characters';

const db = open({ name: DB_NAME });

db.execute(`
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id INTEGER PRIMARY KEY,
    data TEXT NOT NULL
  );
`);

function parseCharacter(row: { data: string }): Character {
  return JSON.parse(row.data) as Character;
}

export function getAllFavourites(): Character[] {
  const result = db.execute(`SELECT data FROM ${TABLE_NAME} ORDER BY id ASC`);

  if (!result.rows) {
    return [];
  }

  return result.rows._array.map(parseCharacter);
}

export function addFavourite(character: Character): void {
  db.execute(
    `INSERT OR REPLACE INTO ${TABLE_NAME} (id, data) VALUES (?, ?)`,
    [character.id, JSON.stringify(character)],
  );
}

export function removeFavourite(characterId: number): void {
  db.execute(`DELETE FROM ${TABLE_NAME} WHERE id = ?`, [characterId]);
}

export function isFavourite(characterId: number): boolean {
  const result = db.execute(
    `SELECT id FROM ${TABLE_NAME} WHERE id = ?`,
    [characterId],
  );

  return (result.rows?.length ?? 0) > 0;
}
