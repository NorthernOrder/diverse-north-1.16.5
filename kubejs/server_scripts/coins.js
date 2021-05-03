// priority: 0

onEvent("recipes", (event) => {
  event.remove({ mod: "coins" });

  // piles from 5 coins
  event.shapeless("coins:coin_pile_copper", [
    "coins:coin_copper",
    "coins:coin_copper",
    "coins:coin_copper",
    "coins:coin_copper",
    "coins:coin_copper",
  ]);
  event.shapeless("coins:coin_pile_iron", [
    "coins:coin_iron",
    "coins:coin_iron",
    "coins:coin_iron",
    "coins:coin_iron",
    "coins:coin_iron",
  ]);
  event.shapeless("coins:coin_pile_gold", [
    "coins:coin_gold",
    "coins:coin_gold",
    "coins:coin_gold",
    "coins:coin_gold",
    "coins:coin_gold",
  ]);
  event.shapeless("coins:coin_pile_platinum", [
    "coins:coin_platinum",
    "coins:coin_platinum",
    "coins:coin_platinum",
    "coins:coin_platinum",
    "coins:coin_platinum",
  ]);
  event.shapeless("coins:coin_pile_diamond", [
    "coins:coin_diamond",
    "coins:coin_diamond",
    "coins:coin_diamond",
    "coins:coin_diamond",
    "coins:coin_diamond",
  ]);

  // 5 coins from pile
  event.shapeless("5x coins:coin_copper", "coins:coin_pile_copper");
  event.shapeless("5x coins:coin_iron", "coins:coin_pile_iron");
  event.shapeless("5x coins:coin_gold", "coins:coin_pile_gold");
  event.shapeless("5x coins:coin_platinum", "coins:coin_pile_platinum");
  event.shapeless("5x coins:coin_diamond", "coins:coin_pile_diamond");

  // 2 lower piles to upper tier
  event.shapeless("coins:coin_iron", [
    "coins:coin_pile_copper",
    "coins:coin_pile_copper",
  ]);
  event.shapeless("coins:coin_gold", [
    "coins:coin_pile_iron",
    "coins:coin_pile_iron",
  ]);
  event.shapeless("coins:coin_platinum", [
    "coins:coin_pile_gold",
    "coins:coin_pile_gold",
  ]);
  event.shapeless("coins:coin_diamond", [
    "coins:coin_pile_platinum",
    "coins:coin_pile_platinum",
  ]);

  // 2 lower piles from upper tier
  event.shapeless("2x coins:coin_pile_copper", "coins:coin_iron");
  event.shapeless("2x coins:coin_pile_iron", "coins:coin_gold");
  event.shapeless("2x coins:coin_pile_gold", "coins:coin_platinum");
  event.shapeless("2x coins:coin_pile_platinum", "coins:coin_diamond");
});
