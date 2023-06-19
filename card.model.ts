export interface Card {
  artistName: string;
  attack: number;
  cardSetId: number;
  cardTypeId: number;
  childIds?: number[];
  classId: number;
  collectible: number;
  cropImage: string;
  duels?: { relevant: boolean; constructed: boolean };
  flavorText: string;
  health: number;
  id: number;
  image: string;
  imageGold: string;
  keywordIds: number[];
  manaCost: number;
  minionTypeId?: number;
  multiClassIds: number[];
  multiTypeIds?: number[];
  name: string;
  parentId: number;
  rarityId: number;
  slug: string;
  text: string;
}
