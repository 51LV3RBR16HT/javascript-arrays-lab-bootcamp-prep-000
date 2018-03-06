const app = "I don't do much."

function destructivelyAppendKitten(Buttons) {
  kittens.push(Buttons);
  return kittens
}

function destructivelyPrependKitten(Fluffy) {
  kittens.unshift(Fluffy)
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}



