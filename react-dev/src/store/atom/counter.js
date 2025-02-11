import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
      key: "networkAtom",
      get: async()=>{
        const res= await axios.get()
      }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})