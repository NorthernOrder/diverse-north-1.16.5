// priority: 0

onEvent('jei.hide.items', event => {
	event.hide(/appliedenergistics2:facade/);
  event.hide(/refinedstorage:(?!.*(pattern|crafting|fluid)).*_grid/);
  event.hide(/refinedstorage:.+_pattern_grid/);
  event.hide(/refinedstorage:.+_crafting_grid/);
  event.hide(/refinedstorage:.+_fluid_grid/);
  event.hide(/refinedstorage:.+_controller/);
  event.hide(/refinedstorage:.+_creative_controller/);
  event.hide(/refinedstorage:.+_network_receiver/);
  event.hide(/refinedstorage:.+_network_transmitter/);
  event.hide(/refinedstorage:.+_relay/);
  event.hide(/refinedstorage:.+_detector/);
  event.hide(/refinedstorage:.+_security_manager/);
  event.hide(/refinedstorage:.+_wireless_transmitter/);
  event.hide(/refinedstorage:.+_disk_manipulator/);
  event.hide(/refinedstorage:.+_crafter/);
  event.hide(/refinedstorage:.+_crafter_manager/);
  event.hide(/refinedstorage:.+_crafting_monitor/);
})

events.listen('jei.add.items', function (event) {
  event.add(Item.of('appliedenergistics2:facade', {item:"minecraft:stone"}));
});