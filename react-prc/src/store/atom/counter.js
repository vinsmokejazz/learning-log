import { atom, selector } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter"
})

export const evenSelector = selector({
  key: "isEvenSelector", //to uniquely idetify it
  get: function ({ get }) {
    const currentCount = get(counterAtom); //selector depends on CounterAtom by using get
    const isEven = (currentCount % 2 == 0);
    return isEven;
  }
})
// selectors mainly eg like toggle button for premium users in admin