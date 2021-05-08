onEvent("recipes", (recipes) => {
  recipes.remove({ id: "travel_anchors:travel_anchor" });
  recipes.shaped("travel_anchors:travel_anchor", ["MSM", "SES", "MSM"], {
    E: "#elevatorid:elevators",
    M: "#forge:sheetmetals/iron",
    S: "#forge:silicon",
  });
});

onEvent("block.tags", (tags) => {
  tags.add("forge:barrels", "#charm:barrels");
  tags.add("forge:barrels/wooden", "#charm:barrels");
});

onEvent("item.tags", (tags) => {
  tags.add("forge:barrels", "#charm:barrels");
  tags.add("forge:barrels/wooden", "#charm:barrels");
});
