import {Carryable, CarryableSystem} from 'carryable';

// Make a box.
let box = new Entity();
engine.addEntity(box);
box.addComponent(new BoxShape());
box.addComponent(new Transform({
  position: new Vector3(8, 0.5, 8)
}));

// Add the Carryable Component to the box.
let carryable = new Carryable();
box.addComponent(carryable);

// Set up toggling of the carry state via clicking.
box.addComponent(new OnClick(() => {
  carryable.toggleCarry();
}));

// Create a CarryableSystem to update our Carryable object.
engine.addSystem(new CarryableSystem());
