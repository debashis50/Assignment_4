
function isBestFriend(f1, f2) {
    if (typeof f1 !== "object" || f1 === null || typeof f2 !== "object" || f2 === null) {
      return "Invalid";
    }
    if (f1.name === undefined || f1.roll === undefined || f1.bestFriend === undefined ||
        f2.name === undefined || f2.roll === undefined || f2.bestFriend === undefined) {
    return "Invalid";
  }
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
      return true;
    } else {
      return false;
    }
  }