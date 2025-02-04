import { atom, selector } from "recoil"

export const networkAtom = atom({
  key: "networkAtom",
  default: 102
})

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0
})
export const messageAtom = atom({
  key: "messageAtom",
  default: 0
})
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 20
})

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messageAtomCount = get(messageAtom);
    return networkAtomCount + jobsAtomCount + notificationAtomCount + messageAtomCount

  }
})